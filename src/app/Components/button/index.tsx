import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    cursor-pointer
    m-1
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    text-white
    hover:bg-transparent
    hover:text-graywhite
    hover:border-white
  `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-white
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled")
    return <FilledButton className={className} >{text}</FilledButton>;
  else return <OutlinedButton className={className} style={{backgroundColor:'#199EB8'}}>{text}</OutlinedButton>;
}