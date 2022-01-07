import { useState } from "react";
import { Row, Col } from "antd";
import { PageLayout } from "../../layout";
import { ShowProfileData } from "./ShowProfileData";
import { NoProfileData } from "./NoProfileData";

export function ViewProfilePage() {
  const [profileData] = useState(() => {
    let pd = localStorage.getItem("PROFILE");
    return Boolean(pd) ? JSON.parse(pd) : null;
  });

  return (
    <PageLayout title="View Profile">
      <Row justify="center">
        <Col style={{ maxWidth: "500px" }}>
          {Boolean(profileData) ? (
            <ShowProfileData profileData={profileData} />
          ) : (
            <NoProfileData />
          )}
        </Col>
      </Row>
    </PageLayout>
  );
}
