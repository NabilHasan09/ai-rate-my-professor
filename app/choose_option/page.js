import { Box, Button } from '@mui/material'
import Link from 'next/link'

export default function ChooseOption(){
    return(
        <Box mt={10} width="100%" height="90vh" >
            <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" component={Link} href="/professor-ai" sx={{ marginRight: "20px", minHeight: "700px" }} >
                    Talk to our bot, ProfessorAI...
                </Button>

                <Button variant="outlined" component={Link} href="/generate-professors" sx={{ minHeight: "700px" }} >
                    Generate Professors Based Off Your Classes...
                </Button>
            </Box>
        </Box>
    )
}