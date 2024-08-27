"use client";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user signed in');
                router.push('/');
            }
            setLoading(false);
        })
    })

    if (loading) {
        return <div>Loading...</div>
    }
    
    return <>{children}</>
}
