import { Project, Service, Techonology } from "../types/types";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import {
  SiBootstrap,
  SiDart,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const technologies: Techonology[] = [
  { Icon: SiFlutter, label: "Flutter" },
  { Icon: SiSymfony, label: "Symfony" },
  { Icon: SiNextdotjs, label: "Nextjs" },
  { Icon: SiBootstrap, label: "Bootstrap" },
  { Icon: SiTypescript, label: "Typescript" },
  { Icon: SiReact, label: "React" },
  { Icon: SiMysql, label: "Mysql" },
  { Icon: SiTailwindcss, label: "Tailwindcss" },
];

export const services: Service[] = [
  {
    Icon: BiAnalyse,
    title: "Analyse et conception",
    about:
      "Analyse des besoins du client, Diagrammes: UML use case, Analyse, Classes, GANTT.",
  },
  {
    Icon: FaServer,
    title: "Back-end",
    about:
      "Construire une application organisée en couches. Développer les parties backend d'une interface utilisateur web.",
  },
  {
    Icon: RiComputerLine,
    title: "Front-end",
    about:
      "Maquetter une Application web & mobile. Développer les parties frontend d'une interface utilisateur web & mobile. ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Environnement, versioning & Déploiement",
    about:
      "Maîtrise de Git (Github, Gitlab), Setup d'un LAMP sur serveur dédié Ubuntu, Mise en production (Gitlab ci, connexion SFTP).",
  },
  {
    Icon: AiOutlineApi,
    title: "TESTS...",
    about:
      "Préparer et éxécuter les plans de tests d'une application, mettre en place une integration continue(CI/CD).",
  },
  {
    Icon: AiOutlineApi,
    title: "BDD, API, DOCKER",
    about:
      "Concevoir une Base de données relationnelle complexe, créer une API REST solide, utiliser docker",
  },
];

export const projects: Project[] = [
  {
    ref: 1,
    name: "ONLivyou backoffice",
    description:
      "Backoffice commerçant, pour la gestion des livraisons, des produits, stats de caisse.",
    image_path: "/images/onlivyou/backofficeonliyou.png",
    other_images: ["onlivyou/onlivyoumobile.png"],
    deployed_url:
      "https://liv-frontend-dev-git-develop-trsaref.vercel.app/dashboard",
    github_url: "https://github.com/onlivyou/",
    category: ["next"],
    key_techs: ["Next.js", "React", "Firebase"],
  },
  {
    ref: 2,
    name: "ONLivyou app mobile",
    description:
      "Cette application permet la livraison chez vous en moins d'une heure par les livreurs onlivyou, des produits des boutiques sur Nice.",
    image_path: "/images/onlivyou/onlivyoumobile.png",
    other_images: ["onlivyou/deliverymobile.png"],
    deployed_url: "https://apps.apple.com/fr/app/onlivyou/ref6447993451",
    github_url: "https://github.com/onlivyou/",
    category: ["flutter"],
    key_techs: ["Dart", "GoogleMap", "Socket.io", "Firebase"],
  },
  {
    ref: 3,
    name: "ONLivyou site client",
    description:
      "Site d'information et d'inscription des livreurs et des boutiques.",
    image_path: "/images/onlivyou/onlivyoufr.png",
    other_images: ["onlivyou/onlivyoumobile.png"],
    deployed_url: "https://www.onlivyou.fr/",
    github_url: "https://github.com/onlivyou/",
    category: ["wordpress"],
    key_techs: ["PHP", "Wordpress"],
  },
  {
    ref: 4,
    name: "Batiweb site client",
    image_path: "/images/bkpro/bkprosite.png",
    other_images: ["onlivyou/onlivyoumobile.png"],
    deployed_url: "http://198.244.231.59/admin",
    github_url: "http://198.244.231.59/",
    category: ["symfony", "js", "twig"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    ref: 5,
    name: "Batiweb backoffice",
    image_path: "/images/bkpro/bkprohomebacko.png",
    other_images: [
      "bkpro/bkproplanning.png",
      "bkpro/bkpromapclient.png",
      "bkpro/bkprohomebacko.png",
    ],
    deployed_url: "http://198.244.231.59/admin",
    github_url: "http://198.244.231.59/",
    category: ["symfony", "js", "twig"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: ["Api platform", "MySQL", "ORM doctrine", "Chart js"],
  },
  {
    ref: 6,
    name: "Batiweb app mobile",
    image_path: "/images/bkpro/homemobilebkprolight.png",
    other_images: ["onlivyou/onlivyoumobile.png"],
    deployed_url: "http://198.244.231.59/admin",
    github_url: "http://198.244.231.59/",
    category: ["flutter"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    ref: 7,
    name: "HeatPump Calculator",
    image_path: "/images/heatpump/heatpumph.png",
    other_images: ["onlivyou/onlivyoumobile.png"],
    deployed_url: "https://heatpumpcalculator.ipso.com/",
    github_url: "https://ipso.com/technology/evo5dryingtechnology/",
    category: ["symfony"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },
];
