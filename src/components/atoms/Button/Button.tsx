import type { PropsWithChildren } from "react";
import type { ButtonProps } from "./Button.types";
import clsx from "clsx";
import { baseButton, sizeStyles, variantStyles } from "./Button.styles";

const Button = ({
  children,
  variant = "filled",
  leftSection,
  rightSection,
  size = "md",
  fullWidth,
  loading,
  className,
  disabled,
  as: Component = "button",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Component
      disabled={disabled || loading}
      className={clsx(
        className,
        baseButton,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full"
      )}
      {...props}
    >
      {leftSection && <span>{leftSection}</span>}
      {children}
      {rightSection && <span>{rightSection}</span>}
    </Component>
  );
};

export default Button;
