import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from 'next/link'

export default function Header() {
    return(
        <AppBar sx={{ backgroundColor: "black" }}>
            <Toolbar>
                <Button ml={5} component={Link} href="/" sx={{ fontWeight: "bolder", color: "gray", transition: "transform 0.2s ease-in-out", "&:hover": { transform: "scale(1.2)" } }}>
                    RateMyProfessorAI
                </Button>

                <Box sx={{ marginLeft: "auto" }}>
                    <Button variant="outlined" component={Link} href="/upload-professor" sx={{ color: "gray", borderColor: "gray", marginRight: "25px", transition: "transform 0.2s ease-in-out" ,"&:hover": { borderColor: "gray", transform: "scale(1.2)" } }} >
                        Upload Your Professor
                    </Button>
                    <Button variant="outlined" sx={{ color: "gray", borderColor: "gray", transition: "transform 0.2s ease-in-out" ,"&:hover": { borderColor: "gray", transform: "scale(1.2)" } }} >
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}