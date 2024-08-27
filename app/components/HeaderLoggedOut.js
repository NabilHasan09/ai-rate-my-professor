import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";

export default function HeaderLoggedOut() {
    return(
        <AppBar sx={{ backgroundColor: "black" }}>
            <Toolbar>
                <Button ml={5} component={Link} href="/" sx={{ fontWeight: "bolder", color: "gray", transition: "transform 0.2s ease-in-out", "&:hover": { transform: "scale(1.2)" } }}>
                    RateMyProfessorAI
                </Button>

                <Box sx={{ marginLeft: "auto" }}>
                    <Button variant="outlined" sx={{ color: "gray", borderColor: "gray", transition: "transform 0.2s ease-in-out" ,"&:hover": { borderColor: "gray", transform: "scale(1.2)" } }} >
                        <Typography color="gray" fontWeight="bolder">
                            <Link href='/login' color='gray' underline='none'>Login</Link>
                        </Typography>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
