'use client';

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type HTMLProps,
  type InputHTMLAttributes,
  type ReactNode,
  type RefObject,
  type SelectHTMLAttributes,
} from "react";
import { cn } from "@src/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface FloatingLabelTextInputProps
  extends Omit<HTMLProps<HTMLInputElement | HTMLSelectElement>, "ref"> {
  id: string;
  type?: string;
  label: string;
  className?: string;
  isFocused?: boolean;
  textarea?: boolean;
  icon?: ReactNode; // Right-side icon
  leftIcon?: ReactNode; // Left-side icon
  enablePasswordToggle?: boolean;
  error?: string;
  children?: ReactNode; // For <select> options
}

const FloatingLabelTextInput = forwardRef<
  HTMLInputElement | HTMLSelectElement,
  FloatingLabelTextInputProps
>(
  (
    {
      type = "text",
      id,
      label,
      className,
      isFocused = false,
      textarea = false,
      children,
      icon,
      leftIcon,
      enablePasswordToggle,
      error,
      ...props
    },
    ref
  ) => {
    const localRef = useRef<HTMLInputElement | HTMLSelectElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    const isSelect = type === "select";
    const isPassword = type === "password";

    useImperativeHandle(ref, () => localRef.current!);

    useEffect(() => {
      if (isFocused && localRef.current) {
        localRef.current.focus();
      }
    }, [isFocused]);

    return (
      <div className="relative w-full">
        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {leftIcon}
          </div>
        )}

        {/* Input / Textarea / Select */}
        {textarea ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            ref={localRef as unknown as React.RefObject<HTMLTextAreaElement>}
            id={id}
            className={cn(
              "peer block w-full rounded-lg border border-gray-300 bg-white px-3.5 pt-5 pb-3.5 text-sm text-gray-700 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
              leftIcon && "pl-10",
              icon && "pr-10",
              className
            )}
            placeholder=" "
          />
        ) : isSelect ? (
          <select
            {...(props as SelectHTMLAttributes<HTMLSelectElement>)}
            ref={localRef as RefObject<HTMLSelectElement>}
            id={id}
            className={cn(
              "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-3.5 pt-5 pb-3.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500",
              leftIcon && "pl-10",
              icon && "pr-10",
              className
            )}
          >
            {children}
          </select>
        ) : (
          <input
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
            ref={localRef as RefObject<HTMLInputElement>}
            type={
              isPassword && enablePasswordToggle
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            id={id}
            className={cn(
              "peer block w-full rounded-lg border border-gray-300 bg-white px-3.5 pt-5 pb-3.5 text-sm text-gray-700 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
              leftIcon && "pl-10",
              (icon || enablePasswordToggle) && "pr-10",
              className
            )}
            placeholder=" "
          />
        )}

        {/* Right Icon or Password Toggle */}
        {enablePasswordToggle && isPassword ? (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : (
          icon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )
        )}

        {/* Floating Label */}
        <label
          htmlFor={id}
          onClick={() => localRef.current?.focus()}
          className="peer-focus:text-blue-500 absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 cursor-text bg-white px-2 text-sm text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:font-medium"
        >
          {label}
        </label>

        {/* Error Message */}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FloatingLabelTextInput.displayName = "FloatingLabelTextInput";
export default FloatingLabelTextInput;
