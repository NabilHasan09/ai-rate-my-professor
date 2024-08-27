"use client"
import { Box, TextField, Stack, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AIBubble from "../components/AIBubble";
import UserBubble from "../components/UserBubble";

export default function ProfessorAI() {
    const [prompt, setPrompt] = useState('')
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false)
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user signed in');
                router.push('/professor-ai');
            }
            else {
                router.push('/login')
            }
            setLoading(false);
        })
    })

    if (loading) {
        return <div>Loading...</div>
    }

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
        <Box display="flex" justifyContent="center" height="85vh" sx={{ marginTop: "150px" }}>
            <Box height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box width={'80%'} height="100%" display="flex" flexDirection="column" overflowY={'auto'} border={'1px solid white'}>
                    <Stack flexGrow={1} display="flex" flexDirection="column" justifyContent="flex-end">
                        <AIBubble message={"Hi there! I am ProfessorAI, aimed at providing you information about professors at colleges and universities!"} />
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
                </Box>
                <Box display="flex" alignItems="center" sx={{ marginTop: "30px"}}>
                    <TextField 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder="Ask ProfessorAI..." 
                        onKeyDown={handleKeyDown} 
                        disabled={isTyping}
                        sx={{ backgroundColor: "gray", borderRadius: "25px", width: "600px", alignSelf: "flex-end", marginBottom: "20px", '& .MuiInputBase-input::placeholder': { fontFamily: "Inconsolata" } }}
                        inputProps={{style: {fontFamily: "Inconsolata"}}}
                    />
                    <Button onClick={handleSubmit} disabled={isTyping}>
                        <SendIcon sx={{ color: isTyping ? "darkgray" : "gray", border: `2px solid ${isTyping ? "darkgray" : "gray"}`, borderRadius: "25px", padding: "5px", fontSize: "40px", marginBottom: "20px", marginLeft: "10px" }} />
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
