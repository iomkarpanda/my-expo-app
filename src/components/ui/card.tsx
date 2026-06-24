import { Text, View, type ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  title?: string;
}

export function Card({ title, children, className, ...props }: CardProps) {
  return (
    <View className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className ?? ''}`} {...props}>
      {title && (
        <Text className="text-xl font-bold text-gray-900 mb-4">
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}
