import Button from "../../../../components/atoms/Button/Button";

export const ButtonDocs = {
  name: "Button",
  description: "The Button component triggers actions in your UI.",
  props: [
    {
      name: "variant",
      type: `"filled" | "outline" | "light" | "subtle"`,
      default: `"filled"`,
      description: "Visual style of the button.",
    },
    {
      name: "size",
      type: `"xs" | "sm" | "md" | "lg" | "xl"`,
      default: `"md"`,
      description: "Button size.",
    },
    {
      name: "fullWidth",
      type: `boolean`,
      default: `false`,
      description: "Stretch to parent width.",
    },
    {
      name: "loading",
      type: `boolean`,
      default: `false`,
      description: "Show loading state.",
    },
    {
      name: "leftSection",
      type: `ReactNode`,
      default: `-`,
      description: "Element before content.",
    },
    {
      name: "rightSection",
      type: `ReactNode`,
      default: `-`,
      description: "Element after content.",
    },
  ],
  examples: [
    {
      title: "Default",
      code: `<Button>Click me</Button>`,
      component: <Button>Click me</Button>,
    },
    {
      title: "Variants",
      code: `<Button variant="outline">Outline</Button>`,
      component: <Button variant="outline">Outline</Button>,
    },
    {
      title: "With icon",
      code: `<Button leftSection="⭐">Star</Button>`,
      component: <Button leftSection="⭐">Star</Button>,
    },
  ],
};
