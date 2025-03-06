import { Typography, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundImage: "url('/nuochoa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))",
        maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4))",
        mt: 12,
      }}
    >
      {/* Slogan */}
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
          fontFamily: "serif",
        }}
      >
      </Typography>
    </Box>
  );
};

export default HomePage;