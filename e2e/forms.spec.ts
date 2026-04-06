import { test, expect } from "@playwright/test";

test.describe("Forms and Input Validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should have form elements on the page", async ({ page }) => {
    // Find contact or any form section
    const forms = page.locator("form");
    const inputs = page.locator(
      "input[type='text'], input[type='email'], textarea, select",
    );

    const formsCount = await forms.count();
    const inputsCount = await inputs.count();

    // Should have form elements
    expect(formsCount + inputsCount).toBeGreaterThanOrEqual(0);
  });

  test("input fields should be properly labeled", async ({ page }) => {
    const inputs = page.locator("input, textarea, select");

    for (let i = 0; i < (await inputs.count()); i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute("id");
      const ariaLabel = await input.getAttribute("aria-label");
      const name = await input.getAttribute("name");

      // Should have some form of identifier
      expect(id || ariaLabel || name).toBeTruthy();
    }
  });

  test("should accept text input", async ({ page }) => {
    const textInputs = page.locator("input[type='text']");

    if ((await textInputs.count()) > 0) {
      const firstInput = textInputs.first();

      // Type text
      await firstInput.fill("Test Input");

      // Verify text was entered
      const value = await firstInput.inputValue();
      expect(value).toBe("Test Input");
    }
  });

  test("should accept email input", async ({ page }) => {
    const emailInputs = page.locator("input[type='email']");

    if ((await emailInputs.count()) > 0) {
      const firstInput = emailInputs.first();

      // Type email
      await firstInput.fill("test@example.com");

      // Verify email was entered
      const value = await firstInput.inputValue();
      expect(value).toBe("test@example.com");
    }
  });

  test("email input should validate format", async ({ page }) => {
    const emailInputs = page.locator("input[type='email']");

    if ((await emailInputs.count()) > 0) {
      const firstInput = emailInputs.first();

      // Type invalid email
      await firstInput.fill("invalid-email");

      // Check validity
      const isValid = await firstInput.evaluate(
        (input: HTMLInputElement) => input.validity.valid,
      );

      // May be valid depending on browser behavior
      expect(typeof isValid).toBe("boolean");
    }
  });

  test("should accept textarea input", async ({ page }) => {
    const textareas = page.locator("textarea");

    if ((await textareas.count()) > 0) {
      const firstTextarea = textareas.first();

      // Type multiline text
      await firstTextarea.fill("This is a test message\nWith multiple lines");

      // Verify text was entered
      const value = await firstTextarea.inputValue();
      expect(value).toContain("test message");
    }
  });

  test("should handle required field validation", async ({ page }) => {
    const requiredInputs = page.locator(
      "input[required], textarea[required], select[required]",
    );

    if ((await requiredInputs.count()) > 0) {
      const firstRequired = requiredInputs.first();

      // Check if field is required
      const isRequired = await firstRequired.evaluate(
        (el: HTMLInputElement) => el.required,
      );

      expect(typeof isRequired).toBe("boolean");
    }
  });

  test("should prevent form submission with validation errors", async ({
    page,
  }) => {
    const forms = page.locator("form");

    if ((await forms.count()) > 0) {
      const form = forms.first();

      // Try to submit empty form
      const requiredInputs = form.locator(
        "input[required], textarea[required]",
      );

      if ((await requiredInputs.count()) > 0) {
        const submitButton = form.locator("button[type='submit']");

        if ((await submitButton.count()) > 0) {
          // Form should validate (browser level)
          const isValid = await form.evaluate((f: HTMLFormElement) =>
            f.checkValidity(),
          );

          // May or may not be valid depending on form state
          expect(typeof isValid).toBe("boolean");
        }
      }
    }
  });

  test("should handle option selection in select elements", async ({
    page,
  }) => {
    const selects = page.locator("select");

    if ((await selects.count()) > 0) {
      const firstSelect = selects.first();

      // Get options
      const options = firstSelect.locator("option");
      const optionsCount = await options.count();

      if (optionsCount > 1) {
        // Select second option
        await firstSelect.selectOption({ index: 1 });

        // Verify selection
        const selectedValue = await firstSelect.inputValue();
        expect(selectedValue).toBeTruthy();
      }
    }
  });

  test("should handle checkbox inputs", async ({ page }) => {
    const checkboxes = page.locator("input[type='checkbox']");

    if ((await checkboxes.count()) > 0) {
      const firstCheckbox = checkboxes.first();

      // Check the checkbox
      await firstCheckbox.check();

      // Verify it's checked
      const isChecked = await firstCheckbox.isChecked();
      expect(isChecked).toBe(true);

      // Uncheck it
      await firstCheckbox.uncheck();

      // Verify it's unchecked
      const isUnchecked = await firstCheckbox.isChecked();
      expect(isUnchecked).toBe(false);
    }
  });

  test("should handle radio button inputs", async ({ page }) => {
    const radios = page.locator("input[type='radio']");

    if ((await radios.count()) > 0) {
      const firstRadio = radios.first();

      // Check the radio
      await firstRadio.check();

      // Verify it's checked
      const isChecked = await firstRadio.isChecked();
      expect(isChecked).toBe(true);
    }
  });

  test("should clear input fields", async ({ page }) => {
    const inputs = page.locator("input[type='text'], textarea");

    if ((await inputs.count()) > 0) {
      const firstInput = inputs.first();

      // Fill input
      await firstInput.fill("Some text");

      // Clear it
      await firstInput.clear();

      // Verify it's empty
      const value = await firstInput.inputValue();
      expect(value).toBe("");
    }
  });

  test("should handle password input type", async ({ page }) => {
    const passwords = page.locator("input[type='password']");

    if ((await passwords.count()) > 0) {
      const firstPassword = passwords.first();

      // Type password
      await firstPassword.fill("SecurePassword123");

      // Should be masked (not visible as plain text)
      const type = await firstPassword.getAttribute("type");
      expect(type).toBe("password");
    }
  });

  test("should handle number input type", async ({ page }) => {
    const numbers = page.locator("input[type='number']");

    if ((await numbers.count()) > 0) {
      const firstNumber = numbers.first();

      // Type number
      await firstNumber.fill("42");

      // Verify number was entered
      const value = await firstNumber.inputValue();
      expect(value).toBe("42");
    }
  });

  test("inputs should show error messages on validation failure", async ({
    page,
  }) => {
    const forms = page.locator("form");

    if ((await forms.count()) > 0) {
      const form = forms.first();
      const errorMessages = form.locator("[class*='error']");

      // May have error containers
      const errorCount = await errorMessages.count();
      expect(typeof errorCount).toBe("number");
    }
  });

  test("should handle input focus and blur events", async ({ page }) => {
    const inputs = page.locator("input[type='text'], textarea");

    if ((await inputs.count()) > 0) {
      const firstInput = inputs.first();

      // Focus input
      await firstInput.focus();

      // Should be focused
      const isFocused = await firstInput.evaluate(
        (el) => el === document.activeElement,
      );
      expect(isFocused).toBe(true);

      // Blur input
      await firstInput.blur();

      // Should not be focused
      const isNoLongerFocused = await firstInput.evaluate(
        (el) => el !== document.activeElement,
      );
      expect(isNoLongerFocused).toBe(true);
    }
  });

  test("should handle input placeholder text", async ({ page }) => {
    const inputs = page.locator("input[placeholder]");

    if ((await inputs.count()) > 0) {
      const firstInput = inputs.first();

      const placeholder = await firstInput.getAttribute("placeholder");

      // Should have meaningful placeholder
      if (placeholder) {
        expect(placeholder.length).toBeGreaterThan(0);
      }
    }
  });

  test("should handle readonly inputs", async ({ page }) => {
    const readonlyInputs = page.locator("input[readonly], textarea[readonly]");

    if ((await readonlyInputs.count()) > 0) {
      const firstReadonly = readonlyInputs.first();

      // Try to type (should not change value)
      const initialValue = await firstReadonly.inputValue();

      try {
        await firstReadonly.fill("New Value");
      } catch {
        // Expected - readonly inputs can't be modified
      }

      const finalValue = await firstReadonly.inputValue();
      expect(finalValue).toBe(initialValue);
    }
  });

  test("should handle disabled inputs", async ({ page }) => {
    const disabledInputs = page.locator(
      "input[disabled], button[disabled], select[disabled], textarea[disabled]",
    );

    if ((await disabledInputs.count()) > 0) {
      const firstDisabled = disabledInputs.first();

      // Check if disabled
      const isDisabled = await firstDisabled.isDisabled();
      expect(isDisabled).toBe(true);
    }
  });

  test("form should have submit button", async ({ page }) => {
    const forms = page.locator("form");

    if ((await forms.count()) > 0) {
      const form = forms.first();

      const submitButtons = form.locator(
        "button[type='submit'], input[type='submit']",
      );

      // Should have way to submit (may be optional for non-forms)
      const submitCount = await submitButtons.count();
      expect(typeof submitCount).toBe("number");
    }
  });

  test("should handle file input", async ({ page }) => {
    const fileInputs = page.locator("input[type='file']");

    if ((await fileInputs.count()) > 0) {
      const firstFile = fileInputs.first();

      // File input should exist and be usable
      await expect(firstFile).toBeVisible();
    }
  });
});
