import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge("max-w-8xl mx-auto px-20", className)}>
      {children}
    </div>
  );
};
