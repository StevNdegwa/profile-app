import { Layout, Col, Typography, Row, Button } from "antd";
import { StepBackwardOutlined, HomeOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";

export function Header({ title }) {
  const history = useHistory();
  return (
    <Layout.Header>
      <Row align="middle" gutter={20}>
        <Col>
          <Link to="/">
            <Button
              style={{ color: "white" }}
              icon={<HomeOutlined />}
              type="ghost"
              shape="circle"
            />
          </Link>
        </Col>
        <Col>
          <Button
            style={{ color: "white" }}
            icon={<StepBackwardOutlined />}
            type="ghost"
            shape="circle"
            onClick={() => history.goBack()}
          ></Button>
        </Col>
        <Col>
          <Typography.Text style={{ color: "white" }}>{title}</Typography.Text>
        </Col>
      </Row>
    </Layout.Header>
  );
}
