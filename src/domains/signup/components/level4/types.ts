
export interface IUserDataFormData {
    agent_code: string;
    city_code: string;
    county: string;
    insurance_branch: { id: string; name: string } | null;
    phone: string;
    province: number;
    name?: string; // نام نمایندگی اگر حقوقی بود
    address: string;
    agency_type: "real" | "legal";
  }