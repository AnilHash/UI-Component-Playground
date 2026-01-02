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
  const generateId = useId();
  const inputId = id ?? generateId;
  const descriptionId = `${inputId}-desc`;
  const errorId = `${inputId}-error`;
  const hasError = Boolean(error);
  return (
    <article className={clsx(fullWidth && "w-full", "inputWrapper-root")}>
      {label && (
        <label
          htmlFor={inputId}
          className="inputWrapper-label block text-sm font-medium"
        >
          {label}
          {required && (
            <span className="inputWrapper-required text-red-500 ml-1">*</span>
          )}
        </label>
      )}
      <div
        className={clsx(
          "input-wrapper",
          "relative flex items-center justify-between border rounded",
          hasError ? "border-red-500" : "border-gray-300",
          inputRadius[radius],
          inputSizes[inputSize]
        )}
      >
        {leftSection && (
          <div className="input-section px-2"> {leftSection}</div>
        )}
        <input
          id={inputId}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            description ? descriptionId : hasError ? errorId : undefined
          }
          className={clsx(
            "input-input flex-grow px-2 border-x border-gray-300",
            inputSizes[inputSize],
            inputRadius[radius]
          )}
          {...rest}
        />
        {rightSection && (
          <div className="input-section px-2">{rightSection}</div>
        )}
      </div>
      {description && !hasError && (
        <p
          id={descriptionId}
          className="inputWrapper-description text-xs text-gray-500"
        >
          {description}
        </p>
      )}
      {hasError && (
        <p id={errorId} className="inputWrapper-error text-xs text-red-600">
          {typeof error === "string" ? error : "Invalid Input"}
        </p>
      )}
    </article>
  );
}
