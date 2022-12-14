import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../../images/main_img.svg";
import mobileimg from "../../images/hero_mobile.svg"
import { Container } from "@mui/system";
import "../../Styles/Home/HeroSection.scss";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <Box className="Main">
            <Container className="container Slider" sx={{ position: "relative" }}>
                <Typography variant="h1" className="font_poppins text-primary">
                    Get Started Digital Learning
                </Typography>
                <Typography variant="body" className="font_poppins text_secondary layout">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
                <Button variant="contained" className="font_poppins btn_primary started-btn" >
                    Get Started
                </Button>
                <Slider {...settings} className="pt_8 slider_1">
                    <Box>
                        <img src={first} className="img-fluid img1" alt="slider_image" />
                        <img src={mobileimg} className="img-fluid img2" alt="slider_image" />

                    </Box>
                    <Box>
                    <img src={first} className="img-fluid img1" alt="slider_image" />
                        <img src={mobileimg} className="img-fluid img2" alt="slider_image" />
                    </Box>
                    <Box>
                    <img src={first} className="img-fluid img1" alt="slider_image" />
                        <img src={mobileimg} className="img-fluid img2" alt="slider_image" />
                    </Box>
                </Slider>
            </Container>
        </Box>
    );
};

export default HeroSection;
