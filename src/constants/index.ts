import networks from "./networks.json";

interface Network {
    network: string;
    username: string;
    url: string;
    icon: string;
    color?: string;
}

export const NETWORKS = networks as Network[];