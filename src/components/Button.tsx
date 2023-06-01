import React from "react";

interface ButtonProps {
  text: {
    value: string;
    size: string;
    color: string;
    hover: string;
  };
  bg_color: string;
  hover_color: string;
  rounded: boolean;
  round_size: string;
  shadow_size?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bg_color,
  hover_color,
  rounded,
  round_size,
  shadow_size,
  onClick
}) => {
  return (
    <>
      <input
        type="button"
        value={text.value}
        onClick={onClick}
        className={`
          w-fit
          h-fit
          bg-${bg_color}
          ${rounded? `rounded-${round_size}` : ''}
          ${shadow_size? `shadow-${shadow_size} shadow-black`: ''}   
          py-2
          px-20
          text-center
          text-${text.size} 
          text-${text.color}
          hover:bg-${hover_color}
          hover:text-${text.hover}
          cursor-pointer
      `}/>
      <div
        className="
          hidden
          text-Soft-Magenta
          hover:text-Soft-Magenta
          text-Violet
          hover:text-Violet
          bg-Soft-Magenta
          hover:bg-Soft-Magenta
          bg-Violet
          hover:bg-Violet
          bg-white
          rounded-2xl
          rounded-full
          shadow-2xl
          border-white
          hover:text-white
          hover:text-Violet
          hover:border-Violet
        "/>
    </>
  );
};

export default Button;