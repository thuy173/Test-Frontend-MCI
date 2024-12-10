import { createSlice } from "@reduxjs/toolkit";
import { persistor } from "@/redux/store";
import authService from "@/redux/api/authApi";
import { AUTH_MESSAGES } from "@/constants/auth.constants";
import Cookies from "js-cookie";
import { API_CONFIG } from "@/types/auth/config";
import { addLoadingCases, defaultHandlers } from "@/utils/redux.utils";
import { createAppThunk } from "@/utils/createThunk";
import { UserInfoDto } from "@/types/auth/auth";

export interface AuthState {
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  user: UserInfoDto | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

export const loginUser = createAppThunk("auth/login", authService.login, {
  successMessage: AUTH_MESSAGES.LOGIN.SUCCESS,
  errorMessage: AUTH_MESSAGES.LOGIN.ERROR,
});

export const registerUser = createAppThunk(
  "auth/register",
  authService.register,
  {
    successMessage: AUTH_MESSAGES.REGISTER.SUCCESS,
    errorMessage: AUTH_MESSAGES.REGISTER.ERROR,
  }
);

export const logoutUser = createAppThunk(
  "auth/logout",
  async () => {
    await authService.logout();
    Cookies.remove(API_CONFIG.tokenCookieName);
    Cookies.remove(API_CONFIG.refreshTokenCookieName);
    persistor.purge();
  },
  {
    successMessage: AUTH_MESSAGES.LOGOUT.SUCCESS,
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login
    addLoadingCases(builder, loginUser, {
      onFulfilled: (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      },
    });

    // Logout
    addLoadingCases(builder, logoutUser, {
      onFulfilled: (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
      },
      onRejected: (state, action) => {
        defaultHandlers.handleError(state, action ?? { payload: undefined });
        state.isAuthenticated = false;
        state.user = null;
      },
    });
  },
});

export default authSlice.reducer;
