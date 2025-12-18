import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "./tooltip";
import { TooltipPositions } from "./tooltip.type";

describe("Tooltip", () => {
  const defaultProps = {
    content: "Tooltip content",
    children: <button>Hover me</button>,
  };

  test("should match snapshot.", () => {
    const { container } = render(<Tooltip {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  test("should render children correctly", () => {
    render(<Tooltip {...defaultProps} />);

    const button = screen.getByText("Hover me");
    expect(button).toBeInTheDocument();
  });

  test("should not display tooltip initially", () => {
    render(<Tooltip {...defaultProps} />);

    const tooltip = screen.queryByText("Tooltip content");
    expect(tooltip).not.toBeInTheDocument();
  });

  test("should display tooltip on mouse enter", async () => {
    const user = userEvent.setup();
    const { container } = render(<Tooltip {...defaultProps} />);

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toBeInTheDocument();
  });

  test("should hide tooltip on mouse leave", async () => {
    const user = userEvent.setup();
    const { container } = render(<Tooltip {...defaultProps} />);

    const tooltipContainer = container.firstChild as HTMLElement;

    // Hover para mostrar o tooltip
    await user.hover(tooltipContainer);
    expect(screen.getByText("Tooltip content")).toBeInTheDocument();

    // Unhover para esconder o tooltip
    await user.unhover(tooltipContainer);
    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
  });

  test("should apply default position as TOP when position is not provided", async () => {
    const user = userEvent.setup();
    const { container } = render(<Tooltip {...defaultProps} />);

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("top");
  });

  test("should apply TOP position class correctly", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip {...defaultProps} position={TooltipPositions.TOP} />,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("top");
  });

  test("should apply BOTTOM position class correctly", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip {...defaultProps} position={TooltipPositions.BOTTOM} />,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("bottom");
  });

  test("should apply LEFT position class correctly", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip {...defaultProps} position={TooltipPositions.LEFT} />,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("left");
  });

  test("should apply RIGHT position class correctly", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip {...defaultProps} position={TooltipPositions.RIGHT} />,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("right");
  });

  test("should render string content correctly", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip content="Simple text tooltip">
        <span>Hover element</span>
      </Tooltip>,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    expect(screen.getByText("Simple text tooltip")).toBeInTheDocument();
  });

  test("should render ReactNode content correctly", async () => {
    const user = userEvent.setup();
    const customContent = (
      <div>
        <strong>Bold text</strong>
        <span> with normal text</span>
      </div>
    );

    const { container } = render(
      <Tooltip content={customContent}>
        <span>Hover element</span>
      </Tooltip>,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    expect(screen.getByText("Bold text")).toBeInTheDocument();
    expect(screen.getByText("with normal text")).toBeInTheDocument();
  });

  test("should render arrow element when tooltip is visible", async () => {
    const user = userEvent.setup();
    const { container } = render(<Tooltip {...defaultProps} />);

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const arrow = container.querySelector(".arrow");
    expect(arrow).toBeInTheDocument();
  });

  test("should not render arrow element when tooltip is hidden", () => {
    const { container } = render(<Tooltip {...defaultProps} />);

    const arrow = container.querySelector(".arrow");
    expect(arrow).not.toBeInTheDocument();
  });

  test("should have tooltipContainer class on wrapper element", () => {
    const { container } = render(<Tooltip {...defaultProps} />);

    const tooltipContainer = container.firstChild as HTMLElement;
    expect(tooltipContainer).toHaveClass("tooltipContainer");
  });

  test("should have tooltip class when visible", async () => {
    const user = userEvent.setup();
    const { container } = render(<Tooltip {...defaultProps} />);

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("tooltip");
  });

  test("should render multiple children elements", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip content="Tooltip text">
        <button>Button 1</button>
        <span>Span text</span>
      </Tooltip>,
    );

    expect(screen.getByText("Button 1")).toBeInTheDocument();
    expect(screen.getByText("Span text")).toBeInTheDocument();

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  test("should handle empty string content", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip content="">
        <button>Hover me</button>
      </Tooltip>,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    // O tooltip deve estar visível mesmo com conteúdo vazio
    const tooltip = container.querySelector(".tooltip");
    expect(tooltip).toBeInTheDocument();
  });

  test("should maintain tooltip visibility during rapid hover interactions", async () => {
    const user = userEvent.setup();
    const { container } = render(<Tooltip {...defaultProps} />);

    const tooltipContainer = container.firstChild as HTMLElement;

    // Hover e unhover múltiplas vezes
    await user.hover(tooltipContainer);
    expect(screen.getByText("Tooltip content")).toBeInTheDocument();

    await user.unhover(tooltipContainer);
    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();

    await user.hover(tooltipContainer);
    expect(screen.getByText("Tooltip content")).toBeInTheDocument();
  });

  test("should work with complex children structure", async () => {
    const user = userEvent.setup();
    const complexChildren = (
      <div>
        <img src="/icon.png" alt="icon" />
        <span>Complex content</span>
      </div>
    );

    const { container } = render(
      <Tooltip content="Tooltip for complex element">
        {complexChildren}
      </Tooltip>,
    );

    expect(screen.getByAltText("icon")).toBeInTheDocument();
    expect(screen.getByText("Complex content")).toBeInTheDocument();

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    expect(screen.getByText("Tooltip for complex element")).toBeInTheDocument();
  });

  test("should apply both tooltip and position classes when visible", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip {...defaultProps} position={TooltipPositions.BOTTOM} />,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    const tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("tooltip");
    expect(tooltip).toHaveClass("bottom");
  });

  test("should render with different content types consecutively", async () => {
    const user = userEvent.setup();
    const { rerender, container } = render(
      <Tooltip content="First content">
        <button>Hover me</button>
      </Tooltip>,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);
    expect(screen.getByText("First content")).toBeInTheDocument();

    await user.unhover(tooltipContainer);

    rerender(
      <Tooltip content="Second content">
        <button>Hover me</button>
      </Tooltip>,
    );

    await user.hover(tooltipContainer);
    expect(screen.getByText("Second content")).toBeInTheDocument();
    expect(screen.queryByText("First content")).not.toBeInTheDocument();
  });

  test("should change position dynamically", async () => {
    const user = userEvent.setup();
    const { rerender, container } = render(
      <Tooltip {...defaultProps} position={TooltipPositions.TOP} />,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    let tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("top");

    await user.unhover(tooltipContainer);

    rerender(<Tooltip {...defaultProps} position={TooltipPositions.LEFT} />);

    await user.hover(tooltipContainer);
    tooltip = screen.getByText("Tooltip content");
    expect(tooltip).toHaveClass("left");
    expect(tooltip).not.toHaveClass("top");
  });

  test("should render tooltip with numeric content", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tooltip content={42}>
        <button>Hover me</button>
      </Tooltip>,
    );

    const tooltipContainer = container.firstChild as HTMLElement;
    await user.hover(tooltipContainer);

    expect(screen.getByText("42")).toBeInTheDocument();
  });

  test("should handle children with onClick handlers correctly", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <Tooltip content="Click tooltip">
        <button onClick={handleClick}>Click me</button>
      </Tooltip>,
    );

    const button = screen.getByText("Click me");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should maintain tooltip state independent of children interactions", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    const { container } = render(
      <Tooltip content="Interactive tooltip">
        <button onClick={handleClick}>Interactive button</button>
      </Tooltip>,
    );

    const tooltipContainer = container.firstChild as HTMLElement;

    // Hover para mostrar tooltip
    await user.hover(tooltipContainer);
    expect(screen.getByText("Interactive tooltip")).toBeInTheDocument();

    // Clicar no botão não deve esconder o tooltip
    const button = screen.getByText("Interactive button");
    await user.click(button);

    expect(screen.getByText("Interactive tooltip")).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
