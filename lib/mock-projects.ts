export type mockProjectProps = {
  id: string;
  title: string;
  description: string;
  status: "active" | "paused" | "completed";
  updatedAt: string;
};

export const mockProjects: mockProjectProps[] = [
  {
    id: "1",
    title: "Dashboard Admin",
    description: "Painel administrativo em Next.js",
    status: "active",
    updatedAt: "Hoje",
  },
  {
    id: "2",
    title: "Landing Page",
    description: "Landing page institucional",
    status: "completed",
    updatedAt: "Ontem",
  },
  {
    id: "3",
    title: "App Mobile",
    description: "Aplicação mobile com React Native",
    status: "paused",
    updatedAt: "2 dias atrás",
  },
  {
    id: "4",
    title: "E-commerce",
    description: "Loja virtual completa",
    status: "active",
    updatedAt: "3 dias atrás",
  },
];
