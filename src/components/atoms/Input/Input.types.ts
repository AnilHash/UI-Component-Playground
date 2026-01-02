import type { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { inputRadius, inputSizes } from "./Input.styles";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  description?: string;
  error?: string | boolean;
  required?: boolean;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  inputSize?: keyof typeof inputSizes;
  radius?: keyof typeof inputRadius;
  fullWidth?: boolean;
  withAsterisk?: boolean;
}
