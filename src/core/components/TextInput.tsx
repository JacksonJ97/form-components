import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: any;
}

function TextInput({ name, register, ...other }: TextInputProps) {
  return (
    <input
      type="text"
      className="rounded border border-gray-300 py-1 px-3 shadow-sm"
      {...register(name)}
      {...other}
    />
  );
}

export default TextInput;
