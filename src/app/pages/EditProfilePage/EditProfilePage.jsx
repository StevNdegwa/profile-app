import { useCallback, useMemo, useState } from "react";
import { Row, Form, Button, Col, Divider } from "antd";
import { Formik } from "formik";
import { Link, Prompt, useLocation } from "react-router-dom";
import { PageLayout } from "../../layouts";
import { ExperienceSection } from "./ExperienceSection";
import { GeneralSection } from "./GeneralSection";
import { SkillsSection } from "./SkillsSection";

export function EditProfilePage() {
  const [profileSaved, setProfileSaved] = useState(false);
  const { search } = useLocation();

  const handleOnKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  }, []);

  let initialValues = useMemo(() => {
    let makeChanges = new URLSearchParams(search).get("makeChanges"),
      initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        tagLine: "",
        experience: [{}],
        skills: [],
      };
    if (makeChanges) {
      let profileData = localStorage.getItem("PROFILE");
      if (profileData) {
        initialValues = JSON.parse(profileData);
      }
    }
    return initialValues;
  }, [search]);

  return (
    <PageLayout title="Edit Profile">
      <Prompt
        when={!profileSaved}
        message={"You have not saved your changes."}
      />
      <Row justify="center">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            localStorage.setItem("PROFILE", JSON.stringify(values));
            setProfileSaved(true);
          }}
        >
          {({ handleSubmit, initialValues }) => (
            <Form
              name="editProfile"
              layout="vertical"
              onFinish={handleSubmit}
              onKeyDown={handleOnKeyDown}
              onSubmit={handleSubmit}
              component={"form"}
              initialValues={initialValues}
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
