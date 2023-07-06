import { Box } from "@mui/system";

function PNGButton(props: { src: string }) {
  return (
    <Box
      sx={{
        borderRadius: "1rem",
        border: "2px #333 solid",
        boxShadow: 4,
        width: "10rem",
        cursor: "pointer",
      }}
      component="img"
      src={props.src}
    />
  );
}

export default PNGButton;
