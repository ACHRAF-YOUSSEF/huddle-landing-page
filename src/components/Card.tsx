import React from 'react';

interface CardProps {
  title: {
    text: string;
    size: string;
    color: string;
  };
  description: {
    text: string;
    size: string;
    color: string;
  };
}

const Card: React.FC<CardProps> = ({
  title,
  description
}) => {
  return (
    <div
      className="
        flex
        flex-col
        w-full
        h-full
        space-y-6
      ">
      <h1
        className={`
          font-bold
          text-${title.size}
          text-${title.color}
        `}>
        {title.text}
      </h1>
      <p className={`
          text-${description.size}
          text-${description.color}
        `}>
        {description.text}
    </p>
    <div className="hidden text-4xl text-sm" />
    </div>
  );
};

export default Card;