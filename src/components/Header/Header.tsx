import clsx from "clsx";

// components
import ThemeSwitch from "./ThemeSwitch.tsx";
import LanguageSwitch from "./LanguageSwitch";

export interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "w-10/12 m-auto p-2 items-center",
        "flex justify-between"
      )}
    >
      <ThemeSwitch />
      <LanguageSwitch />
    </div>
  );
};

export default Header;
