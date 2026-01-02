import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "filled" | "light" | "outline" | "subtle";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  children?: ReactNode;
  as?: "button" | "a" | React.ElementType;
}
