import { ActivityIndicator, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  title: string;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-indigo-600',
  secondary: 'bg-gray-200',
  outline: 'bg-transparent border border-gray-300',
  ghost: 'bg-transparent',
  danger: 'bg-red-600',
};

const variantTextStyles: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-gray-900',
  outline: 'text-gray-900',
  ghost: 'text-indigo-600',
  danger: 'text-white',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 rounded-md',
  md: 'px-4 py-2.5 rounded-lg',
  lg: 'px-6 py-3.5 rounded-xl',
};

export function Button({ variant = 'primary', size = 'md', loading, disabled, title, className, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      className={`${variantStyles[variant]} ${sizeStyles[size]} items-center justify-center flex-row gap-2 ${disabled || loading ? 'opacity-50' : ''} ${className ?? ''}`}
      activeOpacity={0.7}
      {...props}
    >
      {loading && <ActivityIndicator size="small" color={variant === 'primary' || variant === 'danger' ? 'white' : 'black'} />}
      <Text className={`${variantTextStyles[variant]} font-semibold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
