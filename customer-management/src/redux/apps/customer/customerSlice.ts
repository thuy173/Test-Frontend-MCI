import { createSlice } from "@reduxjs/toolkit";
import { addLoadingCases } from "@/utils/redux.utils";
import { createAppThunk } from "@/utils/createThunk";
import customerService from "@/redux/api/customerApi";
import { CUSTOMER_MESSAGES } from "@/constants/customer.constants";
import CustomerReqDto from "@/types/customer/customer";

export interface InitState {
  loading: boolean;
  error: string | null;
  customer: CustomerReqDto | null;
}

const initialState: InitState = {
  loading: false,
  error: null,
  customer: null,
};

export const createCustomer = createAppThunk(
  "customer/create",
  customerService.createCustomerReq,
  {
    successMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.SUCCESS,
    errorMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.ERROR,
  }
);
export const createCustomerStatus = createAppThunk(
  "customer/createStatus",
  customerService.createCustomerStatusReq,
  {
    successMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.SUCCESS,
    errorMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.ERROR,
  }
);
export const createService = createAppThunk(
  "customer/createService",
  customerService.createServiceReq,
  {
    successMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.SUCCESS,
    errorMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.ERROR,
  }
);
export const createCustomerSource = createAppThunk(
  "customer/createSource",
  customerService.createCustomerSourceReq,
  {
    successMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.SUCCESS,
    errorMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.ERROR,
  }
);
export const createCustomerSocial = createAppThunk(
  "customer/createSocial",
  customerService.createCustomerSocialReq,
  {
    successMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.SUCCESS,
    errorMessage: CUSTOMER_MESSAGES.CREATE_CUSTOMER.ERROR,
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create customer
    addLoadingCases(builder, createCustomer, {
      onFulfilled: (state, action) => {
        state.loading = false;
        state.customer = action?.payload ?? null;
      },
    });
  },
});

export default customerSlice.reducer;
