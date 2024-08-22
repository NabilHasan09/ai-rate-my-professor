import { Box, Stack, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function ExampleTwo(){
    return(
        <Box width="100%" height="100vh" sx={{ marginTop: "80px" }}>
            <Box ml={30} display="flex" justifyContent="center" alignItems="center" height="900px" sx={{ marginRight: "30px" }} >
                <AccountCircleIcon sx={{ color: "white", marginRight: "10px" }} />
                <Box height="250px" width="200px" sx={{ backgroundColor: "#222222", borderRadius: "25px" }} >
                    <Box display="flex" height="100%" justifyContent="center" alignItems="center" p={3} >
                        <Typography sx={{  color: "white", fontWeight: "bold" }}>
                            You can ask ProfessorAI some more interesting questions...
                        </Typography>
                    </Box>
                </Box>
                
                <Box sx={{ height: "85%", width: "2px", backgroundColor: "white", marginLeft: "25px" }}>
                    
                </Box>

                <Box ml="20px" width="550px" p={5} sx={{ backgroundColor: "#222222", border: "25px"}}>
                    <Stack>
                        <Box display="flex" alignItems="center" >
                            <Box display="flex" alignSelf="flex-end" mb={3} p={2} sx={{ backgroundColor: "#696969", borderRadius: "25px" }}>
                                What are some professors to avoid in the computer science department at Baruch College?
                            </Box>
                            <SentimentSatisfiedAltIcon sx={{ color: "white", border: "1px solid white", borderRadius: "25px", marginLeft: "10px" }} />
                        </Box>

                        <Box display="flex" alignItems="center">
                            <SupportAgentIcon sx={{ color: "white", border: "1px solid white", borderRadius: "25px", marginRight: "10px" }} />
                            <Box display="flex" mb={3} p={2} sx={{ backgroundColor: "#696969", borderRadius: "25px" }}>                       
                                M. Barry Dumas, a Computer Science professor at Baruch College, has received mixed reviews from his students, reflected in his 2.9/5 star rating. While some students find his approach challenging, citing a heavy workload with numerous presentations, debates, and writing assignments, others criticize his organizational skills and teaching methods. However, a few reviews highlight that he does make efforts to engage with students through videos and discussion topics, and while his class may be demanding, he shows an understanding attitude toward learning. Overall, Dumas's teaching style appears to be polarizing, with experiences ranging from frustration to appreciation depending on individual expectations and perspectives.
                            </Box>
                        </Box>
                    </Stack> 
                    <TextField fullWidth sx={{ backgroundColor: "#696969", borderRadius: "25px", "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, },  }} placeholder="Ask ProfessorAI..."/>
                </Box>  
            </Box>
        </Box>
    )
}