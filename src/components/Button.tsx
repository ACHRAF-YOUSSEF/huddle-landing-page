import React from "react";

interface ButtonProps {
  text: {
    value: string;
    size: string;
    color: string;
  };
  bg_color: string;
  rounded: boolean;
  round_size: string;
  shadow_size?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bg_color,
  rounded,
  round_size,
  shadow_size,
  onClick
}) => {
  return (
    <>
      <input
        value={text.value}
        onClick={onClick}
        className={`
        w-fit
        h-fit
        bg-${bg_color}
        ${rounded? `rounded-${round_size}` : ''}
        ${shadow_size? `shadow-${shadow_size}`: ''}
        py-2
        text-center
        text-${text.size} 
        text-${text.color}
        cursor-pointer
      `}/>
      <div
        className="
          hidden
          text-Soft-Magenta
          text-Violet
          bg-Soft-Magenta
          bg-Violet
          bg-white
          rounded-2xl
          rounded-full
          shadow-2xl
          border-whiteZ
        "/>
    </>
  );
};

export default Button;