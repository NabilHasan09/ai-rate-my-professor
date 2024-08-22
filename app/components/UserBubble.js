import { Box, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function UserBubble() {
    return(
        <Box display="flex" alignSelf="flex-end" alignItems="center" >
            <Box p={2} sx={{ backgroundColor: "gray", marginBottom: "20px", alignSelf: "flex-end", borderRadius: "25px" }} >
                <Typography>
                    Give me professors in the computer science department in Columbia Unversity.
                </Typography>
            </Box>
            <SentimentSatisfiedAltIcon sx={{ marginLeft: "10px", color: "white" }} />
        </Box>
        
    )
}