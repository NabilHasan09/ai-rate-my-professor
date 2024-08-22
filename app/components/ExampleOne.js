import { Box, Stack, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function ExampleOne(){
    return(
        <Box width="100%" height="100vh" sx={{ marginTop: "80px" }}>
            <Box ml={30} display="flex" justifyContent="center" alignItems="center" height="900px" sx={{ marginRight: "30px" }} >
                <AccountCircleIcon sx={{ color: "white", marginRight: "10px" }} />
                <Box height="250px" width="200px" sx={{ backgroundColor: "#444444", borderRadius: "25px" }} >
                    <Box display="flex" height="100%" justifyContent="center" alignItems="center" p={3} >
                        <Typography sx={{  color: "black", fontWeight: "bold" }}>
                            You can ask ProfessorAI any questions about your professors in any school!
                        </Typography>
                    </Box>
                </Box>
                
                <Box sx={{ height: "85%", width: "2px", backgroundColor: "white", marginLeft: "25px" }}>
                    
                </Box>

                <Box ml="20px" width="550px" p={5} sx={{ backgroundColor: "#222222", borderRadius: "25px" }}>
                    <Stack>
                        <Box display="flex" alignItems="center" >
                            <Box display="flex" alignSelf="flex-end" mb={3} p={2} sx={{ backgroundColor: "#696969", borderRadius: "25px" }}>
                                What are some good computer science professors at Columbia University?
                            </Box>
                            <SentimentSatisfiedAltIcon sx={{ color: "white", border: "1px solid white", borderRadius: "25px", marginLeft: "10px" }} />
                        </Box>

                        <Box display="flex" alignItems="center">
                            <SupportAgentIcon sx={{ color: "white", border: "1px solid white", borderRadius: "25px", marginRight: "10px" }} />
                            <Box display="flex" mb={3} p={2} sx={{ backgroundColor: "#696969", borderRadius: "25px" }}>
                                Songqiao Li, a Computer Science professor at Columbia University, is highly regarded by his students, earning a perfect 5-star rating. Known for his exceptional teaching abilities, Li is praised for his clear and concise explanations, making complex topics accessible even to beginners. His dedication to preparing for classes and his ability to instill confidence in his students, particularly in programming, has left a lasting impact on those he teaches. Students consistently express a strong desire to take his classes again, noting that his engaging and supportive approach makes him one of the best educators they've encountered.
                            </Box>
                        </Box>
                    </Stack> 
                    <TextField fullWidth sx={{ backgroundColor: "#696969", borderRadius: "25px", "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, },  }} placeholder="Ask ProfessorAI..."/>
                </Box>  
            </Box>
        </Box>
    )
}