import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import Button from "../Button/Button";
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const RootModal = ({ children, isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableEles = modalRef.current.querySelectorAll<HTMLElement>(
      "button,[href],input,select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    const firstEle = focusableEles[0];
    const lastEle = focusableEles[focusableEles.length - 1];
    firstEle?.focus();
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEle) {
            e.preventDefault();
            lastEle.focus();
          }
        } else {
          if (document.activeElement === lastEle) {
            e.preventDefault();
            firstEle.focus();
          }
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target;
      console.log("first");
      if (!(target instanceof Node)) return;
      if (modalRef.current && !modalRef.current.contains(target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup when the component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const modalRoot = document.getElementById("root-modal");

  if (!isOpen) return null;

  return createPortal(
    <section
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      aria-hidden={!isOpen}
    >
      <div
        className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl flex flex-col gap-4"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </section>,
    modalRoot!
  );
};

export default RootModal;
