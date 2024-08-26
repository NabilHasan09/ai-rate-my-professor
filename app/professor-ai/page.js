"use client"
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react'
import AIBubble from "../components/AIBubble";
import UserBubble from "../components/UserBubble";

export default function ProfessorAI() {
    const [prompt, setPrompt] = useState('')
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false)

    const handleSubmit = async () => {
        if (prompt.trim() === '' || isTyping) return;

        setMessages(prevMessages => [...prevMessages, { type: 'user', text: prompt }])
        setPrompt('')
        setIsTyping(true)

        const res = await fetch('/api/chat', {
            method: 'POST',
            body: prompt
        })
        
        const data = await res.text();
        setMessages(prevMessages => [...prevMessages, { type: 'ai', text: data }])
        setIsTyping(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit();
        }
    }

    return(
        <Box display="flex" justifyContent="center" width="100%" height="85vh" sx={{ marginTop: "100px" }}>
            <Box width="1500px" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Stack flexGrow={1} display="flex" flexDirection="column" justifyContent="flex-end" >
                    <AIBubble message={"Hi there! I am ProfessorAI, aimed at providing you information about professors at colleges and universities!"} />
                    <Box height="5px" sx={{ marginBottom: "20px" }} />
                    {messages.map((message, index) => (
                        message.type === 'user' ? (
                            <UserBubble key={index} message={message.text}/>
                        ) :
                        message.type === 'ai' ? (
                            <AIBubble key={index} message={message.text}/>
                        ) : null
                    ))}
                    {isTyping && <AIBubble message="..." />}
                </Stack>
                <Box display="flex" alignItems="center"  sx={{ marginTop: "30px" }}>
                    <TextField 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder="Ask ProfessorAI..." 
                        onKeyDown={handleKeyDown} 
                        disabled={isTyping}
                        sx={{ backgroundColor: "gray", borderRadius: "25px", width: "400px", alignSelf: "flex-end", marginBottom: "20px" }} 
                    />
                    <Button onClick={handleSubmit} disabled={isTyping}>
                        <SendIcon sx={{ color: isTyping ? "darkgray" : "gray", border: `2px solid ${isTyping ? "darkgray" : "gray"}`, borderRadius: "25px", padding: "5px", fontSize: "40px", marginBottom: "20px", marginLeft: "10px" }} />
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}