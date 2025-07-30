
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { sanaapMutator } from "../../internals/clients/sanaap";
import type {
  ModelCreateOtpRequest,
  ModelCreateOtpResponse,
  ModelValidateOtpRequest,
  ModelValidateOtpResponse,
  ModelCheckAgencyCodeRequest,
  ModelCheckAgencyCodeResponse,
  ModelProvincesResponse,
  ModelCountiesResponse,
  ModelInsuranceBranchResponse,
  ModelSignupRequest,
  ModelSignupResponse,
  ModelAppUserStatusResponse,
  } from "./types";
import { ModelError } from "./types/modelError";
type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * Create OTP for signup verification
 * @summary Create OTP
 */
export const createOtpSanaapAPI = (
  modelCreateOtpRequest: ModelCreateOtpRequest,
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelCreateOtpResponse>(
    {
      url: `/api/v2/app/DEY/agent/verification/signup/create_otp/`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: modelCreateOtpRequest,
    },
    options,
  );
};

export const getCreateOtpSanaapAPIMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createOtpSanaapAPI>>,
    TError,
    { data: ModelCreateOtpRequest },
    TContext
  >;
  request?: SecondParameter<typeof sanaapMutator>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createOtpSanaapAPI>>,
  TError,
  { data: ModelCreateOtpRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createOtpSanaapAPI>>,
    { data: ModelCreateOtpRequest }
  > = (props) => {
    const { data } = props ?? {};

    return createOtpSanaapAPI(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateOtpSanaapAPIMutationBody = ModelCreateOtpRequest;

/**
 * @summary Create OTP
 */
export const useCreateOtpSanaapAPI = <
  TError = ModelError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createOtpSanaapAPI>>,
    TError,
    { data: ModelCreateOtpRequest },
    TContext
  >;
  request?: SecondParameter<typeof sanaapMutator>;
}): UseMutationResult<
  Awaited<ReturnType<typeof createOtpSanaapAPI>>,
  TError,
  { data: ModelCreateOtpRequest },
  TContext
> => {
  const mutationOptions = getCreateOtpSanaapAPIMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Validate OTP for signup verification
 * @summary Validate OTP
 */
export const validateOtpSanaapAPI = (
  modelValidateOtpRequest: ModelValidateOtpRequest,
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelValidateOtpResponse>(
    {
      url: `/api/v2/app/DEY/agent/verification/signup/validate_otp/`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: modelValidateOtpRequest,
    },
    options,
  );
};

export const getValidateOtpSanaapAPIMutationOptions = <
  TError = ModelError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof validateOtpSanaapAPI>>,
    TError,
    { data: ModelValidateOtpRequest },
    TContext
  >;
  request?: SecondParameter<typeof sanaapMutator>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof validateOtpSanaapAPI>>,
  TError,
  { data: ModelValidateOtpRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof validateOtpSanaapAPI>>,
    { data: ModelValidateOtpRequest }
  > = (props) => {
    const { data } = props ?? {};

    return validateOtpSanaapAPI(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ValidateOtpSanaapAPIMutationBody = ModelValidateOtpRequest;

/**
 * @summary Validate OTP
 */
export const useValidateOtpSanaapAPI = <
  TError = ModelError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof validateOtpSanaapAPI>>,
    TError,
    { data: ModelValidateOtpRequest },
    TContext
  >;
  request?: SecondParameter<typeof sanaapMutator>;
}): UseMutationResult<
  Awaited<ReturnType<typeof validateOtpSanaapAPI>>,
  TError,
  { data: ModelValidateOtpRequest },
  TContext
> => {
  const mutationOptions = getValidateOtpSanaapAPIMutationOptions(options);

  return useMutation(mutationOptions);
};

export const checkAgencyCodeSanaapAPI = (
  modelCheckAgencyCodeRequest: ModelCheckAgencyCodeRequest,
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelCheckAgencyCodeResponse>(
    {
      url: `/api/v2/app/DEY/agent/verification/signup/check_agency_code/`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: modelCheckAgencyCodeRequest,
    },
    options,
  );
};

export const useCheckAgencyCodeSanaapAPI = () => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: checkAgencyCodeSanaapAPI,
  });

  return {
    mutate,
    isPending,
    error,
  };
};

export const getProvincesSanaapAPI = (
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelProvincesResponse>(
    {
      url: `/base/provinces_wop/`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const getCountiesSanaapAPI = (
  provinceId: number,
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelCountiesResponse>(
    {
      url: `/base/counties_wop/?province=${provinceId}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const getInsuranceBranchesSanaapAPI = (
  name: string,
  province: string,
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelInsuranceBranchResponse>(
    {
      url: `/api/v2/app/selection_item/insurance_branch/wop_list/?name=${name}&insurance=DEY&province=${province}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const useGetProvincesSanaapAPI = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["provinces"],
    queryFn: getProvincesSanaapAPI,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export const useGetCountiesSanaapAPI = (provinceId: string | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["counties", provinceId],
    queryFn: () => getCountiesSanaapAPI(+provinceId!),
    enabled: !!provinceId,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export const useGetInsuranceBranchesSanaapAPI = (name: string, province: string, options?: { enabled?: boolean }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["insuranceBranches", name, province],
    queryFn: () => getInsuranceBranchesSanaapAPI(name, province),
    enabled: !!province,
    ...options,
  });

  return {
    data,
    isLoading,
    error,
  };
}; 
 export const signupSanaapAPI = (
  modelSignupRequest: ModelSignupRequest,
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelSignupResponse>(
    {
      url: `/api/v2/app/DEY/agent/verification/signup/`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: modelSignupRequest,
    },
    options,
  );
};

export const useSignupSanaapAPI = () => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: signupSanaapAPI,
  });

  return {
    mutate,
    isPending,
    error,
  };
};

/**
 * Get app user status
 * @summary Get app user status
 */
export const getAppUserStatusSanaapAPI = (
  options?: SecondParameter<typeof sanaapMutator>,
) => {
  return sanaapMutator<ModelAppUserStatusResponse>(
    {
      url: `/api/v2/app/DEY/agent/app_user_status/`,
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
    },
    options,
  );
};

export const useGetAppUserStatusSanaapAPI = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["appUserStatus"],
    queryFn: getAppUserStatusSanaapAPI,
  });

  return {
    data,
    isLoading,
    error,
  };
};