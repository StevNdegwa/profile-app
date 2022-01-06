import { Row, Col } from "antd";
import { FormikInput } from "../../../components";

export function GeneralSection() {
  return (
    <>
      <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <FormikInput
            label="First Name"
            name={"firstName"}
            rules={[{ required: true, message: "Please add your first name" }]}
            type={"text"}
            placeholder="Jane"
          />
        </Col>
        <Col>
          <FormikInput
            label="Second Name"
            name={"secondName"}
            rules={[{ required: true, message: "Please add your second name" }]}
            type={"text"}
            placeholder="Doe"
          />
        </Col>
      </Row>
      <FormikInput
        label="Email"
        name={"email"}
        rules={[{ required: true, message: "Please add your email address" }]}
        type={"email"}
        placeholder="john.doe@email.com"
      />
      <FormikInput
        label="Tag line"
        name={"tagLine"}
        rules={[{ required: true, message: "Please add a tagline" }]}
        type={"text"}
        placeholder="Enjoying tech"
      />
    </>
  );
}
