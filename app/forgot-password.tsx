import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button to Login */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.subtitle}>Enter your email account to reset your password</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="www.uihut@gmail.com" 
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity 
        style={styles.resetButton} 
        onPress={() => router.push('/check-email')}
      >
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
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
  title: { fontSize: 26, fontWeight: 'bold', color: '#1B1E28' },
  subtitle: { color: '#7D848D', marginTop: 10, fontSize: 16, textAlign: 'center', paddingHorizontal: 20 },
  inputContainer: { marginTop: 40 },
  input: { 
    backgroundColor: '#F7F7F9', padding: 18, 
    borderRadius: 14, marginBottom: 20, fontSize: 16 
  },
  resetButton: { 
    backgroundColor: '#007BFF', padding: 18, 
    borderRadius: 16, alignItems: 'center', marginTop: 20 
  },
  resetButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});