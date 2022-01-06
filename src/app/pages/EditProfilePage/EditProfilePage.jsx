import { useCallback, useState } from "react";
import { Row, Form, Button, Col, Divider } from "antd";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { PageLayout } from "../../layout";
import { ExperienceSection } from "./ExperienceSection";
import { GeneralSection } from "./GeneralSection";
import { SkillsSection } from "./SkillsSection";

export function EditProfilePage() {
  const [profileSaved, setProfileSaved] = useState(false);

  const handleOnKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  }, []);

  return (
    <PageLayout title="Edit Profile">
      <Row justify="center">
        <Formik
          initialValues={{
            firstName: "",
            secondName: "",
            email: "",
            tagLine: "",
            experience: [{}],
            skills: [],
          }}
          onSubmit={(values) => {
            localStorage.setItem("PROFILE", JSON.stringify(values));
            setProfileSaved(true);
          }}
        >
          {({ handleSubmit }) => (
            <Form
              name="editProfile"
              layout="vertical"
              onFinish={handleSubmit}
              onKeyDown={handleOnKeyDown}
              onSubmit={handleSubmit}
              component={"form"}
            >
              <Divider plain>General</Divider>
              <GeneralSection />
              <Divider plain>Experience</Divider>
              <ExperienceSection />
              <Divider plain>Skills</Divider>
              <SkillsSection />
              <Divider plain />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                  <Form.Item>
                    <Button htmlType="submit" type="primary">
                      Save profile
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  {profileSaved && (
                    <Link to={"/view-profile"}>
                      <Button>View Saved Profile</Button>
                    </Link>
                  )}
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Row>
    </PageLayout>
  );
}
