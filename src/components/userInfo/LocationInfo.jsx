import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import InfoItem from './InfoItem'
import { LocationOn } from '@mui/icons-material'

const LocationInfo = ({user}) => {
  return (
    <>
    <Card elevation={3}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Location
                </Typography>
                <InfoItem
                  icon={<LocationOn />}
                  label="Address"
                  value={
                    <>
                      {user.address.address}
                      <br />
                      {user.address.city}, {user.address.state}{" "}
                      {user.address.postalCode}
                      <br />
                      {user.address.country}
                    </>
                  }
                />
              </CardContent>
            </Card>
    </>
  )
}

export default LocationInfo