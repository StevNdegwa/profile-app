import { forwardRef, useCallback } from "react";
import { Input, Form } from "antd";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

export const FormikInput = forwardRef(
  ({ name, rules, label, initialValue, ...props }, ref) => {
    const { setFieldValue } = useFormikContext();

    const handleOnChange = useCallback(
      (event) => {
        setFieldValue(name, event.target.value);
      },
      [name, setFieldValue]
    );

    return (
      <Form.Item
        rules={rules}
        name={name}
        label={label}
        initialValue={initialValue}
      >
        <Input ref={ref} {...props} onChange={handleOnChange} />
      </Form.Item>
    );
  }
);

FormikInput.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  label: PropTypes.string,
  rules: PropTypes.array,
  initialValue: PropTypes.string,
};
