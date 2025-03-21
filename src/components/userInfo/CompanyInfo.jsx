import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import InfoItem from './InfoItem'
import { Business } from '@mui/icons-material'

const CompanyInfo = ({user}) => {
  return (
   <>
   <Card elevation={3}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Company
                </Typography>
                <InfoItem
                  icon={<Business />}
                  label="Work"
                  value={
                    <>
                      {user.company.name}
                      <br />
                      {user.company.department} - {user.company.title}
                      <br />
                      {user.company.address.address}
                      <br />
                      {user.company.address.city}, {user.company.address.state}{" "}
                      {user.company.address.postalCode}
                    </>
                  }
                />
              </CardContent>
            </Card>
   
   </>
  )
}

export default CompanyInfo;