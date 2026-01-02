import Input from "../../../../components/atoms/Input/Input";

const InputDocs = {
  name: "Input",
  description:
    "Standard text input with support for icons, validation, and styling.",
  props: [
    {
      name: "label",
      type: "string",
      default: "-",
      description: "Label above the input field.",
    },
    {
      name: "description",
      type: "string",
      default: "-",
      description: "Helper text below the input.",
    },
    {
      name: "error",
      type: "string | boolean",
      default: "false",
      description: "Error message or state.",
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "Sets required HTML attribute.",
    },
    {
      name: "withAsterisk",
      type: "boolean",
      default: "false",
      description: "Visually adds * next to label.",
    },
    {
      name: "size",
      type: `"xs" | "sm" | "md" | "lg" | "xl"`,
      default: `"md"`,
      description: "Input padding & font size.",
    },
    {
      name: "radius",
      type: `"none" | "sm" | "md" | "lg" | "xl"`,
      default: `"md"`,
      description: "Border-radius size.",
    },
    {
      name: "leftSection",
      type: "ReactNode",
      default: "-",
      description: "Addon/icon on left side.",
    },
    {
      name: "rightSection",
      type: "ReactNode",
      default: "-",
      description: "Addon/icon on right side.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Stretches input to container width.",
    },
  ],
  examples: [
    {
      title: "Basic Input",
      code: `<Input placeholder="Your name" />`,
      component: <Input placeholder="Your name" />,
    },
    {
      title: "With Label + Description",
      code: `<Input label="Email" description="We won't share it." placeholder="example@email.com" />`,
      component: (
        <Input
          label="Email"
          description="We won't share it."
          placeholder="example@email.com"
        />
      ),
    },
    {
      title: "Error State",
      code: `<Input label="Username" error="Already taken" placeholder="john_doe" />`,
      component: (
        <Input label="Username" error="Already taken" placeholder="john_doe" />
      ),
    },
  ],
};

export default InputDocs;
