import { useMemo, useState, useCallback } from "react";
import { Row, Button, Col, Divider } from "antd";
import { Formik } from "formik";
import { Form } from "formik-antd";
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
          render={({ initialValues }) => (
            <Form
              layout="vertical"
              initialValues={initialValues}
              onKeyDown={handleOnKeyDown}
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
                  <Button htmlType="submit" type="primary">
                    Save profile
                  </Button>
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
        />
      </Row>
    </PageLayout>
  );
}
