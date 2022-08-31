import { Box, Container, Typography, Rating, Stack, Avatar } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Home/Feedback.scss";
import colon from "../../images/colon-icon.svg";
import boy from "../../images/feedback-boy.svg";
import girl from "../../images/feedback-gril.svg";

const feedback = [
    {
        colonImg: colon,
        tagLine:
            " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        feedbackerImg: boy,
        feedbackerName: "Awlad Hossain",
        feedbackerStack: "UI Designer",
    },
    {
        colonImg: colon,
        tagLine:
            " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        feedbackerImg: girl,
        feedbackerName: "Shanta Akter",
        feedbackerStack: "Graphic Designer",
    },
    {
        colonImg: colon,
        tagLine:
            " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        feedbackerImg: boy,
        feedbackerName: "Awlad Hossain",
        feedbackerStack: "UI Designer",
    },
    {
        colonImg: colon,
        tagLine:
            " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        feedbackerImg: girl,
        feedbackerName: "Shanta Akter",
        feedbackerStack: "Graphic Designer",
    },
];

const Feedback = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Box>
            <Container className="container Feedback" sx={{pt: {md:10, xs:3} }}>
                <Box align="center" className="feedback_box" sx={{ pb: {sm:6, xs:3 } }}>
                    <Typography variant="h2" className=" text_primary font_poppins" sx={{ textAlign: "center" }}>
                        Some Students Feedback
                    </Typography>
                    <Typography variant="h6" className="feedback_inner text_secondary font_poppins" sx={{ textAlign: "center", pt:{ md:2,xs:0} }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>

                <Slider {...settings}>
                    {feedback.map((value) => (
                        <Box className="feedback_slider">
                            <Box sx={{ display: "flex", justifyContent: "space-between" }} className="primary_padding">
                                <img src={value.colonImg} alt=""></img>
                                <Stack spacing={1}>
                                    <Rating name="size-small" defaultValue={2} size="medium" />
                                </Stack>
                            </Box>
                            <Box>
                                <Typography variant="body2" className="text_secondary font_poppins secondary_padding">
                                    {value.tagLine}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: 2 }} className="tertiary_padding">
                                <Stack direction="row">
                                    <Avatar alt="feedback icon boy" src={value.feedbackerImg} />
                                </Stack>
                                <Box>
                                    <Typography variant="h2" className="feedbacker-name font_poppins">
                                        {value.feedbackerName}
                                    </Typography>
                                    <Typography variant="body2" className="text_secondary font_poppins">
                                        {value.feedbackerStack}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};
export default Feedback;
