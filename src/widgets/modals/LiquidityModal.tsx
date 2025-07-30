import { Stack } from "@mui/material";
import { Body1, H6 } from "@wallpay/components";
import SvgWalletEmpty from "@wallpay/icons/react/colored/WalletEmpty";
import { SupportModal } from "@wallpay/widgets/modals/SupportModal";
import { ModalLayout } from "./ModalLayout";

export const LiquidityModal = ({
  isOpen = true,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <ModalLayout
      headerTitle="تضمین نقدشوندگی"
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <Stack gap={4} alignItems="flex-start">
        <Stack width="100%" alignItems="center" gap={2}>
          <SvgWalletEmpty />
          <H6 textAlign="center">تضمین نقدشوندگی</H6>
        </Stack>
        <Body1>
          <strong>وال‌پِی</strong> از ابتدای مسیر خرید دارایی تا فرایند
          نقدشوندگی، قدم به قدم همراه شماست.
        </Body1>
        <Body1>
          شما با خرید هر NFT مالک قانونی آن می‌شوید. اطلاعات این دارایی بر بستر
          امن و غیرمتمرکز بلاکچین رمزنگاری می‌شود و برای همیشه روی شبکه باقی
          می‌ماند. نقدشوندگی این دارایی و افزایش بازدهی آن توسط وال‌پی، تضمین
          می‌شود. <br />
          همچنین با توجه به این که <strong>وال‌پِی</strong> دارای «نماد تجارت
          الکترونیکی (اینماد)» از «مرکز توسعه تجارت الکترونیکی» و مجوز فعالیت از
          «مرکز نظام صنفی رایانه‌ای» است، شما می‌توانید با خیال آسوده در این
          بستر امن به معامله NFT بپردازید، ارزش سرمایه‌تان را بالا ببرید و به
          راحتی آن را نقد کنید.
        </Body1>

        <SupportModal color="secondary" />
      </Stack>
    </ModalLayout>
  );
};
