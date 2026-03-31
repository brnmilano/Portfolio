import {
  SoftwareDevelopmentIcon,
  ApplicationsReactNextIcon,
  ApiIntegrationIcon,
} from "@/components/icons";

export const SERVICES_TITLE = "Como posso ajudar o seu negócio";
export const SERVICES_SUBTITLE = "Meus serviços";

export const SERVICES_DATA = [
  {
    id: "software-development",
    title: "Desenvolvimento de Software",
    description:
      "Interfaces modernas para sistemas e aplicações digitais, com foco em usabilidade e responsividade.",
    icon: SoftwareDevelopmentIcon,
  },
  {
    id: "react-next-development",
    title: "Aplicações com React.js e Next.js",
    description:
      "Aplicações desenvolvidas com React.js e Next.js, com foco em performance e escalabilidade.",
    icon: ApplicationsReactNextIcon,
  },
  {
    id: "api-integration",
    title: "Integração com APIs",
    description:
      "Conexão com APIs REST para consumir, enviar e gerenciar dados na aplicação.",
    icon: ApiIntegrationIcon,
  },
];
