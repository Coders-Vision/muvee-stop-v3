"use client"; // Making sure, this is a Client Component
import React, { use, useRef, useState, type JSX } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

//Hook Type
type useModalType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  close: () => void;
};

// Hook
const useModal = (): useModalType => {
  const [open, setOpen] = useState(false);
  const handleOnHide = () => {
    setOpen(false);
  };
  return {
    open,
    setOpen,
    close: handleOnHide,
  };
};

// Content For Modal
type ModalContent = {
  title?: string;
  content: string | JSX.Element;
  showModalControls?: boolean; // If showModalControls is set to false then use hideCustomModal func. from Context Props to manaully close the modal.
};

//Context Type
type ModalContextProps = {
  showModal: (content: ModalContent) => Promise<boolean>;
  hideModal: () => void;
};

//Context
export const ModalContext = React.createContext<ModalContextProps>({
  showModal: (content: ModalContent) => new Promise(() => false),
  hideModal: () => {},
});

// React Chiildren
type Props = {
  children: React.ReactNode;
};

function ModalProvider({ children }: Props) {
  const resolver = useRef<Function>(undefined);

  const { setOpen, open, close } = useModal();
  const [content, setContent] = useState<ModalContent | null>();

  const showModal = ({
    title,
    content,
    showModalControls,
  }: ModalContent): Promise<boolean> => {
    setContent({
      title,
      content,
      showModalControls,
    });
    setOpen(true);
    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const onContinue = () => {
    resolver.current && resolver.current(true);
    close();
  };

  const onCancel = () => {
    resolver.current && resolver.current(false);
    close();
  };

  return (
    (<ModalContext value={{ showModal, hideModal: close }}>
      {children}
      {/* // Your headless ui component for Modal goes here... */}
      {content && (
        <Dialog open={open} onOpenChange={onCancel}  modal>
          <DialogContent className="sm:max-w-[425px] ">
            {content?.title && (
              <DialogHeader>
                <DialogTitle>{content.title}</DialogTitle>
                {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
              </DialogHeader>
            )}

            {content?.content}
            {content?.showModalControls && (
              <DialogFooter className="flex items-center justify-end w-full pt-6 space-x-2">
                <Button onClick={onContinue}>Contnue</Button>
                <Button onClick={onCancel}>Cancel</Button>
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      )}
    </ModalContext>)
  );
}

export const useModalContext = (): ModalContextProps =>
  use(ModalContext);

export default ModalProvider;
