import { ReactNode } from "react";

/**
 * Props para o componente Card genérico
 * Define as propriedades necessárias para exibir um cartão reutilizável
 *
 * @example
 * ```tsx
 * // Projeto Card (clicável)
 * <Card title="Projeto" description="Desc" href="https://..." external>
 *   <Image ... />
 * </Card>
 *
 * // Service Card (não clicável)
 * <Card title="Serviço" description="Desc">
 *   <IconComponent />
 * </Card>
 * ```
 */
export interface CardProps {
  /**
   * Título do card exibido no card
   */
  title: string;
  /**
   * Descrição breve do card
   */
  description: string;
  /**
   * URL para navegação ao clicar no card
   * Se não fornecido, o card não será clicável
   */
  href?: string;
  /**
   * Conteúdo visual (imagem, ícone, etc)
   */
  children: ReactNode;
  /**
   * Se deve abrir em nova aba
   * @default true
   */
  external?: boolean;
  /**
   * Se o background deve ser transparente (para cards não-clicáveis)
   * @default false
   */
  services?: boolean;
}
