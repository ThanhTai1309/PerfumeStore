import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    border: "1px solid transparent",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    "&.Mui-focused": {
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: "white",
        color: theme.palette.text.primary,
    },
}));

export default StyledInputBase;
