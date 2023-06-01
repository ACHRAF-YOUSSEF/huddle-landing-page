import React from "react";
import {IconType} from "react-icons";

interface IconProps {
  Icon: IconType
  rounded: boolean,
  color: string,
}

const Icon: React.FC<IconProps> = ({
  Icon,
  rounded,
  color,
}) => {
  return (
    <div
      className={`
        border-${color}
        text-${color}
        border-2
        ${rounded? 'rounded-full' : ''}
        p-2
      `}>
      <Icon />
    </div>
  );
};

export default Icon;