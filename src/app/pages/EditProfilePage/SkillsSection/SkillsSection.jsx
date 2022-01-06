import { useState, useCallback } from "react";
import { Col, Form, Row, Tag, Input } from "antd";
import { useFormikContext } from "formik";

export function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [skillInputValue, setSkillInputValue] = useState("");
  const { setFieldValue } = useFormikContext();

  const handleAddSkill = useCallback(
    (event) => {
      let newSkills = skills.concat(event.target.value);
      setSkills(newSkills);
      setFieldValue("skills", newSkills);
      setSkillInputValue("");
    },
    [setFieldValue, skills]
  );

  const handleRemoveSkill = useCallback(
    (s) => {
      let newSkills = skills.filter((skill) => skill !== s);
      setSkills(newSkills);
      setFieldValue("skills", newSkills);
    },
    [setFieldValue, skills]
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
        {skills.map((skill, index) => (
          <Tag key={index} closable onClose={() => handleRemoveSkill(skill)}>
            {skill}
          </Tag>
        ))}
      </Row>
    </Col>
  );
}
