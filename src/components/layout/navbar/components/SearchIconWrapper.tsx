import { styled } from "@mui/material/styles";

const SearchIconWrapper = styled("div")<{ bgColor?: string }>(({ theme, bgColor }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor || "transparent",
}));

export default SearchIconWrapper;
