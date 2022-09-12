import clsx from "clsx";
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
    <h1
      className={clsx(
        className,
        "flex justify-center mx-auto",
        "font-accent font-bold",
        "text-5xl md:text-6xl lg:text-7xl",
        "-rotate-6 -translate-y-10 md:-translate-y-1 lg:-translate-y-10"
      )}
    >
      <span>{t('Hero.title1')}</span><span>{t('Hero.title2')}</span>
    </h1>
  );
};

export default Title;
