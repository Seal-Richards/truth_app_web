'use client';

import { Button as ShadcnButton } from "@src/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@src/lib/utils";
import React from "react";

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  text?: string;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconSize?: number; // 👈 New prop
  className?: string;
}

const Button = ({
  text,
  loading,
  leftIcon,
  rightIcon,
  iconSize = 32, // 👈 Default fallback size
  className,
  children,
  size,
  ...props
}: ButtonProps & { size?: "icon" | "default" | "sm" | "lg" }) => {
  return (
    <ShadcnButton
      {...props}
      size={size}
      className={cn(
        "flex items-center justify-center gap-2 rounded-md",
        size === "icon" && "p-3", // 👈 Custom padding for icon buttons
        className
      )}
      disabled={loading || props.disabled}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={iconSize} />
      ) : (
        leftIcon
      )}

      {text || children}

      {!loading && rightIcon}
    </ShadcnButton>
  );
};

export default Button;
