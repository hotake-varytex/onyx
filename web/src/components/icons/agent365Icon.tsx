import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const defaultTailwindCSS = "text-text-800 dark:text-text-100";

export const Agent365Icon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9998 0L10.8691 7.76944L27.9998 15.5389L45.1305 7.76944L27.9998 0ZM27.9998 40.4611L10.8691 48.2306L27.9998 56L45.1305 48.2306L27.9998 40.4611ZM48.2309 10.8691L56.0001 28.0003L48.2309 45.1314L40.4617 28.0003L48.2309 10.8691ZM15.5385 28.0001L7.76923 10.869L0 28.0001L7.76923 45.1313L15.5385 28.0001Z"
        fill="currentColor"
      />
    </svg>
  );
};

// For backward compatibility
export const OnyxIcon = Agent365Icon;
