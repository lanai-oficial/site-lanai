export type PortfolioItem = { id: string; title: string; description: string };

export type Professional = {
  slug: string;
  name: string;
  specialty: string;
  biography: string;
  image: string | null;
  videoUrl?: string;
  portfolio: PortfolioItem[];
  services: string[];
  instagram?: string;
  active: boolean;
  placeholder: true;
};

/**
 * Conteúdo exclusivamente demonstrativo. Não representa integrantes reais da Lanai.
 * Este módulo funciona como repositório de dados substituível por um CMS no futuro.
 */
export const professionals: Professional[] = [
  {
    slug: "perfil-demonstrativo-aurora",
    name: "Perfil demonstrativo — Aurora",
    specialty: "Especialidade a confirmar",
    biography: "Texto provisório para validar a composição editorial. A biografia real será publicada somente após aprovação da Lanai e da profissional.",
    image: null,
    portfolio: [
      { id: "estudo-01", title: "Espaço reservado 01", description: "Item demonstrativo; imagem e trabalho reais ainda não cadastrados." },
      { id: "estudo-02", title: "Espaço reservado 02", description: "Item demonstrativo; imagem e trabalho reais ainda não cadastrados." },
    ],
    services: ["Serviço a confirmar", "Atendimento a confirmar"],
    active: true,
    placeholder: true,
  },
  {
    slug: "perfil-demonstrativo-inativo",
    name: "Perfil demonstrativo — Inativo",
    specialty: "Especialidade a confirmar",
    biography: "Registro provisório usado para validar a desativação de perfis.",
    image: null,
    portfolio: [],
    services: [],
    active: false,
    placeholder: true,
  },
];

export const activeProfessionals = professionals.filter(({ active }) => active);
export function getActiveProfessional(slug: string) {
  return professionals.find((professional) => professional.slug === slug && professional.active);
}
