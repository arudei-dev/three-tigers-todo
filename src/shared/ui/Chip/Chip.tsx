import clsx from "classnames";

interface Props {
  children: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Chip(props: Props) {
  const { children, isActive, onClick } = props;

  const twClass = clsx(
    isActive
      ? "bg-chip-active text-chip-active"
      : "bg-chip-default text-chip-default",
    `cursor-pointer rounded-full p-[5px_15px] flex justify-center font-bold`
  );

  return (
    <button type="button" tabIndex={0} className={twClass} onClick={onClick}>
      {children}
    </button>
  );
}
