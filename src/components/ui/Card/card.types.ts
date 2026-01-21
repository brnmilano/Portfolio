import { StaticImageData } from "next/image";

/**
 * Props para o componente Card
 * Define as propriedades necessárias para exibir um cartão de projeto
 *
 * @example
 * ```tsx
 * <Card
 *   title="Projeto Exemplo"
 *   description="Descrição do projeto exemplo."
 *   imageUrl="/path/to/image.jpg"
 *   projectUrl="https://link-para-o-projeto.com"
 * />
 * ```
 */
export interface CardProps {
  /**
   * Título do projeto exibido no card
   */
  title: string;
  /**
   * Descrição breve do projeto
   */
  description: string;
  /**
   * URL da imagem do projeto exibida no card
   */
  imageUrl: string | StaticImageData;
  /**
   * URL do projeto para navegação ao clicar no card
   */
  projectUrl: string;
}
