import React from 'react'
import { currencyFormat } from '../helpers/currencyHelper';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Summary = React.memo(({total}) => {

    return (
        <Card >
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'center' }}
          >
            <Grid item>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="overline"
              >
                SUMA TOTAL
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                {currencyFormat(total)}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  height: 56,
                  width: 56
                }}
              >
                <AttachMoneyIcon  />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
})


export default Summary;