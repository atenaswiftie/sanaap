export interface ModelAppUserStatusResponse {
  response: {
    registration_status: string;
    message?: string;
    code?: number;
  };
}
