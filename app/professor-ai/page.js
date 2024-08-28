"use client"
import { Box, TextField, Stack, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useRef } from 'react'
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
    const messagesEndRef = useRef(null);

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

    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }, [messages]);


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
        <Box display="flex" flexDirection="column" alignItems="center" minheight="100vh" sx={{ 
            paddingTop: "150px",
            paddingBottom: "100px" // Space for the fixed input box
        }}>
                <Box width={'80%'}>
                    <Stack width="100%" display="flex" alignItems="center" justifyContent="flex-end" flexDirection="column">
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
                        <div ref={messagesEndRef} />
                    </Stack>
                </Box>
                <Box position="fixed" bottom={10} display="flex" alignItems="center" sx={{ marginTop: "30px"}}>
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
    )
}
