import clsx from "clsx";
import { type InputProps } from "./Input.types";
import { useId } from "react";
import { inputRadius, inputSizes } from "./Input.styles";

export default function Input({
  fullWidth,
  label,
  error,
  description,
  leftSection,
  rightSection,
  id,
  required,
  inputSize = "md",
  radius = "md",
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = `${inputId}-desc`;
  const errorId = `${inputId}-error`;
  const hasError = Boolean(error);

  return (
    <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700 ">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div
        className={clsx(
          "relative flex items-center border bg-white  transition",
          hasError
            ? "border-red-500 focus-within:ring-1 focus-within:ring-red-500"
            : "border-gray-300 focus-within:ring-1 focus-within:ring-blue-500",
          inputSizes[inputSize],
          inputRadius[radius]
        )}
      >
        {leftSection && <div className="pl-2 text-gray-500">{leftSection}</div>}

        <input
          id={inputId}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            description ? descriptionId : hasError ? errorId : undefined
          }
          className={clsx(
            "flex-grow bg-transparent outline-none border-0 text-gray-900 placeholder-gray-400",
            "px-2 py-1",
            fullWidth && "w-full"
          )}
          {...rest}
        />

        {rightSection && (
          <div className="pr-2 text-gray-500">{rightSection}</div>
        )}
      </div>

      {description && !hasError && (
        <p id={descriptionId} className="text-xs text-gray-500">
          {description}
        </p>
      )}
      {hasError && (
        <p id={errorId} className="text-xs text-red-600">
          {typeof error === "string" ? error : "Invalid input"}
        </p>
      )}
    </div>
  );
}
