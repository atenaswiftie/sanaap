export type ModelError = {
  message: string;
  response: {
    data: {
      error_details: {
        code: string;
        fa_details: string;
      };
    };
  };
};