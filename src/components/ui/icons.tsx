import { icons } from "lucide-react";
import { LucideProps } from "lucide-react";

type IconName = keyof typeof icons;

interface Icontype extends LucideProps {
  name: IconName;
}

export function Lucide({ name, ...props }: Icontype) {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    throw new Error(`Icon "${name}" not found`);
  }
  return <LucideIcon {...props} />;
}