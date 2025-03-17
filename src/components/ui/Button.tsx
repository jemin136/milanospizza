import { ButtonHTMLAttributes, ReactNode } from 'react';
import { colors } from '../../utils/colors';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 flex items-center justify-center';

  const variantStyles = {
    primary: `bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] text-white hover:brightness-110 active:brightness-90 shadow-md hover:shadow-lg`,
    secondary: `bg-[${colors.bgSecondary}] text-[${colors.textPrimary}] border border-[${colors.border}] hover:bg-[${colors.bgPrimary}]`,
    outline: `bg-transparent border-2 border-[${colors.primary}] text-[${colors.primary}] hover:bg-[${colors.primary}] hover:text-white`,
    text: `bg-transparent text-[${colors.primary}] hover:bg-opacity-10 hover:bg-[${colors.primary}]`,
  };

  const sizeStyles = {
    sm: 'text-sm py-2 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
