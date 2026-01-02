import Select from "../../../../components/atoms/Select/Select";

const SelectDocs = {
  name: "Select",
  description: "Accessible native dropdown select with label and validation.",
  props: [
    {
      name: "label",
      type: "string",
      default: "-",
      description: "Label above the select.",
    },
    {
      name: "description",
      type: "string",
      default: "-",
      description: "Helper text below the select.",
    },
    {
      name: "error",
      type: "string | boolean",
      default: "false",
      description: "Error state or message.",
    },
    {
      name: "options",
      type: `{ label: string; value: string | number }[]`,
      default: "-",
      description: "List of selectable options.",
    },
    {
      name: "size",
      type: `"xs" | "sm" | "md" | "lg" | "xl"`,
      default: `"md"`,
      description: "Visual size of the field.",
    },
    {
      name: "radius",
      type: `"none" | "sm" | "md" | "lg" | "xl"`,
      default: `"md"`,
      description: "Corner roundness.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Make select fill its container.",
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
      description: "Sets required field.",
    },
    {
      name: "withAsterisk",
      type: "boolean",
      default: "false",
      description: "Adds * next to label if required.",
    },
  ],
  examples: [
    {
      title: "Basic Select",
      code: `<Select options={[{ label: "One", value: 1 }, { label: "Two", value: 2 }]} />`,
      component: (
        <Select
          options={[
            { label: "One", value: 1 },
            { label: "Two", value: 2 },
          ]}
        />
      ),
    },
    {
      title: "With Label",
      code: `<Select label="Fruit" options={[{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }]} />`,
      component: (
        <Select
          label="Fruit"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
          ]}
        />
      ),
    },
    {
      title: "Error State",
      code: `<Select label="Pick one" error="Required" options={[]} />`,
      component: <Select label="Pick one" error="Required" options={[]} />,
    },
  ],
};

export default SelectDocs;
