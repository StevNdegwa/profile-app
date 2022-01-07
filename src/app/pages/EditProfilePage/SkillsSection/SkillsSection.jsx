import { useState, useCallback } from "react";
import { Col, Form, Row, Tag, Input } from "antd";
import { useFormikContext } from "formik";

export function SkillsSection() {
  const [skillInputValue, setSkillInputValue] = useState("");
  const { setFieldValue, values } = useFormikContext();

  const handleAddSkill = useCallback(
    (event) => {
      let newSkills = values.skills.concat(event.target.value);
      setFieldValue("skills", newSkills);
      setSkillInputValue("");
    },
    [setFieldValue, values.skills]
  );

  const handleRemoveSkill = useCallback(
    (s) => {
      let newSkills = values.skills.filter((skill) => skill !== s);
      setFieldValue("skills", newSkills);
    },
    [setFieldValue, values.skills]
  );

  const handleSkillInputChange = (event) =>
    setSkillInputValue(event.target.value);

  return (
    <Col>
      <Form.Item label="Press enter to add a skill">
        <Input
          placeholder="Add a skill"
          onPressEnter={handleAddSkill}
          value={skillInputValue}
          onChange={handleSkillInputChange}
        />
      </Form.Item>
      <Row>
        {values.skills.map((skill, index) => (
          <Tag key={index} closable onClose={() => handleRemoveSkill(skill)}>
            {skill}
          </Tag>
        ))}
      </Row>
    </Col>
  );
}
