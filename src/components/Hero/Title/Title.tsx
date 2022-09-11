import clsx from "clsx";

export interface Props {
  className?: string;
}

const Title = ({ className }: Props) => {
  return (
    <h1
      className={clsx(
        className,
        "flex justify-center",
        "font-accent font-bold",
        "text-5xl md:text-6xl lg:text-7xl",
        "-rotate-3 -translate-y-10 md:-translate-y-15 lg:-translate-y-10"
      )}
    >
      AT Dilakshan
    </h1>
  );
};

export default Title;
