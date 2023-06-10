import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <span
      className="text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8"
    >
      <Icon className="text-[18px]"/>
      <span>{name}</span>
    </span>
  );
};

export default HeaderItem;
