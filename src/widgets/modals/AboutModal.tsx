import { Body1, H6 } from "@wallpay/components";

import { Stack } from "@mui/material";
import SvgWallpayLogoV from "@wallpay/icons/react/colored/WallpayLogoV";
import { ModalLayout } from "@wallpay/widgets/modals/ModalLayout";
import { SupportModal } from "@wallpay/widgets/modals/SupportModal";

export const AboutModal = ({
  isOpen = true,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <ModalLayout headerTitle="درباره وال‌پِی" isOpen={isOpen} setOpen={setOpen}>
      <Stack textAlign="justify" gap={4} alignItems="flex-start">
        <Stack width="100%" alignItems="center" gap={2}>
          <SvgWallpayLogoV />
          <H6 textAlign="center">درباره وال‌پِی</H6>
        </Stack>

        <Body1>
          <strong>وال‌پِی‌</strong> (همیاران فناوری اطلاعات سرزمین هوشمند) از
          سال ۱۴۰۲ با هدف ارائه خدمات مالی فناورانه شروع به فعالیت کرده است.{" "}
          <br />
          این شرکت با کسب «نماد تجارت الکترونیکی (اینماد)» از «مرکز توسعه تجارت
          الکترونیکی» و مجوز فعالیت از «مرکز نظام صنفی رایانه‌ای»، بستری برای
          خرید و فروش NFT امن و تضمین‌شده فراهم کرده است. <br />
        </Body1>

        <Body1>
          <strong>وال‌پِی‌</strong> یک سکو (پلتفرم) امن و تضمین‌شده برای افزایش
          بازدهی سرمایه شماست که تلاش می‌کند با ارائه راهکارهای نوین، دغدغه‌های
          مالی شما را کاهش بدهد.
        </Body1>

        <SupportModal color="secondary" />
      </Stack>
    </ModalLayout>
  );
};
