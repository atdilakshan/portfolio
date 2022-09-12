import clsx from "clsx";
import ReactTyped from "react-typed";

// components
import Avatar from "./Avatar";
import Title from "./Title";

export interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <Avatar />
      <Title />
      <ReactTyped
        strings={["Developer", "Youtuber", ""]}
        typeSpeed={100}
        backSpeed={100}
        loop
      />
    </div>
  );
};

export default Hero;
