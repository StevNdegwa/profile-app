import { Col, Timeline, Tooltip, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FieldArray, useFormikContext } from "formik";
import { ExperienceInput } from "./ExperienceInput";

export function ExperienceSection() {
  const { values } = useFormikContext();

  return (
    <Col>
      <FieldArray
        name="experience"
        render={({ remove, push }) => (
          <>
            <Timeline>
              {values.experience.map((experience, index) => (
                <Timeline.Item key={index}>
                  <ExperienceInput
                    id={index}
                    removeItem={() => remove(index)}
                  />
                </Timeline.Item>
              ))}
            </Timeline>
            <Tooltip placement="right" title="Add experience">
              <Button
                onClick={() => push({})}
                icon={<PlusOutlined />}
                type="primary"
              />
            </Tooltip>
          </>
        )}
      />
    </Col>
  );
}
