import { Row, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";

export function NoProfileData() {
  return (
    <Col>
      <Row>
        <Typography.Text>No profile has been created yet</Typography.Text>
      </Row>
      <Row justify="center">
        <Link to={"/edit-profile"}>
          <Button type="primary">Create Profile</Button>
        </Link>
      </Row>
    </Col>
  );
}
