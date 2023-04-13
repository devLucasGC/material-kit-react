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
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
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

function DesignBlocks() {
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 2, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            O QUE FAZEMOS
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4} lg={20} mx="auto" sx={{ mb: 5 }}>
          <Grid container xs={12} lg={4} mx="auto">
            <ThemeProvider theme={green}>
              <MKBox
                position="sticky"
                top="100px"
                pb={{ xs: 2, lg: 6 }}
                sx={{ textAlign: "center" }}
              >
                <MKTypography variant="body2" lineHeight={1} color="primary">
                  <TerminalIcon sx={{ width: "40%", height: "40%" }} />
                </MKTypography>
                <MKTypography variant="h3" fontWeight="bold" mb={1}>
                  Soluções INFOR
                </MKTypography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={16}>
                    <MKTypography
                      variant="body2"
                      fontWeight="regular"
                      mb={1}
                      pr={2}
                      sx={{ fontSize: 20 }}
                    >
                      Consultoria especializada na implementação de ERP Infor. Agilidade, qualidade
                      e segurança em serviços nos melhores sistemas de gestão empresarial e de
                      gestão de armazém do mercado.
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
            </ThemeProvider>
          </Grid>
          <Grid container xs={12} lg={4} mx="auto">
            <ThemeProvider theme={blue}>
              <MKBox
                position="sticky"
                top="100px"
                pb={{ xs: 2, lg: 6 }}
                sx={{ textAlign: "center" }}
              >
                <MKTypography variant="body2" lineHeight={1} color="primary">
                  <GroupsIcon sx={{ width: "40%", height: "40%" }} />
                </MKTypography>
                <MKTypography variant="h3" fontWeight="bold" mb={1}>
                  Alocação de Recursos
                </MKTypography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={16}>
                    <MKTypography
                      variant="body2"
                      fontWeight="regular"
                      mb={1}
                      pr={2}
                      sx={{ fontSize: 20 }}
                    >
                      Alocação de profissionais de TI, para atuar junto ao cliente, apoiando nas
                      atividades diárias, como gerente de projetos, analista de sistema,
                      desenvolvedores, arquiteto de software, entre outros.
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
            </ThemeProvider>
          </Grid>
          <Grid container xs={12} lg={4} mx="auto">
            <ThemeProvider theme={green}>
              <MKBox
                position="sticky"
                top="100px"
                pb={{ xs: 2, lg: 6 }}
                sx={{ textAlign: "center" }}
              >
                <MKTypography variant="body2" lineHeight={1} color="primary">
                  <CodeIcon sx={{ width: "40%", height: "40%" }} />
                </MKTypography>
                <MKTypography variant="h3" fontWeight="bold" mb={1}>
                  Fábrica de Software
                </MKTypography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={16}>
                    <MKTypography
                      variant="body2"
                      fontWeight="regular"
                      mb={1}
                      pr={2}
                      sx={{ fontSize: 20 }}
                    >
                      Desenvolvimento de projetos de software, aplicativos mobile, aplicações web,
                      desktop, integrações, desenvolvimento de relatórios, indicadores e Dashboards.
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
