import { Box } from "@mui/material";
import MainLayout from "@/Layouts/MainLayout";

interface Props {
    component: JSX.Element | JSX.Element[] | string | string[]
    layout: "main" | "default" | "no-layout"
    container: boolean
}

const RouterElement = ({component, layout, container}: Props) => {
    if(layout === "no-layout") {
        return <Box>{component}</Box>
    }
    if(layout === "default") {
        return <Box>{component}</Box>
    }
    if(layout === "main") {
        return <MainLayout container={container}>{component}</MainLayout>
    }
    return (
        <Box>
            {component}
        </Box>
    );
}
 
export default RouterElement;