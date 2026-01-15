 import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();
  // පිටු 2ක් මාරු කිරීමට අවශ්‍ය නම් පමණක් currentIndex භාවිතා වේ
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Get Started බොත්තම එබූ විට සෘජුවම Login වෙත යාම
  const handleGetStarted = () => {
    router.replace('/login');
  };

  // 2. Skip බොත්තම එබූ විට සෘජුවම Login වෙත යාම
  const handleSkip = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* පින්තූරය */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1' }} 
        style={styles.image} 
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Life is short and the world is wide</Text>
        <Text style={styles.description}>
          To get the best of your adventure you just need to leave and go where you like. We are waiting for you.
        </Text>

        {/* Indicator Dots (නිශ්චලව තබා ඇත) */}
        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity onPress={handleSkip} style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { 
    width: '100%', 
    height: '55%', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  content: { padding: 30, alignItems: 'center' },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 15 
  },
  description: { 
    fontSize: 14, 
    color: '#7D848D', 
    textAlign: 'center', 
    marginBottom: 25 
  },
  dotsRow: { flexDirection: 'row', marginBottom: 30 },
  dot: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: '#CAEAFF', 
    marginHorizontal: 4 
  },
  activeDot: { width: 25, backgroundColor: '#007BFF' },
  button: { 
    backgroundColor: '#007BFF', 
    width: '100%', 
    padding: 18, 
    borderRadius: 16, 
    alignItems: 'center' 
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  skipContainer: { marginTop: 20 },
  skipText: { color: '#7D848D', fontSize: 16, fontWeight: '500' }
});