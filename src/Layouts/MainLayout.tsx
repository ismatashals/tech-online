import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Props {
    children: JSX.Element | JSX.Element[] | string | string[]
    container: boolean
}

const MainLayout = ({children, container}: Props) => {

    return (
        <>
            <Header />
            <Box sx={container ? containerSx : null}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

const containerSx = {
    maxWidth: 1430,
    margin: "0 auto",
    padding: "0 15px"
}

export default MainLayout;