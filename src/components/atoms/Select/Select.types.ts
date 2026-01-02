import type { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import type { selectVariants } from "./Select.styles";

type NativeSelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export interface SelectOption {
  label: string;
  value: string | number;
  selected?: boolean;
  disabled?: boolean;
}

export interface SelectProps extends NativeSelectProps {
  label?: string;
  description?: string;
  error?: string | boolean;
  options: SelectOption[];
  variant?: keyof typeof selectVariants;
  fullWidth?: boolean;
  withAsterisk?: boolean;
}
