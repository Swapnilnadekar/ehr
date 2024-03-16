import React from 'react';
// import Card from '../../card/Card';
import './About.css';
// import About from '../../About.css';
import EHR from '../../../assets/EHR.png';
import Abhacard from '../../../assets/abha card.png';
import DigiRx from '../../../assets/DigiRx.jpg';
import cards from '../../../assets/19836.jpg';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const About = () => {

  return (
    <div className="main">
      <div className="main_container" id="about-us">
        {/* <img className='main_image' width={"755vh"} height={"470vh"} src={EHR} alt="" /> */}
        <Card sx={{ maxWidth: 720, width: 720, height: 540, marginLeft: 3, boxShadow: 8 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="540"
            width="720"
            image={EHR}
          />
        </Card>
        <div className="card_container">
          <div className="first_container">
            <Card className="card_img" sx={{ maxWidth: 335, width: 335, height: 253, marginLeft: 3, boxShadow: 8 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="200"
                image={cards}
              />
              <CardContent sx={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  EHR Based Analytics
                </Typography>
              </CardContent>
            </Card>
            <Card className="card_img" sx={{ maxWidth: 335, width: 335, height: 253, marginLeft: 4, boxShadow: 8 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="200"
                image={Abhacard}
              />
              <CardContent sx={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Smart Integration with Abha
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="second_container">
            <Card className="card_img" sx={{ maxWidth: 345, width: 345, height: 253, marginLeft: 2, boxShadow: 8 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="200"
                image={DigiRx}

              />
              <CardContent sx={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Speech to RX
                </Typography>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
