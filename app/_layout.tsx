import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitleStyle: { fontWeight: 'bold' } }}>
      {/* The main tab group */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Individual pages outside the tabs */}
      <Stack.Screen name="details/[id]" options={{ title: 'Destination' }} />
      <Stack.Screen name="booking" options={{ presentation: 'modal', title: 'Book Your Trip' }} />
      <Stack.Screen name="map" options={{ title: 'Explore Map' }} />
      <Stack.Screen name="notifications" options={{ title: 'Notifications' }} />
    </Stack>
  );
}
