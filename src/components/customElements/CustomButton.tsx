import React from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonStyleProps {
  isActive: boolean;
}

interface Props {
  link: string;
  title: string;
  buttonStyle: (props: ButtonStyleProps) => string;
}

function CustomButton({ link, title, buttonStyle }: Props) {
  return (
    <NavLink
      to={link}
      className={buttonStyle}
    >
      {title}
    </NavLink>
  );
}

export default CustomButton;
