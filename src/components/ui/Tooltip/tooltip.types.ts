import { ReactNode } from "react";

/**
 * Posições disponíveis para o componente Tooltip em relação ao seu elemento gatilho.
 * Essas posições determinam onde o tooltip aparecerá na tela.
 *
 * @enum Exibir tooltip acima do elemento = TooltipPositions.TOP
 * @enum Exibir tooltip abaixo do elemento = TooltipPositions.BOTTOM
 * @enum Exibir tooltip à esquerda do elemento = TooltipPositions.LEFT
 * @enum Exibir tooltip à direita do elemento = TooltipPositions.RIGHT
 *
 * @example
 * ```tsx
 * <Tooltip content="Olá Mundo" position={TooltipPositions.BOTTOM}>
 *   <button>Passe o mouse aqui</button>
 * </Tooltip>
 * ```
 */
export enum TooltipPositions {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

/**
 * Props para o componente Tooltip.
 *
 * @example
 * ```tsx
 * <Tooltip content="Olá Mundo" position={TooltipPositions.TOP}>
 *   <button>Passe o mouse aqui</button>
 * </Tooltip>
 * ```
 */
export interface TooltipProps {
  /**
   * O conteúdo a ser exibido dentro do tooltip.
   * Pode ser uma string simples ou qualquer componente React para conteúdo rico.
   */
  content: string | ReactNode;

  /**
   * A posição onde o tooltip deve aparecer em relação ao elemento alvo.
   * @default TooltipPositions.TOP
   */
  position?: TooltipPositions;

  /**
   * O elemento gatilho que exibirá o tooltip quando houver hover.
   * Este é o elemento com o qual os usuários interagirão para mostrar/ocultar o tooltip.
   */
  children: ReactNode;
}
