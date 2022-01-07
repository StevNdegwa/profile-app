import { forwardRef } from "react";
import { Form } from "antd";
import { Input } from "formik-antd";
import PropTypes from "prop-types";

export const FormikInput = forwardRef(
  ({ name, rules, label, initialValue, ...props }, ref) => {
    return (
      <Form.Item
        rules={rules}
        name={name}
        label={label}
        initialValue={initialValue}
      >
        <Input ref={ref} {...props} />
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
