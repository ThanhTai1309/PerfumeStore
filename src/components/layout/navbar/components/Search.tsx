import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 1),
    border: "1px solid transparent",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        border: `1px solid ${theme.palette.primary.main}`,
    },

    marginLeft: 0,
    width: "100%",

    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

export default Search;
