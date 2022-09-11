import clsx from "clsx";
import profile from "../../../dilakshan.png";

export interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  return (
    <div
      className={clsx("mx-auto flex justify-center w-48 lg:w-56", className)}
    >
      <img src={profile} alt="AT Dilakshan" />
    </div>
  );
};

export default Avatar;
