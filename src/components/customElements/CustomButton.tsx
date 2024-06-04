import React from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonStyleProps {
  isActive: boolean;
}

interface Props {
  link: string;
  title: string;
  onClick?: () => void;
  buttonStyle?: (props: ButtonStyleProps) => string;
}

function CustomButton(props: Props) {
  const {
    link,
    title,
    onClick,
    buttonStyle,
  } = props;

  return (
    <NavLink
      to={link}
      className={buttonStyle}
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
}

CustomButton.defaultProps = {
  onClick: undefined,
};

export default CustomButton;
