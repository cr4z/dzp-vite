import { Box, Container, Typography, styled } from "@mui/material";
import BindingOfIsaac from "../img/bindingisaacred.jpg";
import DavidVsGoliath from "../img/davidvgoliathred.png";
import DougZoneBanner from "../img/dzbanner.png";
import { useBreakpointHelper } from "../hooks/useBreakpointHelper";

function ParallaxHeaderLayout(props: { children: React.ReactNode }) {
  const { currentScreenSize } = useBreakpointHelper();

  function getHeight() {
    switch (currentScreenSize) {
      case "xs":
        return "10rem";
      case "sm":
        return "15rem";
      case "md":
        return "17rem";
      case "lg":
        return "23rem";
      case "xl":
        return "30rem";
    }
  }

  return (
    <ParallaxContainer>
      <ParallaxBackground>
        <Box sx={{ width: "100%", display: "flex" }}>
          <BaroqueImage height={getHeight()} src={DavidVsGoliath} />
          <BaroqueImage height={getHeight()} src={BindingOfIsaac} />
        </Box>
      </ParallaxBackground>
      <ParallaxBase>
        <Box sx={{ position: "absolute", width: "100%" }}>
          <Box sx={{ filter: "blur(.5px)" }} height={getHeight()} component="img" src={DougZoneBanner} />
          <Box sx={{ bgcolor: "#111", mt: "-4px", minHeight: "80vh" }}>{props.children}</Box>
        </Box>
      </ParallaxBase>
    </ParallaxContainer>
  );
}

function BaroqueImage(props: { src: string; height: string }) {
  return (
    <Box
      sx={{
        height: "143rem",
        width: "100%",

        objectFit: "cover",
        backgroundImage: `url(${props.src})`,
        backgroundSize: "50% auto",
      }}
    />
  );
}

const ParallaxContainer = styled("div")({
  height: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  WebkitPerspective: "1px",
  perspective: "1px",
  width: "100%",
});

const ParallaxBase = styled("div")({
  position: "absolute",
  width: "100%",
  transform: "translateZ(0)",
});

const ParallaxBackground = styled("div")({
  position: "absolute",
  transform: "translateZ(-1px) translateX(-25%) translateY(-20%)",
  width: "200%",
});

export default ParallaxHeaderLayout;
