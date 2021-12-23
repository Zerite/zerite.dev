import { Image, ImageProps } from "@chakra-ui/react";
import LogoFile from "../../public/assets/logo.svg";

interface Props extends ImageProps {
  spin?: boolean;
}

export const Logo = ({ spin, ...props }: Props) => (
  <Image
    src={LogoFile}
    alt="Logo"
    {...props}
    animation={spin ? "spin 2s linear infinite" : ""}
  />
);
