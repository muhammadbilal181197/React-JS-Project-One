import { Box, Typography, Container } from "@mui/material";
import React from "react";
import "../../Styles/Common/Footer.scss";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/tiktok.svg";
import linkedin from "../../images/linkedin.svg";
import tiktok from "../../images/tiktok.svg";

const Footer = () => {
    return (
        <Box>
            <Container maxWidth="lg" className="Footer" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h1" className="footer_logo font_poppins">
                    Pro Edu
                </Typography>
                <Typography variant="body2" className="font_poppins footer_tagline" sx={{ py: 1.5 }}>
                    Office 41, Zawaya Buildin, Ghala Muscat, Sultanate of Oman
                </Typography>
                <Typography variant="body2" className="font_poppins footer_terms">
                    Privacy Ploicy | Terms of use
                </Typography>
                <Box className="footer_icon" sx={{ pt: 2, gap:2}}>
                    <Box>
                        <img src={facebook} alt="facebook icon"></img>
                    </Box>
                    <Box sx={{pt:1}}>
                        <img src={twitter} alt="twitter icon"></img>
                    </Box>
                    <Box>
                        <img src={linkedin} alt="linkedin icon"></img>
                    </Box>
                    <Box sx={{pt:1}}>
                        <img src={tiktok} alt="tiktok icon"></img>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
