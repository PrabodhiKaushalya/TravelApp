import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CheckEmailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modalContent}>
        <View style={styles.iconContainer}>
          <Ionicons name="mail" size={40} color="#fff" />
        </View>
        
        <Text style={styles.title}>Check your email</Text>
        <Text style={styles.subtitle}>
          We have sent password recovery instructions to your email
        </Text>

        <TouchableOpacity 
          style={styles.backToLoginBtn}
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.btnText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgba(0,0,0,0.05)', justifyContent: 'center', padding: 20 },
  modalContent: { 
    backgroundColor: '#fff', 
    borderRadius: 24, 
    padding: 30, 
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  iconContainer: { 
    width: 80, height: 80, borderRadius: 40, 
    backgroundColor: '#007BFF', justifyContent: 'center', 
    alignItems: 'center', marginBottom: 20 
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1B1E28', marginBottom: 10 },
  subtitle: { color: '#7D848D', textAlign: 'center', fontSize: 16, lineHeight: 22 },
  backToLoginBtn: { marginTop: 30, backgroundColor: '#007BFF', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 12 },
  btnText: { color: '#fff', fontWeight: 'bold' }
});