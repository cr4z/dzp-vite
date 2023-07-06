import { Box, Container, SxProps } from "@mui/material";
import Spotify from "../buttons/spotify.png";
import Apple from "../buttons/apple.png";
import PNGButton from "../components/png_button";

function Listen() {
  return (
    <Container>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around", my: "4rem" }}>
        <Box sx={{ display: "flex", gap: "4rem" }}>
          <PNGButton src={Spotify} />
          <PNGButton src={Apple} />
        </Box>
      </Box>
      <iframe
        title="The Doug Zone"
        allowTransparency={true}
        height="100%"
        width="100%"
        style={{ border: "none", minWidth: "min(100%, 430px)" }}
        data-name="pb-iframe-player"
        src="https://www.podbean.com/player-v2/?i=49d2e-bb914d-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=c73a3a&size=315"
        allowFullScreen
      />
    </Container>
  );
}

export default Listen;
