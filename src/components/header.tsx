import { Box, SxProps } from "@mui/material";
import BindingOfIsaac from "../img/bindingisaacred.jpg";
import DavidVsGoliath from "../img/davidvgoliathred.png";
import DougZoneBanner from "../img/dzbanner.png";
import { useBreakpointHelper } from "../hooks/useBreakpointHelper";

function Header() {
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
  const HEIGHT = getHeight();

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
        <BaroqueImage
          height={HEIGHT}
          src={DavidVsGoliath}
          sx={{ marginX: "-3rem" }}
          backgroundPositionX="0%"
        />
        <BaroqueImage
          height={HEIGHT}
          src={BindingOfIsaac}
          sx={{ marginX: "-3rem" }}
          backgroundPositionX="22%"
        />
      </Box>
      <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
        <Box sx={{ filter: "blur(.5px)" }} height={HEIGHT} component="img" src={DougZoneBanner} />
      </Box>
    </Box>
  );
}

function BaroqueImage(props: { sx: SxProps; src: string; height: string; backgroundPositionX: string }) {
  return (
    <Box
      sx={{
        height: props.height,
        width: "30%",
        objectFit: "cover",

        backgroundAttachment: "fixed",
        backgroundImage: `url(${props.src})`,
        backgroundSize: "30% auto",
        backgroundPosition: `${props.backgroundPositionX} 0%`,

        ...props.sx,
      }}
    />
  );
}

export default Header;
