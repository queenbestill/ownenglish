import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box id="test-section" sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Ready to start your English journey?
          </Typography>
          <Typography sx={{ mb: 6 }}>Take our placement test to find the perfect level for you.</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <StyledButton 
              disableHoverEffect 
              size="large"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdYCCJHXvCQWCiXtiaggsNKIN9uPcDa5F76PWCK8cy9_K7Cag/viewform?usp=sf_link', '_blank')}
            >
              Take the level test
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
