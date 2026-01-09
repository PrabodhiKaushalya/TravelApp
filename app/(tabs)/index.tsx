import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Travel App</Text>

      {/* Link to a Dynamic Page (Details) */}
      <Link href="/details/[id]/sigiriya" style={styles.card}>
        <Text>View Sigiriya Details</Text>
      </Link>

      {/* Link to Map Page */}
      <Link href="/map" style={styles.Link}>
        <Text>📍 View Map</Text>
      </Link>

      {/* Link to Notifications */}
      <Link href="/notification" style={styles.Link}>
        <Text>🔔 Notifications</Text>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({

  container:{
     flex: 1,
     padding: 20 },

  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 },

  card: { padding: 20, backgroundColor: '#e3f2fd', borderRadius: 10, marginVertical: 10 },

  Link: { marginTop: 15, color: '#007bff', fontWeight: '600' }
});