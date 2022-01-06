import { Layout, Col, Typography, Row, Button } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const { Header, Content, Footer } = Layout;

export function PageLayout({ children, title }) {
  const history = useHistory();
  return (
    <Layout style={{ maxHeight: "100vh" }}>
      <Header>
        <Row align="middle" gutter={20}>
          <Col>
            <Button
              style={{ color: "white" }}
              icon={<StepBackwardOutlined />}
              type="ghost"
              onClick={() => history.goBack()}
            ></Button>
          </Col>
          <Col>
            <Typography.Title style={{ color: "white" }} level={5}>
              {title}
            </Typography.Title>
          </Col>
        </Row>
      </Header>
      <Content
        style={{ backgroundColor: "white", padding: "2rem", overflow: "auto" }}
      >
        <Col>{children}</Col>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
};
