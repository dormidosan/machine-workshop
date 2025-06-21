// DefaultButton.tsx
import { baseClasses, sizeStyles, variantStyles } from "@/components/buttons/buttonStyles";
import { ButtonBase } from "@/components/buttons/ButtonBase";

type Size = keyof typeof sizeStyles;

interface DefaultButtonProps extends React.ComponentProps<typeof ButtonBase> {
  size?: Size;
  className?: string;
}

export function DefaultButton({ size = "default", className = "", ...props }: DefaultButtonProps) {
  return (
    <ButtonBase
      className={`${baseClasses} ${variantStyles.default} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}

export function DestructiveButton({ size = "default", className = "", ...props }: DefaultButtonProps) {
  return (
    <ButtonBase
      className={`${baseClasses} ${variantStyles.destructive} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
export function OutlineButton({ size = "default", className = "", ...props }: DefaultButtonProps) {
  return (
    <ButtonBase
      className={`${baseClasses} ${variantStyles.outline} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
export function SecondaryButton({ size = "default", className = "", ...props }: DefaultButtonProps) {
  return (
    <ButtonBase
      className={`${baseClasses} ${variantStyles.secondary} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
export function GhostButton({ size = "default", className = "", ...props }: DefaultButtonProps) {
  return (
    <ButtonBase
      className={`${baseClasses} ${variantStyles.ghost} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}

export function LinkButton({ size = "default", className = "", ...props }: DefaultButtonProps) {
  return (
    <ButtonBase
      className={`${baseClasses} ${variantStyles.link} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
