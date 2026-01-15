import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // තත්පර 3කට (3000ms) පසු Onboarding පිටුවට යන්න
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b' }} 
        style={styles.logo} 
      />
      <Text style={styles.appName}>Travenor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#007BFF', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  appName: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
});