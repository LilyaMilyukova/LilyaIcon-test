import * as LucideIcons from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

const iconVariants = tv({
  base: 'shrink-0 transition-colors',
  variants: {
    size: {
      xs: 'size-3.5',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-8',
    },
    color: {
      primary: 'text-blue-600',
      error: 'text-red-600',
      success: 'text-green-600',
      muted: 'text-gray-400',
      current: 'text-current',
    },
  },
  defaultVariants: {
    color: 'current',
  },
});

export type IconName = {
  [K in keyof typeof LucideIcons]: (typeof LucideIcons)[K] extends LucideIcons.LucideIcon
    ? K
    : never;
}[keyof typeof LucideIcons];

export interface IconProps extends VariantProps<typeof iconVariants> {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  customSize?: number;
}

export const Icon = ({ name, size = 'sm', color, className, strokeWidth, customSize }: IconProps) => {
  const IconComponent = LucideIcons[name];

  return (
    <IconComponent
      size={customSize}
      strokeWidth={strokeWidth}
      className={iconVariants({
        size: customSize === undefined ? size : undefined,
        color,
        className,
      })}
    />
  );
};
