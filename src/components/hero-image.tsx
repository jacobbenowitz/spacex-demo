import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const heroBg: string = "https://live.staticflickr.com/65535/52201225758_b0e8627165_3k.jpg"

const heroTitle: string = "SpaceX Launches"


export const HeroImage = ({title = heroTitle, image = heroBg}) => {
  return (
    <Container sx={{ mb: "2rem"}} disableGutters={true}>
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        height="27vh"
        position="absolute"
        sx={{ pt: "4rem", px: "3rem" }}
      >
        <h1> SpaceX Launches</h1>
      </Box>
      <Box
        style={{
          backgroundImage: 'url(https://live.staticflickr.com/65535/52201225758_b0e8627165_3k.jpg)',
          backgroundBlendMode: "multiply",
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center'
        }}
        display="flex"
        justifyContent="start"
        alignItems="center"
        height="27vh"
        >
      </Box>
    </Container>
  )
}