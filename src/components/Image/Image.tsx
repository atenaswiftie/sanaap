import { styled, SxProps, Theme } from "@mui/material";
import { ImgHTMLAttributes } from "react";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  sx?: SxProps<Theme>;
};

const MuiImage = styled("img")();

export const Image: React.FC<ImageProps> = ({ sx, ...props }) => {
  return <MuiImage loading="lazy" decoding="async" sx={sx} {...props} />;
};
