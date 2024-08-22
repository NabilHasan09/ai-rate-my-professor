import { Box, Stack, TextField, Typography, Button } from '@mui/material'

export default function ExampleThree(){

    return(
        <Box width="100%" height="100vh" sx={{ marginTop: "80px" }}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                <Box display="flex" justifyContent="center" mb={2} p={2} width="400px" sx={{ backgroundColor: "gray", borderRadius: "25px" }}>
                    <Typography sx={{ color: "rgba(209,209,209,0.7)", fontWeight: "bold", }}>
                        Harvard University
                    </Typography>
                </Box>
                <Typography sx={{ color: "rgba(209, 209, 209, 0.5)", marginBottom: "20px" }}>
                    Click Your Number of Classes
                </Typography>
                <Box>
                    {[1,2,3,4,5,6].map((num) => (
                        <Button variant="outlined" sx={{ marginRight: "5px", borderColor: "gray", color: "gray" }} >
                            {num}
                        </Button>
                    ))}
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box display="flex" sx={{ marginTop: "20px", marginBottom: "10px" }}>
                        <Box p={1} width="300px" display="flex" justifyContent="center" sx={{ backgroundColor: "gray", borderRadius: "25px", marginRight: "10px" }}>
                            <Typography sx={{ color: "rgba(209, 209, 209, 0.5)" }}>
                                Data Structures and Algorithms
                            </Typography>
                        </Box>

                        <Box p={1} width="300px" display="flex" justifyContent="center" sx={{ backgroundColor: "gray", borderRadius: "25px" }}>
                            <Typography sx={{ color: "rgba(209, 209, 209, 0.5)" }}>
                                Calculus II
                            </Typography>
                        </Box>
                    </Box>
                    <Button type="submit" variant="outlined" sx={{ color: "gray", borderColor: "gray" }} >
                        Generate
                    </Button>   
                </Box>
                
                <Box display="flex" sx={{ marginTop: "20px" }}>
                    <Box width="500px" height="700px" p={3} sx={{ backgroundColor: "gray", borderRadius: "25px", marginRight: "20px" }}>
                        <Typography sx={{ marginBottom: "15px" }}>
                        At Harvard University, Dr. Jane Smith is a respected professor in the Department of Computer Science, specializing in Data Structures and Algorithms. Her research interests include optimizing algorithms, advanced data structures, and their applications in real-world problem-solving. Since joining Harvard's faculty in 2015, Dr. Smith has been dedicated to improving the efficiency and effectiveness of algorithmic solutions. She has published numerous papers on topics such as algorithmic complexity and data manipulation techniques. Dr. Smith is available for consultation during office hours on Mondays and Wednesdays from 2:00 PM to 4:00 PM. She can be reached via email at jane.smith@harvard.edu or by phone at (617) 555-1234.
                        </Typography>
                        <Typography>
                        Another prominent faculty member is Dr. John Doe, who also teaches in the Department of Computer Science with a focus on Data Structures and Algorithms. Dr. Doe's expertise lies in dynamic programming, graph algorithms, and the development of efficient data storage and retrieval methods. He has been with Harvard since 2018 and is known for his contributions to both theoretical and practical aspects of data structures. Dr. Doe regularly publishes in top-tier journals and is involved in several collaborative research projects. His office hours are on Tuesdays and Thursdays from 3:00 PM to 5:00 PM. For any inquiries, he can be contacted via email at john.doe@harvard.edu or by phone at (617) 555-5678.
                        </Typography>
                    </Box>

                    <Box width="500px" height="700px" p={3} sx={{ backgroundColor: "gray", borderRadius: "25px" }}>
                        <Typography sx={{ marginBottom: "15px" }}>
                            At Harvard University, Dr. Emily Turner is a distinguished professor in the Department of Mathematics, specializing in advanced calculus, including Calculus III. Her research interests include multivariable calculus, differential geometry, and mathematical modeling. Since joining Harvard's faculty in 2016, Dr. Turner has been dedicated to exploring complex calculus concepts and their applications in various scientific fields. She has authored several influential papers on topics such as vector calculus and surface integrals. Dr. Turner is available for office hours on Tuesdays and Thursdays from 10:00 AM to 12:00 PM. She can be reached via email at emily.turner@harvard.edu or by phone at (617) 555-7890.
                        </Typography>
                        <Typography>
                            Dr. Robert Lee is a professor in Harvard's Department of Mathematics, specializing in Calculus III. His research focuses on numerical analysis and partial differential equations. Since joining Harvard in 2019, Dr. Lee has contributed significantly to higher-dimensional calculus and its practical applications. He is available for office hours on Wednesdays and Fridays from 1:00 PM to 3:00 PM. Contact him via email at robert.lee@harvard.edu or by phone at (617) 555-6789.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}