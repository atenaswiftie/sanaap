

export type ModelCreateOtpResponse = {
  success: boolean;
  message?: string;
  data?: {
    otp_id?: string;
    expires_at?: string;
  };
}; 