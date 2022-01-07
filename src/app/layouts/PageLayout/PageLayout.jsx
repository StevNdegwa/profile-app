import { Layout, Col } from "antd";
import PropTypes from "prop-types";
import { Header } from "./Header";

const { Content, Footer } = Layout;

export function PageLayout({ children, title }) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header title={title} />
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
