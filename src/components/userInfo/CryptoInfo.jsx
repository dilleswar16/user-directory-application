import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import InfoItem from './InfoItem'
import { CurrencyBitcoin } from '@mui/icons-material'

const CryptoInfo = ({user}) => {
  return (
    <>
    <Card elevation={3}>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Crypto Wallet
                </Typography>
                <InfoItem
                  icon={<CurrencyBitcoin />}
                  label="Crypto Details"
                  value={
                    <>
                      Coin: {user.crypto.coin}
                      <br />
                      Network: {user.crypto.network}
                      <br />
                      Wallet: {user.crypto.wallet}
                    </>
                  }
                />
              </CardContent>
            </Card>
    </>
  )
}

export default CryptoInfo