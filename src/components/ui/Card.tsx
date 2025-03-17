import { ReactNode } from 'react';
import { shadows } from '../../utils/colors';

interface CardProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  hoverEffect?: boolean;
  padding?: boolean;
}

const Card = ({
  children,
  className = '',
  bordered = false,
  hoverEffect = false,
  padding = true,
}: CardProps) => {
  const baseClasses = 'bg-[#1E1E1E] rounded-lg overflow-hidden';
  const borderClass = bordered ? 'border border-[#333333]' : '';
  const paddingClass = padding ? 'p-4 md:p-6' : '';
  const hoverClass = hoverEffect
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'
    : '';

  return (
    <div
      className={`${baseClasses} ${borderClass} ${paddingClass} ${hoverClass} ${className}`}
      style={{ boxShadow: shadows.medium }}
    >
      {children}
    </div>
  );
};

export default Card;
