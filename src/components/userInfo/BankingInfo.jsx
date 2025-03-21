import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import InfoItem from './InfoItem'
import { CreditCard } from '@mui/icons-material'


const BankingInfo = ({user}) => {

  return (
    <>
    <Card elevation={3}>  
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Banking Information
                </Typography>
                <InfoItem
                  icon={<CreditCard />}
                  label="Card Information"
                  value={
                    <>
                      {user.bank.cardType}
                      <br />
                      Expires: {user.bank.cardExpire}
                      <br />
                      Currency: {user.bank.currency}
                      <br />
                      IBAN: {user.bank.iban}
                    </>
                  }
                />
              </CardContent>
            </Card>
    </>
  )
}

export default BankingInfo;