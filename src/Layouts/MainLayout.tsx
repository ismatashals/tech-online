import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Props {
    children: JSX.Element | JSX.Element[] | string | string[]
}

const MainLayout = ({children}: Props) => {
    return (
        <Box>
            <Header />
            {children}
            <Footer />
        </Box>
    );
}
 
export default MainLayout;