import CustomerReqDto, {
  ServiceReqDto,
  SocialReqDto,
  SourceReqDto,
  StatusReqDto,
} from "@/types/customer/customer";
import httpClient from "./agent";

class CustomerService {
  private static instance: CustomerService;

  private readonly endpoints = {
    createCustomer: "/customers/",
    createCustomerStatus: "/customers-status/",
    createService: "/services/",
    createCustomerSource: "/customers-source/",
    createCustomerSocial: "/customer-social/",
  };

  private constructor() {
    this.createCustomerReq = this.createCustomerReq.bind(this);
    this.createCustomerStatusReq = this.createCustomerStatusReq.bind(this);
    this.createServiceReq = this.createServiceReq.bind(this);
    this.createCustomerSourceReq = this.createCustomerSourceReq.bind(this);
    this.createCustomerSocialReq = this.createCustomerSocialReq.bind(this);
  }

  static getInstance(): CustomerService {
    if (!CustomerService.instance) {
      CustomerService.instance = new CustomerService();
    }
    return CustomerService.instance;
  }

  async createCustomerReq(userData: CustomerReqDto): Promise<CustomerReqDto> {
    try {
      const response = await httpClient.post<CustomerReqDto>(
        this.endpoints.createCustomer,
        userData
      );
      return response;
    } catch (error) {
      console.log("Create customer error:", error);
      throw new Error(`Create customer failed: ${error}`);
    }
  }
  async createCustomerStatusReq(userData: StatusReqDto): Promise<StatusReqDto> {
    try {
      const response = await httpClient.post<StatusReqDto>(
        this.endpoints.createCustomerStatus,
        userData
      );
      return response;
    } catch (error) {
      console.log("Create customer status error:", error);
      throw new Error(`Create customer failed: ${error}`);
    }
  }
  async createServiceReq(userData: ServiceReqDto): Promise<ServiceReqDto> {
    try {
      const response = await httpClient.post<ServiceReqDto>(
        this.endpoints.createService,
        userData
      );
      return response;
    } catch (error) {
      console.log("Create customer service error:", error);
      throw new Error(`Create customer service failed: ${error}`);
    }
  }
  async createCustomerSourceReq(userData: SourceReqDto): Promise<SourceReqDto> {
    try {
      const response = await httpClient.post<SourceReqDto>(
        this.endpoints.createCustomerSource,
        userData
      );
      return response;
    } catch (error) {
      console.log("Create customer source error:", error);
      throw new Error(`Create customer source failed: ${error}`);
    }
  }
  async createCustomerSocialReq(userData: SocialReqDto): Promise<SocialReqDto> {
    try {
      const response = await httpClient.post<SocialReqDto>(
        this.endpoints.createCustomerSocial,
        userData
      );
      return response;
    } catch (error) {
      console.log("Create customer social error:", error);
      throw new Error(`Create customer social failed: ${error}`);
    }
  }
}

const customerService = CustomerService.getInstance();
export default customerService;
