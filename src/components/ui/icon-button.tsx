
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
import { Button } from "./button";

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

function IconButton({ icon, onClick, className }: IconButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </Button>
  );
}

export default IconButton;
