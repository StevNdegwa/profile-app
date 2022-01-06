import { useCallback } from "react";
import { Form, DatePicker } from "antd";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

export const FormikDatepicker = ({ name, rules, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleOnChange = useCallback(
    (value) => {
      if (value) {
        setFieldValue(name, value.toDate());
      }
    },
    [name, setFieldValue]
  );

  return (
    <Form.Item label="End month" name={name} rules={rules}>
      <DatePicker {...props} onChange={handleOnChange} />
    </Form.Item>
  );
};

FormikDatepicker.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.array,
};
