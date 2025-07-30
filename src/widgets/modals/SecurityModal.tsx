import { Stack } from "@mui/material";
import { Body1, H6 } from "@wallpay/components";
import SvgWalletEmpty from "@wallpay/icons/react/colored/WalletEmpty";
import { SupportModal } from "@wallpay/widgets/modals/SupportModal";
import { ModalLayout } from "./ModalLayout";

export const SecurityModal = ({
  isOpen = true,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <ModalLayout headerTitle="تضمین امنیت" isOpen={isOpen} setOpen={setOpen}>
      <Stack gap={4} alignItems="flex-start">
        <Stack width="100%" alignItems="center" gap={2}>
          <SvgWalletEmpty />
          <H6 textAlign="center">تضمین امنیت</H6>
        </Stack>
        <Body1>
          خرید NFT در وال‌پِی،{" "}
          <strong>
            یک روش امن و تضمین‌شده برای افزایش بازدهی سرمایه است؛{" "}
          </strong>
          چون مقدار افزایش ارزش سرمایه شما در وال‌پِی در مقایسه با سود بانکی،
          صندوق درآمد ثابت بورسی و … بیشتر است.
        </Body1>
        <Body1>
          از طرف دیگر همیشه در بازارهای پر ریسک، احتمال ضرر هم وجود دارد؛ اما
          خرید NFT در وال‌پِی این امکان را به شما می‌دهد تا با خیال راحت ارزش
          سرمایه‌تان حفظ کنید و طی یک مدت‌زمان مشخص ارزش آن را بالاتر ببرید.
        </Body1>
        <Body1>
          وال‌پِی، نه تنها افزایش بازدهی سرمایه بلکه امنیت دارایی‌تان را هم
          تضمین می‌کند. بعد از طی‌کردن فرایند احراز هویت و ثبت حساب بانکی، شما
          با خرید هر NFT، مالک آن محسوب می‌شوید.
          <br />
          اطلاعات هر NFT که خریداری می‌کنید به‌نام شما و بر بستر بلاکچین
          رمزنگاری می‌شود. این اطلاعات غیر‌قابل‌تغییر است و{" "}
          <strong>شما به‌طور قانونی مالک آن محسوب می‌شوید.</strong> به این ترتیب
          وقتی قصد فروش آن را داشته باشید این مبلغ فقط به حساب خودتان واریز
          می‌شود.
        </Body1>
        <SupportModal color="secondary" />
      </Stack>
    </ModalLayout>
  );
};
