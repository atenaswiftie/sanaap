import { Image } from "@wallpay/components/Image";
import { ErrorTemplate } from "./ErrorTemplate";
import imgUrl from "/img_500.webp";

export function InternalError() {
  return (
    <ErrorTemplate
      title="خطای داخلی سرور!"
      describtion="متأسفانه مشکلی وجود دارد. اندکی بعد دوباره تلاش کنید."
      icon={<Image src={imgUrl} width={240} height={240} alt="no connection" />}
    />
  );
}
