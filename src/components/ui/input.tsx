import { useState } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View className="gap-1.5">
      {label && (
        <Text className="text-sm font-medium text-gray-700">
          {label}
        </Text>
      )}
      <TextInput
        className={`border rounded-lg px-4 py-2.5 text-base text-gray-900 bg-white ${focused ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-gray-300'} ${error ? 'border-red-500' : ''} ${className ?? ''}`}
        placeholderTextColor="#9ca3af"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {error && (
        <Text className="text-sm text-red-500">
          {error}
        </Text>
      )}
    </View>
  );
}
