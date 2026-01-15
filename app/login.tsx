import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button - Onboarding ekata yanna */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.replace('/onboarding')}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Sign in now</Text>
        <Text style={styles.subtitle}>Please sign in to continue our app</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        
        <TouchableOpacity onPress={() => router.push('/forgot-password')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={() => router.replace('/(tabs)/home')}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  backButton: { 
    width: 44, height: 44, borderRadius: 22, 
    backgroundColor: '#F7F7F9', justifyContent: 'center', 
    alignItems: 'center', marginTop: 10 
  },
  header: { alignItems: 'center', marginTop: 40 },
  title: { fontSize: 26, fontWeight: 'bold' },
  subtitle: { color: '#7D848D', marginTop: 10 },
  inputContainer: { marginTop: 40 },
  input: { backgroundColor: '#F7F7F9', padding: 18, borderRadius: 14, marginBottom: 20 },
  forgotText: { textAlign: 'right', color: '#007BFF', fontWeight: '600' },
  signInButton: { backgroundColor: '#007BFF', padding: 18, borderRadius: 16, alignItems: 'center', marginTop: 40 },
  signInButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  signUpLink: { color: '#007BFF', fontWeight: 'bold' }
});