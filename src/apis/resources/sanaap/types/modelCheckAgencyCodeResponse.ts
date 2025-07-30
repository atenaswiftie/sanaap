export type ModelCheckAgencyCodeResponse = {
  success: boolean;
  message?: string;
  data?: {
    status_code: number;
    message: string;
    is_success: boolean;
    error_details: {
      fa_details: string;
      en_details: string;
    } | null;
    response: string;
  };
}; 