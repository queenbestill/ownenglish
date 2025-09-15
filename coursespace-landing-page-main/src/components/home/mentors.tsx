import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { data } from './mentors.data'

const HomeOurMentors: FC = () => {
  const item = data[0]

  return (
    <Box
      id="mentors"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ fontSize: { xs: 32, md: 40 }, mb: { xs: 4, md: 6 } }}>
          Who will be your teacher?
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden' }}>
              <Image
                src={item.photo as string}
                alt={item.name}
                width={900}
                height={700}
                quality={95}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h4" sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}>
              {item.name}
            </Typography>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>{item.category}</Typography>

            <Typography variant="subtitle1" sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.7 }}>
              {item.description}
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ lineHeight: 0 }}>
                <img src={item.company?.logo} alt={(item.company?.name || '') + ' logo'} style={{ height: 28 }} />
              </Box>
              <Typography sx={{ color: 'text.secondary' }}>{item.company?.name}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeOurMentors
