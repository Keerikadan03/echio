import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    components: {
        components: {

            MuiTextField: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        fontSize: '1rem',
                    },
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        // Customize border size here
                        // border: '1px solid',

                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                        // border: '1px solid ', // Customize border size when focused
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            main: "rgba(0,0,0,0.54)",
        },
        secondary: {
            main: "rgb(240,128,128)"
        }
    },
});

export default theme
