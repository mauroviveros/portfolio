import user from "./user.json";
import website from "./website.json";
import networks from "./networks.json";

interface User {
  username: string;
  name: string[];
  surname: string[];
  email: string;
  role: Record<string, string>;
  cv_url: Record<string, string>;
}

interface Website {
  keywords: string[];
  locale: string;
  url: string;
}

interface Network {
  network: string;
  username: string;
  url: string;
  color: string;
  icon: string;
}

const getName = () => {
  return `${user.name[0]} ${user.surname[0]}`;
}

const getFullName = () => {
  return `${user.name.join(' ')} ${user.surname.join(' ')}`;
}


export const WEBSITE = {
  ...website as Website,
}

export const NETWORKS = networks as Network[];

export const USER = {
  ...user as User,
  getName,
  getFullName
}
