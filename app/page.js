import { Box, Typography, Button, Link } from '@mui/material'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'

export default function Home() {
  return (
    <Box height="100vh" >
      <ExampleOne/>

      <Box display="flex" justifyContent="center" alignItems="center" height="200px" width="100%">
        <Box width="90%" height="1px" border="1px solid rgba(209, 209, 209, 0.5)"/>
      </Box>

      <ExampleTwo/>

      <Box display="flex" justifyContent="center" alignItems="center" >
        <Button variant="contained" component={Link} href="/professor-ai" sx={{ fontSize: "1.5em", backgroundColor: "rgba(191, 191, 191, 0.5)", border: "1px solid rgba(130, 130, 130)", transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",  '&:hover': { backgroundColor: "rgba(150,150,150)", transform: "scale(1.1)"} }}>
          Talk To ProfessorAI...
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" height="200px" width="100%">
        <Box width="90%" height="1px"/>
      </Box>

    </Box>
  );
}
