import { IconType } from "react-icons";

export interface NavLinkProps {
  label: string;
  path: string;
  targetSegment: string | null;
}
export interface ArrowBackProps {
  iSize: number;
}

export interface Techonology {
  Icon: IconType;
  label: string;
}

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image_path: string;
  other_path: string;
  other_images: Otherimages[];
  deployed_url: string;
  other_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "NEXT"
  | "SYMFONY"
  | "PHP"
  | "FLUTTER"
  | "JS"
  | "TWIG"
  | "WORDPRESS";

export type Otherimages =
  | "bkpro/bkproplanning.png"
  | "bkpro/bkpromapclient.png"
  | "bkpro/backoffice.png"
  | "bkpro/bkprococlient.png"
  | "bkpro/bkproespaceclient.png"
  | "bkpro/bkprodemandededevis.png"
  | "bkpro/bkprosite.png"
  | "bkpro/bkprobackofficeproducts.png"
  | "bkpro/intervention.png"
  | "bkpro/users.png"
  | "bkpro/bkpromobile.png"
  | "bkpro/trackingintervention.png"
  | "onlivyou/onlivyoufr.png"
  | "onlivyou/bkpromobile.png"
  | "onlivyou/trackingintervention.png"
  | "onlivyou/onlivyoumobile.png"
  | "onlivyou/ordermobile.png"
  | "onlivyou/deliverymobile.png"
  | "onlivyou/settingback.png"
  | "onlivyou/commandeback.png"
  | "onlivyou/commandedetail.png"
  | "onlivyou/encoursback.png"
  | "onlivyou/trackingcourse.png"
  | "heatpump/heatpumpb.png"
  | "heatpump/primus.png"
  | "heatpump/primusb.png"
  | "heatpump/readme.png"
  | "heatpump/heatpumph.png";
