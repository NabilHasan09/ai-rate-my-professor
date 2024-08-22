import { Box, TextField } from "@mui/material";

export default function UploadProfessor() {
    return(
        <Box sx={{ marginTop: "100px" }}>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TextField placeholder="Name of College..." sx={{ backgroundColor: "gray", borderRadius: "25px", width: "400px", marginBottom: "20px" }} />
                <TextField placeholder="Name of Professor..." sx={{ backgroundColor: "gray", borderRadius: "25px", width: "400px", marginBottom: "20px" }} />
                <TextField placeholder="Field of Study" sx={{ backgroundColor: "gray", borderRadius: "25px", width: "400px", marginBottom: "20px" }} />
                <TextField placeholder="Rating... (Out of 5)" sx={{ backgroundColor: "gray", borderRadius: "25px", width: "400px", marginBottom: "20px" }} />
                <TextField placeholder="Write Your Review..." sx={{ backgroundColor: "gray", borderRadius: "25px", width: "400px", marginBottom: "20px" }} />
            </Box>
        </Box>
    )
}