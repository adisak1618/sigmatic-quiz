import { InputHTMLAttributes } from "react";
import { useField } from "formik";

import { Input } from "../Input";

interface FormikNumberInputProps {
  name: string;
}

export const FormikInput = (
  props: FormikNumberInputProps & InputHTMLAttributes<HTMLInputElement>
) => {
  const { name, ...otherProps } = props;
  const [{ value }, meta, helper] = useField<string>(name);
  return (
    <>
      <Input
        {...otherProps}
        value={value}
        onChange={(e) => {
          helper.setTouched(true);
          helper.setValue(e.target.value);
        }}
      />
      {meta.error && meta.touched && (
        <div className="mt-0.5 flex flex-wrap text-red-5">{meta.error}</div>
      )}
    </>
  );
};
