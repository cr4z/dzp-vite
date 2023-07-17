import { Box } from "@mui/system";

function PNGButton(props: { src: string; href: string }) {
  return (
    <a href={props.href} target="_blank">
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
    </a>
  );
}

export default PNGButton;
