import { Image } from "@wallpay/components/Image";
import { ErrorTemplate } from "./ErrorTemplate";
import imgUrl from "/img_404.webp";

export function NotFound() {
  return (
    <ErrorTemplate
      title="صفحه مورد نظر پیدا نشد!"
      describtion={[
        "آدرس این صفحه اشتباه است و یا دیگر وجود ندارد.",
        "می‌توانید از صفحه خانه شروع کنید.",
      ]}
      icon={<Image src={imgUrl} width={220} height={360} alt="no connection" />}
    />
  );
}
