import { Box, Container, Grid, SxProps } from "@mui/material";
import Spotify from "../buttons/spotify.png";
import Apple from "../buttons/apple.png";
import PNGButton from "../components/png_button";

function Listen() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        py: "3rem",
      }}
    >
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <PNGButton href="https://podcasts.apple.com/au/podcast/the-doug-zone/id1576467855" src={Apple} />
        <PNGButton
          href="https://open.spotify.com/show/4Iowwc2kLHcjYhcMVUhEnc?si=280848e5b8da418d"
          src={Spotify}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "10px",
              border: "0px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/the-doug-zone/id1576467855"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            style={{ borderRadius: "12px", border: "0px" }}
            src="https://open.spotify.com/embed/show/4Iowwc2kLHcjYhcMVUhEnc?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default Listen;
