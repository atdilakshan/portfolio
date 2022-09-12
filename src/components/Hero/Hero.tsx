import clsx from "clsx";
import ReactTyped from "react-typed";
import { useTranslation } from "react-i18next";

// components
import Avatar from "./Avatar";
import Title from "./Title";

export interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(className)}>
      <Avatar />
      <Title />
      <ReactTyped
        className={clsx(className, "flex justify-center", "text-2xl")}
        strings={[t("Hero.subtitle.dev"), t("Hero.subtitle.youtuber")]}
        typeSpeed={100}
        backSpeed={100}
        loop
      />
    </div>
  );
};

export default Hero;
