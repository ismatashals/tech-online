import { Box } from "@mui/material";
import Header from "../Layouts/components/Header";
import Footer from "../Layouts/components/Footer";

interface Props {
    component: JSX.Element | JSX.Element[] | string | string[]
    layout: "main" | "default" | "no-layout"
}

const RouterElement = ({component, layout}: Props) => {
    if(layout === "no-layout") {
        return <Box>{component}</Box>
    }
    if(layout === "default") {
        return <Box>{component}</Box>
    }
    if(layout === "main") {
        return (
            <Box>
                <Header />
                {component}
                <Footer />
            </Box>
        )
    }
    return (
        <Box>
            {component}
        </Box>
    );
}
 
export default RouterElement;