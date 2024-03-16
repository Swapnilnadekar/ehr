import React from 'react';
// import { useState, useEffect } from 'react';
// import Card from '../../card/Card';
import './Department.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '../../Component/typography/typography';
import cardio from '../../../assets/cardiology.jpg';
import Orth from "../../../assets/6906775.jpg";
import Diabeto from "../../../assets/Dibeto.jpg";
import Gastro from "../../../assets/gastro.jpg";
import Gynaeco from "../../../assets/4283405.jpg";
import Nephro from "../../../assets/Nephro.jpg";
import marketRes from "../../../assets/MARKET_RESEARCH.jpg";

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '1px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: cardio,
    title: 'Cardiologists',
    width: '33.3%',
  },
  {
    url: Orth,
    title: 'Orthopedics',
    width: '33.3%',
  },
  {
    url: Diabeto,
    title: 'Diabetologists',
    width: '33.3%',
  },
  {
    url: Gastro,
    title: 'Gastroenterologists',
    width: '33.3%',
  },
  {
    url: Nephro,
    title: 'Nephrologists',
    width: '33.3%',
  },
  {
    url: Gynaeco,
    title: 'Gynaecologists',
    width: '33.3%',
  },

];


const Department = () => {
  return (
    <Box   component="section" sx={{ mt: -0.5, mb: -1 }}>
      {/* <Typography sx={{ color: "#ffff" }} variant="h4" marked="center" align="center" component="h2">
        Services
      </Typography> */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', pb: 3, pr: 5, pl: 5 }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                // marginLeft: "10px",
                // backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Department;
