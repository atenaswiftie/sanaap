import { Stack } from "@mui/material";
import { Body1, H6 } from "@wallpay/components";
import SvgBillEmpty from "@wallpay/icons/react/colored/BillEmpty";
import { SupportModal } from "@wallpay/widgets/modals/SupportModal";
import { ModalLayout } from "./ModalLayout";

export const WhatIsNFTModal = ({
  isOpen = true,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <ModalLayout headerTitle="NFT چیست؟" isOpen={isOpen} setOpen={setOpen}>
      <Stack textAlign="justify" gap={4} alignItems="flex-start">
        <Stack width="100%" alignItems="center" gap={2}>
          <SvgBillEmpty />
          <H6 textAlign="center">NFT چیست؟</H6>
        </Stack>

        <Body1>
          کلمه NFT مخفف عبارت <strong>«Non-Fungible Token»</strong> به معنای
          توکن غیرقابل تعویض است که بر بستر بلاکچین رمزنگاری شده است.
          <br /> منظور از توکن، هر نشانه دیجیتالی است که یک دارایی در دنیای
          دیجیتال می‌باشد و منظور از غیرقابل‌تعویض‌بودن این است که هر توکن،
          ماهیت منحصربه‌فرد خودش را دارد و نمی‌توان ارزش آن را با توکن دیگری
          دقیقا برابر دانست؛ مانند آثار هنری که مشابهی ندارند و تک‌نسخه هستند؛
          اما دو اسکناس ۱۰ هزار تومانی با هم تفاوتی ندارند و قابل‌تعویض هستند.
        </Body1>
        <Body1>
          به‌بیان ساده، NFT، یک دارایی دیجیتال است. این دارایی قابل ارزش‌گذاری
          است و در بازارهای مختلف خرید و فروش می‌شود.
        </Body1>
        <SupportModal color="secondary" />
      </Stack>
    </ModalLayout>
  );
};
