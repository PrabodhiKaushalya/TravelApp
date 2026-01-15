import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* 1. මුලින්ම Splash Screen (index) */}
      <Stack.Screen name="index" /> 
      
      {/* 2. ඉන්පසු Onboarding */}
      <Stack.Screen name="onboarding" />
      
      {/* 3. Onboarding එකෙන් පසු Login */}
      <Stack.Screen name="login" />
      
      {/* 4. Login එකෙන් පසු Register (Signup) */}
      <Stack.Screen name="signup" />
      
      {/* 5. අවසානයේ ප්‍රධාන App එක (Tabs) */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}