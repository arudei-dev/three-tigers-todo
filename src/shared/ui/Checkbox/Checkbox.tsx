import clsx from "classnames";

interface Props {
  isChecked?: boolean;
  onClick?: () => void;
}

export default function Checkbox(props: Props) {
  const { isChecked, onClick } = props;

  const twClass = clsx(
    `w-[14px] h-[14px] border rounded-[3px] border-[#949494] cursor-pointer`,
    {
      "bg-[#1755FF]": isChecked,
    }
  );

  return (
    <div
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      className={twClass}
      onClick={onClick}
    >
      {isChecked && (
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.13334 9.27499L2.68334 6.82499L1.86667 7.64166L5.13334 10.9083L12.1333 3.90833L11.3167 3.09166L5.13334 9.27499Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
}
