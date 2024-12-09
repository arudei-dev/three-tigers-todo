import React from "react";
import clsx from "classnames";

import { Checkbox } from "@/shared/ui";

interface Props {
  isDone?: boolean;
  onClickCheckbox?: () => void;

  title: string;
  description: string;
  timestamp: string;
}

export default function TodoCard(props: Props) {
  const { isDone, title, description, timestamp, onClickCheckbox } = props;

  const twTitle = clsx(`font-bold`, {
    "line-through text-[#9D9D9D]": isDone,
  });

  return (
    <div className="bg-white p-[10px] flex gap-[10px]">
      <div className="p-[10px]">
        <Checkbox isChecked={isDone} onClick={onClickCheckbox} />
      </div>

      <div className="p-[0_10px] w-full flex flex-col gap-2">
        <h3 className={twTitle}>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="p-[10px] shrink-0 w-max">
        <p>{timestamp}</p>
      </div>
    </div>
  );
}
