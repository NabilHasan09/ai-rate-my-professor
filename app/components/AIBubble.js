import { Box, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useState, useEffect } from 'react';

export default function AIBubble({ message }) {
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
        <Box display="flex" alignItems="center">
            <SupportAgentIcon sx={{ color: "white", border: "1px solid white", padding: "3px", borderRadius: "25px", fontSize: "30px", marginRight: "10px" }} />
            <Box p={2} sx={{ backgroundColor: "gray", borderRadius: "25px" }} >
                <Typography>
                    {displayedText}
                </Typography>
            </Box>
        </Box>
    )
}