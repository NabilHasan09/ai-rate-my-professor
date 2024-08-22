"use client"
import { Box, Typography, TextField, Stack } from "@mui/material";
import { useState } from 'react'
import AIBubble from "../components/AIBubble";
import UserBubble from "../components/UserBubble";

export default function ProfessorAI() {
    const [prompt, setPrompt] = useState('')

    return(
        <Box display="flex" justifyContent="center" width="100%" height="85vh" sx={{ marginTop: "100px" }}>
            <Box width="1500px" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Stack flexGrow={1} display="flex" flexDirection="column" justifyContent="flex-end" >
                    <UserBubble/>
                    <AIBubble/> 
                </Stack>
                <Box sx={{ marginTop: "30px" }}>
                    <TextField onChange={(e) => setPrompt(e.target.value)} placeholder="Ask ProfessorAI..." sx={{ backgroundColor: "gray", borderRadius: "25px", width: "400px", alignSelf: "flex-end", marginBottom: "20px" }} /> 
                </Box>
            </Box>
        </Box>
    )
}