import * as React from 'react'
import { Box, styled } from '@mui/material'

const Background = () => {
    return (
      <BackgroundSection />
    )
  }
  
  export default Background;
  
  const BackgroundSection = styled(Box)({
    backgroundImage: `url("src/assets/background.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  })