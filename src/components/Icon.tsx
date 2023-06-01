import React from "react";
import {IconType} from "react-icons";

interface IconProps {
  Icon: IconType
  rounded: boolean,
  color: string,
  hover: string,
}

const Icon: React.FC<IconProps> = ({
  Icon,
  rounded,
  color,
  hover,
}) => {
  return (
    <div
      className={`
        border-${color}
        text-${color}
        hover:text-${hover}
        border-2
        ${rounded? 'rounded-full' : ''}
        p-2
        cursor-pointer
      `}>
      <Icon />
    </div>
  );
};

export default Icon;