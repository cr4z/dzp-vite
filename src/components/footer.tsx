import { Box, IconButton, Typography, useTheme } from "@mui/material";
import FooterPNG from "../img/footer.png";
import WarningLabel from "../img/dfordoug.png";
import {
  TbBrandPatreon as Patreon,
  TbBrandInstagram as Instagram,
  TbBrandTwitter as Twitter,
} from "react-icons/tb";
import { useBreakpointHelper } from "../hooks/useBreakpointHelper";

function Footer() {
  const { palette } = useTheme();
  const { currentScreenSize, isGreaterThanEqualTo } = useBreakpointHelper();

  function getSize() {
    switch (currentScreenSize) {
      case "xs":
        return "150%";
      case "sm":
        return "100%";
      case "md":
        return "100%";
      case "lg":
        return "100%";
      case "xl":
        return "100%";
    }
  }

  return (
    <Box
      sx={{
        height: "17rem",
        backgroundImage: `url(${FooterPNG})`,
        backgroundSize: getSize() + "auto",
        backgroundPositionY: "30%",
        backgroundPositionX: "50%",
        borderTop: `1px solid ${palette.grey[800]}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box sx={{ width: "100%", height: "100%", bgcolor: "#0005" }}></Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: isGreaterThanEqualTo("md") ? "3rem" : 0,
          position: "absolute",
          top: 0,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            gap: "2rem",
            svg: { width: "3rem", height: "3rem" },
            bgcolor: "#0009",
            borderRadius: "1rem",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography gutterBottom variant="h6">Available on these platforms!</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton>
              <Patreon />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Box component="img" src={WarningLabel} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
