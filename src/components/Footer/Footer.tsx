import clsx from "clsx";

// components
import SocialMedia from "./SocialMedia";

export interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Footer</span>
      <SocialMedia />
    </div>
  );
};

export default Footer;
