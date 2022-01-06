import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <Row gutter={20} justify="center" style={{ padding: "1rem" }}>
      <Col>
        <Link to={"/edit-profile"}>
          <Button type="primary">Create Profile</Button>
        </Link>
      </Col>
      <Col>
        <Link to={"/view-profile"}>
          <Button>View Profile</Button>
        </Link>
      </Col>
    </Row>
  );
}
