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
            <Toolbar>
                <Button ml={5} component={Link} href="/" sx={{ fontWeight: "bolder", color: "gray", transition: "transform 0.2s ease-in-out", "&:hover": { transform: "scale(1.2)" }}}>
                    RateMyProfessorAI
                </Button>

                <Typography variant="h5" margin={'auto'}>Welcome, {username}</Typography>

                <Box sx={{marginLeft: "auto"}}>
                    <Button variant="outlined" component={Link} href="/upload-professor" sx={{ color: "gray", borderColor: "gray", marginRight: "25px", transition: "transform 0.2s ease-in-out" ,"&:hover": { borderColor: "gray", transform: "scale(1.2)" } }} >
                        Upload Your Professor
                    </Button>
                    <Button onClick={handleSignOut} variant="outlined" sx={{ color: "gray", borderColor: "gray", transition: "transform 0.2s ease-in-out" ,"&:hover": { borderColor: "gray", transform: "scale(1.2)" } }} >
                        <Typography fontWeight="bolder">Sign out</Typography>
                    </Button>
                </Box>
            </Toolbar>
            <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleClose}>
                <Alert severity="success" onClose={handleClose}>Successfully signed out.</Alert>
            </Snackbar>
        </AppBar>
    )
}
