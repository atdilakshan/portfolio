import clsx from "clsx";

// components
import ThemeSwitch from "./ThemeSwitch.tsx";
import LanguageSwitch from "./LanguageSwitch";

export interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <ThemeSwitch />
      <LanguageSwitch />
    </div>
  );
};

export default Header;
