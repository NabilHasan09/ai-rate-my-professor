import { Alert, AppBar, Toolbar, Typography, Button, Box, Link, Snackbar } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeaderLoggedIn() {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const user = auth.currentUser;
    const username = user.displayName;
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setSnackbarOpen(true);
            router.push('/');
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleClose = () => {
        setSnackbarOpen(false);
    }

    return(
        <AppBar sx={{ backgroundColor: "black"}}>
            <Toolbar >
                <Button ml={5} component={Link} href="/"  sx={{ fontSize: "1.2em", fontWeight: "bolder", color: "gray", transition: "transform 0.2s ease-in-out", "&:hover": { transform: "scale(1.2)" }}}>
                    <Typography fontFamily="Inconsolata" sx={{ fontSize: "1.2em"}}>
                        RateMyProfessorAI
                    </Typography>
                </Button>

                <Box display="flex" sx={{marginLeft: "auto"}}>
                    <Typography variant="h5" margin={'auto'} fontWeight={700} sx={{ color: "gray", fontFamily: "Inconsolata", marginRight: "20px" }}>
                        Welcome, {username}
                    </Typography>
                    <Button onClick={handleSignOut} variant="outlined" sx={{ color: "gray", borderColor: "gray", transition: "transform 0.2s ease-in-out" ,"&:hover": { borderColor: "gray", transform: "scale(1.2)" } }} >
                        <Typography fontWeight="bolder" fontFamily="Inconsolata" >
                            Sign out
                        </Typography>
                    </Button>
                </Box>
            </Toolbar>
            <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleClose}>
                <Alert severity="success" onClose={handleClose}>Successfully signed out.</Alert>
            </Snackbar>
        </AppBar>
    )
}
