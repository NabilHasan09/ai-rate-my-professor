import { Box, Typography } from "@mui/material";
import { useState, useEffect } from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function UserBubble({ message }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < message.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prevText => prevText + message[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 30);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, message]);

    return(
        <Box display="flex" alignSelf="flex-end" alignItems="center" sx={{ marginTop: "20px" }} >
            <Box p={2} sx={{ backgroundColor: "gray", marginBottom: "20px", alignSelf: "flex-end", borderRadius: "25px" }} >
                <Typography sx={{ fontFamily: "Inconsolata" }}>
                    {displayedText}
                </Typography>
            </Box>
            <SentimentSatisfiedAltIcon sx={{ marginLeft: "10px", color: "white" }} />
        </Box>
        
    )
}