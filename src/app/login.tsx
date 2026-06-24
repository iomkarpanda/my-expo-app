import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input } from '@/components/ui';
import { useLogin } from '@/hooks/use-auth';

interface LoginScreenProps {
  onNavigateSignup: () => void;
}

export default function LoginScreen({ onNavigateSignup }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [login, { loading, error }] = useLogin();

  function validate() {
    const e: typeof errors = {};
    if (!email.trim()) e.email = 'Email is required';
    if (!password) e.password = 'Password is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleLogin() {
    if (!validate()) return;
    try {
      await login({ variables: { email: email.trim(), password } });
    } catch {
      // error handled via Apollo error
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="mb-10 items-center">
            <Text className="text-3xl font-bold text-gray-900">Welcome Back</Text>
            <Text className="text-gray-500 mt-2">Sign in to your account</Text>
          </View>

          <View className="gap-4">
            <Input
              label="Email"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              error={errors.password}
            />

            {error && (
              <Text className="text-red-500 text-sm text-center">
                {error.message}
              </Text>
            )}

            <Button
              title="Sign In"
              loading={loading}
              onPress={handleLogin}
              size="lg"
            />

            <View className="flex-row justify-center mt-4">
              <Text className="text-gray-500">Don't have an account? </Text>
              <Text className="text-indigo-600 font-semibold" onPress={onNavigateSignup}>
                Sign Up
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
