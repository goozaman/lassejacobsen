import clsx from "clsx";
import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  MutableRefObject,
  SetStateAction,
} from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  rows?: number;
  className?: string;
  onChange: Dispatch<SetStateAction<string>> | ((v: string) => void);
  value: string | undefined;
}

export const InputField: FunctionComponent<InputFieldProps> = ({
  id,
  label,
  placeholder,
  rows,
  error,
  className,
  onChange,
  value,
}) => {
  const handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => onChange(e.target.value);

  const inputClassName = clsx(
    "focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none",
    error && "border-red-500"
  );
  return (
    <div className={className}>
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      {!rows ? (
        <input
          className={inputClassName}
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <textarea
          className={inputClassName}
          id={id}
          rows={rows}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        ></textarea>
      )}
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};
