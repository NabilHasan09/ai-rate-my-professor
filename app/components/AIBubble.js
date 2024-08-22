import { Box, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function AIBubble() {
    return(
        <Box display="flex" alignItems="center">
            <SupportAgentIcon sx={{ color: "white", border: "1px solid white", padding: "3px", borderRadius: "25px", fontSize: "30px", marginRight: "10px" }} />
            <Box p={2} sx={{ backgroundColor: "gray", borderRadius: "25px" }} >
                <Typography >
                    Professor Alan Thompson is a distinguished faculty member in the Department of Computer Science at Columbia University. His expertise includes algorithms, machine learning, and data systems. Since joining Columbia in 2014, Professor Thompson has been actively involved in research related to computational efficiency and large-scale data analysis. He is known for his contributions to optimizing algorithms for big data and has published numerous papers on the subject. Professor Thompson holds office hours on Mondays and Wednesdays from 1:00 PM to 3:00 PM. He can be contacted via email at alan.thompson@columbia.edu or by phone at (212) 555-6789.
                </Typography>
            </Box>
        </Box>
    )
}