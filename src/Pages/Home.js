import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import Companies from "../components/Home/Companies";
import Courses from "../components/Home/Courses";
import Feedback from "../components/Home/Feedback";
import HeroSection from "../components/Home/HeroSection";
import Institute from "../components/Home/Institute";
import Join from "../components/Home/Join";
import Questions from "../components/Home/Questions";
import Students from "../components/Home/Students";

const Home = () => {
    return (
        <Box>
            <NavBar />
            <HeroSection />
            <Courses />
            <Institute />
            <Join />
            <Students />
            <Feedback />
            <Questions />
            <Companies />
            <Footer />
        </Box>
    );
};

export default Home;
