/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/Screenshot_2.png";
import { ThemeProvider, createTheme } from "@mui/material";

const blue = createTheme({
  palette: {
    primary: {
      main: "#354491",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const green = createTheme({
  palette: {
    primary: {
      main: "#52a9a7",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Login",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <ThemeProvider theme={blue}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="primary"
                  icon="flag"
                  title="Novos projetos em processo"
                  description="Check the possible ways of working with our product and the necessary files for building your own project."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                    label: "Leia aqui",
                  }}
                />
              </Grid>
              <ThemeProvider theme={green}>
                <Grid item xs={12} lg={4}>
                  <FilledInfoCard
                    variant="gradient"
                    color="primary"
                    icon="precision_manufacturing"
                    title="Parceria nova chegando"
                    description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                    action={{
                      type: "external",
                      route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                      label: "Leia aqui",
                    }}
                  />
                </Grid>
              </ThemeProvider>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="primary"
                  icon="apps"
                  title="Notícia relâmpago"
                  description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                    label: "Leia aqui",
                  }}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
