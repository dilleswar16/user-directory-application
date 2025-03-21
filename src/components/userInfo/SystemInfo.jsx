import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import InfoItem from './InfoItem'
import { Computer, Dns, Router } from '@mui/icons-material'

const SystemInfo = ({user}) => {
  return (
    <>
      <Card elevation={3}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  System Information
                </Typography>
                <InfoItem
                  icon={<Router />}
                  label="IP Address"
                  value={user.ip}
                />
                <InfoItem
                  icon={<Dns />}
                  label="MAC Address"
                  value={user.macAddress}
                />
                <InfoItem
                  icon={<Computer />}
                  label="Browser Details"
                  value={user.userAgent}
                />
              </CardContent>
            </Card>
    </>
  )
}

export default SystemInfo