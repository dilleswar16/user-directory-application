import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import InfoItem from "./InfoItem";
import { School } from "@mui/icons-material";

const EducationInfo = ({user}) => {
  return (
    <>
      <Card elevation={3}>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            Education
          </Typography>
          <InfoItem
            icon={<School />}
            label="University"
            value={user.university}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default EducationInfo;
