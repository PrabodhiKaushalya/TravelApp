import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Travel Map</Text>

      <Link href={{ pathname: '/details/[id]', params: { id: 'sigiriya' } }} style={styles.card}>
        <Text>View Sigiriya Details</Text>
      </Link>

      <Link href="/notification" style={styles.link}>
        <Text>🔔 Notifications</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 20, backgroundColor: '#e3f2fd', borderRadius: 10, marginVertical: 10 },
  link: { marginTop: 15, color: '#007bff', fontWeight: '600' }
});