import { Bloodtype, Cake, ContentCut, Email, Height, Person, Phone, RemoveRedEye, Scale } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import InfoItem from "../userInfo/InfoItem"

const PersonalInfo = ({user}) => {
  return (
    <>
      <Card elevation={3}>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            Personal Information
          </Typography>
          <InfoItem icon={<Email />} label="Email" value={user.email} />
          <InfoItem icon={<Phone />} label="Phone" value={user.phone} />
          <InfoItem icon={<Person />} label="Username" value={user.username} />
          <InfoItem
            icon={<Cake />}
            label="Birth Date"
            value={`${user.birthDate} (Age: ${user.age})`}
          />
          <InfoItem
            icon={<Bloodtype />}
            label="Blood Group"
            value={user.bloodGroup}
          />
          <InfoItem
            icon={<Height />}
            label="Height"
            value={`${user.height} cm`}
          />
          <InfoItem
            icon={<Scale />}
            label="Weight"
            value={`${user.weight} kg`}
          />
          <InfoItem
            icon={<RemoveRedEye />}
            label="Physical Characteristics"
            value={`Eye Color: ${user.eyeColor}`}
          />
          <InfoItem
            icon={<ContentCut />}
            label="Hair"
            value={`${user.hair.type} ${user.hair.color}`}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default PersonalInfo;
