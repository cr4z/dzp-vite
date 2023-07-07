import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBreakpointHelper } from "../hooks/useBreakpointHelper";
import ParallaxHeaderLayout from "./parallax_header_layout";

function NavLayout(props: { children: React.ReactNode }) {
  const { palette } = useTheme();

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        height="5rem"
        sx={{
          borderBottom: `1px solid ${palette.grey[800]}`,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <NavOption text="HOME" to="/" />
        <NavOption text="MERCH" to="/merch" />
        <NavOption text="LISTEN" to="/listen" />
      </Box>

      <Box sx={{ height: "100%", overflowY: "auto" }}>
        <ParallaxHeaderLayout>{props.children}</ParallaxHeaderLayout>
      </Box>
    </Box>
  );
}

function NavOption(props: { to: string; text: string }) {
  const navigate = useNavigate();
  const { isMobile } = useBreakpointHelper();

  return (
    <ButtonBase
      onClick={() => navigate(props.to)}
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={isMobile ? "h4" : "h3"}>{props.text}</Typography>
    </ButtonBase>
  );
}

export default NavLayout;
