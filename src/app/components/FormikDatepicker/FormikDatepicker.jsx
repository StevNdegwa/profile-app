import { Form } from "antd";
import { DatePicker } from "formik-antd";
import moment from "moment";
import PropTypes from "prop-types";

export const FormikDatepicker = ({
  name,
  rules,
  initialValue,
  label,
  ...props
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      initialValue={initialValue}
    >
      <DatePicker {...props} />
    </Form.Item>
  );
};

FormikDatepicker.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.array,
  initialValue: PropTypes.instanceOf(moment),
  label: PropTypes.string,
};
