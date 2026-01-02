// docs/components/Modal.docs.tsx
import { useState } from "react";
import Modal from "../../../../components/atoms/Modal/Modal";

const ModalDocs = {
  name: "Modal",
  description:
    "A dialog component that appears over the app content. Supports keyboard accessibility, focus trap, and scroll lock.",
  props: [
    {
      name: "isOpen",
      type: "boolean",
      default: "false",
      description: "Controls whether the modal is open.",
    },
    {
      name: "onClose",
      type: "() => void",
      default: "-",
      description: "Callback when the modal requests to close.",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Modal content.",
    },
  ],
  examples: [
    {
      title: "Basic Modal",
      code: `
function Example() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <button onClick={() => setOpened(true)}>Open Modal</button>
      <Modal isOpen={opened} onClose={() => setOpened(false)}>
        <p>Hello from modal!</p>
      </Modal>
    </>
  );
}
      `.trim(),
      component: (() => {
        const Example = () => {
          const [opened, setOpened] = useState(false);
          return (
            <>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setOpened(true)}
              >
                Open Modal
              </button>
              <Modal isOpen={opened} onClose={() => setOpened(false)}>
                <h2 className="text-xl font-bold mb-2">Hello</h2>
                <p className="mb-4">This is a basic modal dialog.</p>
              </Modal>
            </>
          );
        };
        return <Example />;
      })(),
    },
  ],
};

export default ModalDocs;
