import { Form, Row, Col, Tooltip, Button, Input, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import moment from "moment";
import { FormikInput, FormikDatepicker } from "../../../../components";

export function ExperienceInput({
  id,
  experience: {
    jobTitle,
    company,
    isCurrentJob,
    startMonth,
    endMonth,
    jobDesc,
  },
  removeItem,
}) {
  const { setFieldValue, values } = useFormikContext();

  let descriptionWordCountRegex = /^\s*(\S+\s*){0,300}$/;

  return (
    <>
      <Row justify="end">
        <Tooltip placement="left" title="Remove">
          <Button icon={<CloseOutlined />} danger onClick={removeItem} />
        </Tooltip>
      </Row>
      <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <FormikInput
            label="Job Title"
            name={`experience[${id}].jobTitle`}
            rules={[{ required: true, message: "Please add the job title" }]}
            type={"text"}
            placeholder="Web developer"
            initialValue={jobTitle}
          />
        </Col>
        <Col>
          <FormikInput
            label="Company"
            name={`experience[${id}].company`}
            rules={[
              { required: true, message: "Please add the name of the company" },
            ]}
            type={"text"}
            placeholder="Good Life Co."
            initialValue={company}
          />
        </Col>
      </Row>
      <Form.Item
        name={`experience[${id}].isCurrentJob`}
        valuePropName="checked"
        initialValue={isCurrentJob}
      >
        <Checkbox
          checked={values.experience[id].isCurrentJob}
          onChange={(event) =>
            setFieldValue(
              `experience[${id}].isCurrentJob`,
              event.target.checked
            )
          }
        >
          Currently working here
        </Checkbox>
      </Form.Item>
      <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <FormikDatepicker
            label="Start month"
            name={`experience[${id}].startMonth`}
            rules={[{ required: true, message: "Please add the date started" }]}
            picker="month"
            placeholder="Month Started"
            initialValue={moment(startMonth)}
          />
        </Col>
        <Col>
          <FormikDatepicker
            label="End month"
            name={`experience[${id}].endMonth`}
            rules={[
              {
                required: !values.experience[id].isCurrentJob,
                message: "Please add the end date",
              },
            ]}
            picker="month"
            placeholder="Month Ended"
            disabled={values.experience[id].isCurrentJob}
            initialValue={moment(endMonth)}
          />
        </Col>
      </Row>
      <Form.Item
        label="Description"
        name={`experience[${id}].jobDesc`}
        rules={[
          {
            pattern: descriptionWordCountRegex,
            message: "A maximum of 300 words is required",
          },
        ]}
        initialValue={jobDesc}
      >
        <Input.TextArea
          placeholder="Job summary"
          onChange={(event) =>
            setFieldValue(`experience[${id}].jobDesc`, event.target.value)
          }
          readOnly={
            !descriptionWordCountRegex.test(values.experience[id].jobDesc)
          }
        />
      </Form.Item>
    </>
  );
}

ExperienceInput.propTypes = {
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};
