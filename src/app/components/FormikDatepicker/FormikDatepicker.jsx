import { useCallback } from "react";
import { Form, DatePicker } from "antd";
import { useFormikContext } from "formik";
import moment from "moment";
import PropTypes from "prop-types";

export const FormikDatepicker = ({
  name,
  rules,
  initialValue,
  label,
  ...props
}) => {
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
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      initialValue={initialValue}
    >
      <DatePicker {...props} onChange={handleOnChange} />
    </Form.Item>
  );
};

FormikDatepicker.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.array,
  initialValue: PropTypes.instanceOf(moment),
  label: PropTypes.string,
};
