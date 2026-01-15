import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
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
        <Text style={styles.title}>Sign up now</Text>
        <Text style={styles.subtitle}>Please fill the details and create account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={() => router.replace('/login')}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.signInLink}>Sign in</Text>
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
  signUpButton: { backgroundColor: '#007BFF', padding: 18, borderRadius: 16, alignItems: 'center', marginTop: 20 },
  signUpButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  signInLink: { color: '#007BFF', fontWeight: 'bold' }
});