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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Soluções INFOR",
    description:
      "Soluções INFOR Soluções INFOR Soluções INFOR Soluções INFOR Soluções INFOR Soluções INFOR",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Page Headers",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Features",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        pro: true,
      },
    ],
  },
  {
    title: "Alocação de Recursos",
    description:
      "Alocação de Recursos Alocação de Recursos Alocação de Recursos Alocação de Recursos Alocação de Recursos",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Navbars",
        count: 4,
        route: "/sections/navigation/navbars",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Nav Tabs",
        count: 2,
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Pagination",
        count: 3,
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "Fábrica de Software",
    description:
      "Fábrica de Software Fábrica de Software Fábrica de Software Fábrica de Software Fábrica de Software",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Newsletters",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Contact Sections",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Forms",
        count: 3,
        route: "/sections/input-areas/forms",
      },
    ],
  },
];
