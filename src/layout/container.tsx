import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
// lg:max-w-400
// mx-auto max-w-7xl 
function Container({ children, className }: ContainerProps) {
  return <div className={cn("lg:container", className)}>{children}</div>;
}

export default Container;
