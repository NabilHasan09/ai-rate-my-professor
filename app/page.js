import { Box, Typography } from '@mui/material'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'
import ExampleThree from './components/ExampleThree'

export default function Home() {
  return (
    <Box height="100vh" >
      <ExampleOne/>

      <Box display="flex" justifyContent="center" alignItems="center" height="200px" width="100%">
        <Box width="90%" height="1px" border="1px solid rgba(209, 209, 209, 0.5)"/>
      </Box>

      <ExampleTwo/>

      <Box display="flex" justifyContent="center" alignItems="center" height="200px" width="100%">
        <Box width="90%" height="1px" border="1px solid rgba(209, 209, 209, 0.5)"/>
      </Box>

      <ExampleThree/>
    </Box>
  );
}
