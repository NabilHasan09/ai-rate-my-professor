"use client";
import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

export default function Header() {

    const [user, setUser] = useState(null);

    useEffect(() => {        
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                if (!user.displayName) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    await user.reload();
                }
                setUser(user);
            } else {
                setUser(null);
            }
        });
    });

    return (
        <>{user ? <HeaderLoggedIn /> : <HeaderLoggedOut />}</>
    )
}
