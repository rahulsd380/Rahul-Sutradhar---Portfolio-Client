import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  label: string | ReactNode;
  showIcon?: boolean;
  href?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  isDisabled = false,
  type = "button",
  label,
  showIcon = true,
  href,
  className,
}) => {
  const baseClasses =
    "rounded-lg shadow-button px-7 py-2.5 font-semibold font-Inter flex items-center gap-2 w-fit transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:scale-105";

  const variantClasses =
    variant === "primary"
      ? "bg-primary-10 border border-primary-15 text-white"
      : "bg-white border border-white text-neutral-15";

  const combinedClasses = twMerge(baseClasses, variantClasses, className);

  const content = (
    <>
      {label}
      {showIcon && <RxArrowTopRight className="text-xl font-extrabold" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

export default Button;
