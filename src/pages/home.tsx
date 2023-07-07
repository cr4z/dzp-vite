import { Box, Container, Typography } from "@mui/material";
import Discord from "../buttons/discord.png";
import Footer from "../components/footer";

function Home() {
  const FONT_SIZE = "h4";

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="img" src={Discord} sx={{ width: "10rem", cursor: "pointer", my: "4rem" }} />
      <Typography variant={FONT_SIZE}>
        In the smoky, dimly-lit abyss of counterculture, where chaos reigns and societal norms go to die,
        emerges an audacious, irreverent entity known as "The Doug Zone Podcast."
      </Typography>
    </Container>
  );
}

export default Home;
