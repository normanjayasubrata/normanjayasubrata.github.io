import myweb1 from "../images/portofolio/myweb/1.png";
import myweb2 from "../images/portofolio/myweb/2.png";

import comingsoon from "../images/portofolio/comingsoon.png";
import simpleLinkFrame from "../images/portofolio/simple-link-frame.png";

export default [
  {
    id: 1,
    name: "My Portofolio Web",
    desc:
      "This web is built with ReactJS and React Materialize at the front. Although it is just a portofolio web, this web has its back-end for handling its email stuff. To fetch the back-end, creator use axious on the front. The back-end is built with ExpressJS and other dependencies such as nodemailer, nodemon, cors and of course body parser",
    alt: "first_web",
    projectLink: "",
    image: myweb1,
    images: [myweb1, myweb2]
  },
  {
    id: 2,
    name: "Inventory Tools",
    desc:
      "This web will built with ReactJS and React Materialize at the front and of course using axious for fetch to back-end. Probably creator will use redux to control all the state. For the back-end creator will use ExpressJS, Knex and other support dependencies such as nodemon, cors, body parser and ect. PostgreSQL will be use for DB",
    alt: "inventory_tools",
    projectLink: "https://normanjayasubrata.github.io/comingsoon/",
    image: comingsoon,
    images: [comingsoon]
  },
  {
    id: 3,
    name: "Simple Link Frame",
    desc:
      "This Web is only example web when you want to use react-iframe. But not only react-iframe, this web also can be a reference when you want to use a react-bootstrap-table. Manual responsive also applied to this web, by manual means we controlled the web layout based on the widht pixel",
    alt: "simple_link_frame",
    projectLink: "https://normanjayasubrata.github.io/simple-link-frame/",
    image: simpleLinkFrame,
    images: [simpleLinkFrame]
  }
];
