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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Sobre
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre
            Sobre Sobre Sobre Sobre Sobre Sobre Sobre
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
