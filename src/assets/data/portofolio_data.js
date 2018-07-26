import myweb1 from "../images/portofolio/myweb/1.png";
import myweb2 from "../images/portofolio/myweb/2.png";

import comingsoon from "../images/portofolio/comingsoon.png";

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
    alt: "first_web",
    projectLink: "https://normanjayasubrata.github.io/comingsoon/",
    image: comingsoon,
    images: [comingsoon]
  }
];
