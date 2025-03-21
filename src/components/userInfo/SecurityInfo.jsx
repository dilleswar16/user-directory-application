import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import InfoItem from './InfoItem'
import { Security, Badge } from '@mui/icons-material'

const SecurityInfo = ({user}) => {
  return (
    <>
    <Card elevation={3}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Security & Identification
                </Typography>
                <InfoItem
                  icon={<Badge />}
                  label="EIN (Employer Identification Number)"
                  value={user.ein}
                />
                <InfoItem
                  icon={<Security />}
                  label="SSN (Social Security Number)"
                  value={user.ssn}
                />
              </CardContent>
            </Card>    
    </>
  )
}

export default SecurityInfo;