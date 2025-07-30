import {
  Autocomplete,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import {
  Button,
  Radio,
  showSnackbar,
  TextFieldController,
} from "@wallpay/components";
import { useDeferredValue, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  useCheckAgencyCodeSanaapAPI,
  useGetCountiesSanaapAPI,
  useGetInsuranceBranchesSanaapAPI,
  useGetProvincesSanaapAPI,
} from "../../../../apis/resources/sanaap";
import { useLoginStore } from "../../store/useLoginStore";
import { IUserDataFormData } from "./types";
import { SelectFieldController } from "@wallpay/components/Widgets/Form/SelectFieldController";
import { Search } from "@wallpay/icons";

export const UserDataForm = ({ isLoading }: { isLoading: boolean }) => {
  const { setAllFormData } = useLoginStore();

  const {
    register,
    watch,
    setValue,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext<IUserDataFormData>();
  const watchedAgentCode = watch("agent_code");
  const watchedProvince = watch("province");
  const watchedInsuranceBranch = watch("insurance_branch");

  // Use deferred value for insurance branch search
  const deferredInsuranceBranch = useDeferredValue(
    watchedInsuranceBranch?.name || ""
  );

  const { mutate: checkAgencyCode, isPending: isCheckingCode } =
    useCheckAgencyCodeSanaapAPI();
  const { data: provincesData, isLoading: isLoadingProvinces } =
    useGetProvincesSanaapAPI();
  const { data: countiesData, isLoading: isLoadingCounties } =
    useGetCountiesSanaapAPI(
      watchedProvince ? watchedProvince.toString() : null
    );
  const { data: insuranceBranchesData, isLoading: isLoadingInsuranceBranches } =
    useGetInsuranceBranchesSanaapAPI(
      deferredInsuranceBranch,
      watchedProvince?.toString(),
      {
        enabled: !!watchedProvince,
      }
    );

  // Debounced agent code validation
  useEffect(() => {
    if (!watchedAgentCode) {
      clearErrors("agent_code");
      return;
    }

    const timeoutId = setTimeout(() => {
      checkAgencyCode(
        {
          agent_code: watchedAgentCode,
        },
        {
          onSuccess: () => {
            clearErrors("agent_code");
          },
          onError: (error: any) => {
            if (error?.response?.data?.error_details) {
              showSnackbar({
                message: error.response.data?.error_details.fa_details,
                severity: "warning",
              });
              setError("agent_code", {
                message: error.response.data?.error_details.fa_details,
              });
            } else {
              clearErrors("agent_code");
            }
          },
        }
      );
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [watchedAgentCode, checkAgencyCode, setError, clearErrors]);

  const handleFieldChange = (
    fieldName: keyof IUserDataFormData,
    value: any
  ) => {
    setValue(fieldName, value);
    // Update store based on field name
    setAllFormData({
      [fieldName]: value,
    });
  };

  const handleAgentTypeChange = (value: "real" | "legal") => {
    handleFieldChange("agency_type", value);

    // Clear agent name when switching to real
    if (value === "real") {
      handleFieldChange("name", "");
    }
  };

  const FormFields = (
    <Stack spacing={3}>
      {/* Agent Code */}
      <TextFieldController
        {...register("agent_code")}
        label="کد نمایندگی"
        fullWidth
        size="large"
        placeholder="کد نمایندگی را وارد کنید"
        disabled={isCheckingCode}
        onChange={(e) => handleFieldChange("agent_code", e.target.value)}
      />

      {/* Province */}
      <SelectFieldController
        name="province"
        onChange={(e) => {
          handleFieldChange("province", e.target.value as number);
          handleFieldChange("county", "");
          handleFieldChange("insurance_branch", null);
        }}
        label="استان"
        disabled={isLoadingProvinces}
        size="large"
      >
        {provincesData?.map((province) => (
          <MenuItem key={province.id} value={province.id}>
            {province.name}
          </MenuItem>
        )) || []}
      </SelectFieldController>

      {/* City */}

      <SelectFieldController
        name="county"
        onChange={(e) => handleFieldChange("county", e.target.value as string)}
        label="شهر"
        disabled={!watch("province") || isLoadingCounties}
        size="large"
      >
        {countiesData?.map((county) => (
          <MenuItem key={county.id} value={county.id}>
            {county.name}
          </MenuItem>
        )) || []}
      </SelectFieldController>

      {/* Address */}
      <TextFieldController
        name="address"
        onChange={(e) => handleFieldChange("address", e.target.value)}
        label="آدرس"
        multiline
        rows={3}
        placeholder="آدرس را وارد کنید"
        error={!!errors.address}
        helperText={errors.address?.message}
      />

      {/* Insurance Branch */}
      <InputLabel>شعبه بیمه</InputLabel>
      <Autocomplete
        disablePortal
        {...register("insurance_branch")}
        options={insuranceBranchesData?.response || []}
        value={watch("insurance_branch")}
        getOptionLabel={(option: any) => option?.name || ""}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        onChange={(_, newValue: { id: string; name: string } | null) => {
          handleFieldChange("insurance_branch", newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="نام شعبه بیمه را جستجو کنید"
            disabled={!watchedProvince}
            size="large"
            margin="none"
            error={!!errors.insurance_branch}
            helperText={errors.insurance_branch?.name?.message}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        )}
        loading={isLoadingInsuranceBranches}
        noOptionsText="شعبه‌ای یافت نشد"
        loadingText="در حال بارگذاری..."
        sx={{
          marginTop: "5px !important",
        }}
      />

      {/* Landline Phones */}
      <Stack direction="row" spacing={2}>
        <TextFieldController
          {...register("phone")}
          label="تلفن ثابت"
          name="phone"
          placeholder="87654321"
          size="large"
          type="number"
          onChange={(e) => handleFieldChange("phone", e.target.value)}
        />
        <TextFieldController
          {...register("city_code")}
          label="کد شهر"
          name="city_code"
          placeholder="021"
          size="large"
          sx={{
            width: "30%",
          }}
          type="number"
          onChange={(e) => handleFieldChange("city_code", e.target.value)}
        />
      </Stack>

      {/* Agent Type */}
      <Stack direction="row" justifyContent="space-between">
        <InputLabel>نوع نمایندگی</InputLabel>
        <RadioGroup
          row
          name="agency_type"
          value={watch("agency_type")}
          onChange={(e) => {
            handleFieldChange(
              "agency_type",
              e.target.value as "real" | "legal"
            );
            handleAgentTypeChange(e.target.value as "real" | "legal");
          }}
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <FormControlLabel
            value="real"
            control={<Radio color="secondary" />}
            label="حقیقی"
            sx={{
              marginLeft: 2,
              marginRight: 0,
            }}
          />
          <FormControlLabel
            value="legal"
            control={<Radio color="primary" />}
            label="حقوقی"
            sx={{
              marginLeft: 2,
              marginRight: 0,
            }}
          />
        </RadioGroup>
      </Stack>

      {/* Agent Name - Only show for Legal agents */}
      {watch("agency_type") === "legal" && (
        <TextFieldController
          {...register("name")}
          label="نام نمایندگی"
          name="name"
          fullWidth
          size="large"
          placeholder="نام نمایندگی را وارد کنید"
          onChange={(e) => handleFieldChange("name", e.target.value)}
        />
      )}
    </Stack>
  );

  return (
    <Stack gap={2}>
      {FormFields}
      <Button
        sx={{
          marginTop: 2,
        }}
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        type="submit"
        loading={isLoading}
      >
        ادامه
      </Button>
    </Stack>
  );
};
