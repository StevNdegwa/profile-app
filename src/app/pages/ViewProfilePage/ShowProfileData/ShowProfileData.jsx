import {
  Row,
  Avatar,
  Button,
  Col,
  Divider,
  Typography,
  Collapse,
  Card,
  Tag,
} from "antd";
import moment from "moment";
import { UserOutlined, MailOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

export function ShowProfileData({ profileData }) {
  return (
    <>
      <Row gutter={20} align="middle">
        <Col>
          <Avatar icon={<UserOutlined />} size={64} />
        </Col>
        <Col>
          <Row>
            <Typography.Title level={3} style={{ marginBottom: "0" }}>
              {profileData.firstName} {profileData.lastName}
            </Typography.Title>
          </Row>
          <Row gutter={5} align="middle">
            <Col>
              <MailOutlined />
            </Col>
            <Col>
              <Typography.Text italic>{profileData.email}</Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Link to={"/edit-profile?makeChanges=true"}>
            <Button icon={<EditOutlined />} />
          </Link>
        </Col>
      </Row>
      <Divider plain>Skills</Divider>
      <Row justify="center">
        <Card title={profileData.tagLine}>
          {profileData.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </Card>
      </Row>
      <Divider plain>Experience</Divider>
      <Collapse>
        {profileData.experience.map((experience, index) => (
          <Panel
            key={index}
            header={
              <div>
                <Typography.Title level={5} style={{ marginBottom: 0 }}>
                  {experience.jobTitle}
                </Typography.Title>
                <div>
                  <Typography.Text strong>at</Typography.Text>{" "}
                  <Typography.Text italic>
                    {experience.company},{" "}
                    {moment(experience.startMonth).format("MMM - YYYY")}{" "}
                  </Typography.Text>
                  to{" "}
                  <Typography.Text italic>
                    {experience.isCurrentJob
                      ? "Present"
                      : moment(experience.endMonth).format("MMM - YYYY")}
                  </Typography.Text>
                </div>
              </div>
            }
          >
            <p>{experience.jobDesc}</p>
          </Panel>
        ))}
      </Collapse>
    </>
  );
}
