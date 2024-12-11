import { AuthResponse } from "@/types/auth/config";
import { TokenService } from "./tokenApi";
import httpClient from "./agent";
import UserLoginDto, { UserRegisterDto } from "@/types/auth/auth";

class AuthService {
  private static instance: AuthService;
  private readonly tokenService: TokenService;

  private readonly endpoints = {
    login: "/user-login/",
    register: "/create-user-account/",
  };

  private constructor() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthResponse = this.handleAuthResponse.bind(this);
    this.tokenService = TokenService.getInstance();
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private handleAuthResponse(response: AuthResponse): void {
    this.tokenService.setAuthToken(response.access_token);
    this.tokenService.setRefreshToken(response.refresh_token);
  }

  async login(userData: UserLoginDto): Promise<void> {
    try {
      const response = await httpClient.post<AuthResponse>(
        this.endpoints.login,
        userData
      );

      this.handleAuthResponse(response);
    } catch (error) {
      console.log("Auth service error:", error);
      throw new Error(`Login failed: ${error}`);
    }
  }

  async register(userData: UserRegisterDto): Promise<void> {
    try {
      await httpClient.post<void>(this.endpoints.register, userData);
    } catch (error) {
      throw new Error(`Registration failed: ${error}`);
    }
  }

  async logout(): Promise<void> {
    try {
      this.tokenService.clearTokens();
    } catch (error) {
      this.tokenService.clearTokens();
      throw new Error(`Logout failed: ${error}`);
    }
  }
}

const authService = AuthService.getInstance();
export default authService;
