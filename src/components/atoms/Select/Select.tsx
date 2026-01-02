import clsx from "clsx";
import { useId } from "react";
import type { SelectProps } from "./Select.types";
import { selectVariants } from "./Select.styles";

const Select = ({
  label,
  description,
  error,
  options,
  fullWidth,
  variant = "default",
  id,
  required,
  withAsterisk,
  ...rest
}: SelectProps) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const descId = `${selectId}-desc`;
  const errorId = `${selectId}-error`;
  const hasError = !!error;
  return (
    <article className={clsx(fullWidth && "w-full")}>
      {label && (
        <label htmlFor={selectId}>
          {label}
          {required || withAsterisk ? (
            <span className="text-red-500 ml-1">*</span>
          ) : null}
        </label>
      )}

      <select
        id={selectId}
        aria-invalid={hasError}
        aria-describedby={description ? descId : hasError ? errorId : undefined}
        required={required}
        className={clsx(
          "block w-full border focus:outline-none focus:ring-2",
          hasError
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-300",
          selectVariants[variant]
        )}
        {...rest}
      >
        {options?.map(({ label, ...rest }) => (
          <option key={label} {...rest}>
            {label}
          </option>
        ))}
      </select>
      {description && !hasError && (
        <p id={descId} className="text-xs text-gray-500">
          {description}
        </p>
      )}
      {hasError && (
        <p id={errorId} className="text-xs text-red-600">
          {typeof error === "string" ? error : "Invalid Selection"}
        </p>
      )}
    </article>
  );
};

export default Select;
