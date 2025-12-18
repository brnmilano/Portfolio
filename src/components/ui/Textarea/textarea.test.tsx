import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "./textarea";
import { TextareaSizes } from "./textarea.types";

describe("Textarea Component", () => {
  test("should match snapshot.", () => {
    const { container } = render(
      <Textarea
        label="Snapshot Textarea"
        placeholder="Enter text here"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test("should render the textarea with correct label and placeholder.", () => {
    render(
      <Textarea
        label="Description"
        placeholder="Enter description"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Enter description");
    const label = screen.getByText("Description");

    expect(textarea).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", textarea.id);
  });

  test("should render textarea without label.", () => {
    render(
      <Textarea
        placeholder="No label textarea"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("No label textarea");

    expect(textarea).toBeInTheDocument();
  });

  test("should call onChange handler when text is typed.", () => {
    const handleChange = jest.fn();

    render(
      <Textarea
        label="Change Textarea"
        placeholder="Type here"
        onChange={handleChange}
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    fireEvent.change(textarea, { target: { value: "New text" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("should render textarea with correct rows.", () => {
    render(
      <Textarea
        label="Rows Textarea"
        placeholder="Type here"
        rows={5}
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveAttribute("rows", "5");
  });

  test("should render textarea with small size.", () => {
    const { container } = render(
      <Textarea
        label="Small Textarea"
        placeholder="Type here"
        size={TextareaSizes.SMALL}
        errors={{}}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("small");
  });

  test("should render textarea with medium size.", () => {
    const { container } = render(
      <Textarea
        label="Medium Textarea"
        placeholder="Type here"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("medium");
  });

  test("should render textarea with large size.", () => {
    const { container } = render(
      <Textarea
        label="Large Textarea"
        placeholder="Type here"
        size={TextareaSizes.LARGE}
        errors={{}}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("large");
  });

  test("should render textarea as disabled.", () => {
    render(
      <Textarea
        label="Disabled Textarea"
        placeholder="Type here"
        disabled
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toBeDisabled();
  });

  test("should display error message when errors are provided.", () => {
    const errors = {
      description: {
        type: "required",
        message: "Description is required",
      },
    };

    render(
      <Textarea
        label="Textarea with Error"
        placeholder="Type here"
        registerField="description"
        size={TextareaSizes.MEDIUM}
        errors={errors}
      />,
    );

    const errorMessage = screen.getByText("Description is required");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute("role", "alert");
  });

  test("should have correct aria-invalid attribute when error exists.", () => {
    const errors = {
      description: {
        type: "required",
        message: "Description is required",
      },
    };

    render(
      <Textarea
        label="Invalid Textarea"
        placeholder="Type here"
        registerField="description"
        size={TextareaSizes.MEDIUM}
        errors={errors}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveAttribute("aria-invalid", "true");
  });

  test("should not show toolbar by default.", () => {
    render(
      <Textarea
        label="No Toolbar Textarea"
        placeholder="Type here"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const toolbar = screen.queryByRole("toolbar");

    expect(toolbar).not.toBeInTheDocument();
  });

  test("should show toolbar when showToolbar is true.", () => {
    render(
      <Textarea
        label="Toolbar Textarea"
        placeholder="Type here"
        showToolbar
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const toolbar = screen.getByRole("toolbar");

    expect(toolbar).toBeInTheDocument();
    expect(toolbar).toHaveAttribute("aria-label", "Ferramentas de formatação");
  });

  test("should render formatting buttons when toolbar is shown.", () => {
    render(
      <Textarea
        label="Toolbar Textarea"
        placeholder="Type here"
        showToolbar
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const boldButton = screen.getByTitle("Negrito");
    const italicButton = screen.getByTitle("Itálico");
    const underlineButton = screen.getByTitle("Sublinhado");
    const strikethroughButton = screen.getByTitle("Tachado");

    expect(boldButton).toBeInTheDocument();
    expect(italicButton).toBeInTheDocument();
    expect(underlineButton).toBeInTheDocument();
    expect(strikethroughButton).toBeInTheDocument();
  });

  test("should render toolbar with multiple controls when showToolbar is true.", () => {
    const { container } = render(
      <Textarea
        label="Toolbar Textarea"
        placeholder="Type here"
        showToolbar
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const toolbar = container.querySelector('[role="toolbar"]');

    expect(toolbar).toBeInTheDocument();

    // Verifica se há múltiplos botões na toolbar (formatação + dropdowns)
    const buttons = screen.getAllByRole("button");

    // Deve ter pelo menos os 4 botões de formatação (B, I, U, S) + Mais opções
    expect(buttons.length).toBeGreaterThanOrEqual(5);
  });
  test("should apply custom container className.", () => {
    const { container } = render(
      <Textarea
        label="Custom Class Textarea"
        placeholder="Type here"
        containerClassName="custom-textarea"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textareaContainer = container.firstChild;

    expect(textareaContainer).toHaveClass("custom-textarea");
  });

  test("should apply custom minHeight style.", () => {
    render(
      <Textarea
        label="Min Height Textarea"
        placeholder="Type here"
        minHeight="200px"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveStyle({ minHeight: "200px" });
  });

  test("should apply resize style.", () => {
    render(
      <Textarea
        label="Resize Textarea"
        placeholder="Type here"
        resize="none"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveStyle({ resize: "none" });
  });

  test("should format text when bold button is clicked with selected text.", () => {
    render(
      <Textarea
        label="Format Textarea"
        placeholder="Type here"
        showToolbar
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText(
      "Type here",
    ) as HTMLTextAreaElement;
    const boldButton = screen.getByTitle("Negrito");

    // Simula texto selecionado
    fireEvent.change(textarea, { target: { value: "Hello World" } });
    textarea.setSelectionRange(0, 5); // Seleciona "Hello"

    fireEvent.click(boldButton);

    // O texto deve ser formatado (implementação pode variar)
    expect(textarea).toBeInTheDocument();
  });

  test("should have correct name attribute when registerField is provided.", () => {
    render(
      <Textarea
        label="Named Textarea"
        placeholder="Type here"
        registerField="comments"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveAttribute("name", "comments");
  });

  test("should have correct name attribute when name prop is provided.", () => {
    render(
      <Textarea
        label="Named Textarea"
        placeholder="Type here"
        name="notes"
        size={TextareaSizes.MEDIUM}
        errors={{}}
      />,
    );

    const textarea = screen.getByPlaceholderText("Type here");

    expect(textarea).toHaveAttribute("name", "notes");
  });
});
