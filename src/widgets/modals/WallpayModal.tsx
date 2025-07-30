import { Stack } from "@mui/material";
import { Body1, H6 } from "@wallpay/components";
import SvgTagsEmpty from "@wallpay/icons/react/colored/TagsEmpty";
import { SupportModal } from "@wallpay/widgets/modals/SupportModal";
import { ModalLayout } from "./ModalLayout";

export const WallpayModal = ({
  isOpen = true,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <ModalLayout headerTitle="وال‌پِی" isOpen={isOpen} setOpen={setOpen}>
      <Stack gap={4} alignItems="flex-start">
        <Stack width="100%" alignItems="center" gap={2}>
          <SvgTagsEmpty />
          <H6 textAlign="center">مزایای وال‌پِی</H6>
        </Stack>

        <ul>
          <Body1>
            <li>
              <strong>بالاترین سود ثابت سالیانه ۳۶٪</strong>
            </li>

            <br />

            <li>
              <strong>بدون کارمزد و مسدود کردن سرمایه</strong>
            </li>
            <br />

            <li>
              <strong>پرداخت سود به صورت ماهیانه و دوره ای</strong>
            </li>

            <br />
            <li>
              <strong>بدون محدودیت سرمایه گذاری</strong>
            </li>

            <br />
            <li>
              <strong>
                اعطای اعتبار خرید اقساطی از دیجی کالا و 7000 فروشگاه{" "}
              </strong>
            </li>
          </Body1>
        </ul>

        <SupportModal color="secondary" label="تماس با پشتیبانی" />
      </Stack>
    </ModalLayout>
  );
};
