import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DESTINATIONS = [
  { id: '1', name: 'Niladri Reservoir', location: 'Tekergat, Sunamganj', rating: 4.7, price: 59, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
  { id: '2', name: 'Darma Valley', location: 'Darma, India', rating: 4.8, price: 75, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.userSection}>
            <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
            <Text style={styles.userName}>Leonardo</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.mainTitle}>Explore the{"\n"}<Text style={styles.orangeText}>Beautiful world!</Text></Text>
      </View>

      {/* Categories Row */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Destination</Text>
        <TouchableOpacity><Text style={styles.viewAll}>View all</Text></TouchableOpacity>
      </View>

      {/* Destination Cards */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DESTINATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => router.push({ pathname: '/details/[id]', params: { id: item.id } })}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <TouchableOpacity style={styles.bookmarkIcon}>
              <Ionicons name="bookmark-outline" size={18} color="white" />
            </TouchableOpacity>
            <View style={styles.cardInfo}>
              <Text style={styles.placeName}>{item.name}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={14} color="#7D848D" />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color="#FFD336" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { marginTop: 40 },
  profileRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  userSection: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F7F9', padding: 8, borderRadius: 25 },
  avatar: { width: 35, height: 35, borderRadius: 17.5 },
  userName: { marginLeft: 10, fontWeight: '600' },
  notificationIcon: { backgroundColor: '#F7F7F9', padding: 10, borderRadius: 25 },
  mainTitle: { fontSize: 32, fontWeight: 'bold', marginTop: 25, color: '#1B1E28' },
  orangeText: { color: '#FF7029' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold' },
  viewAll: { color: '#007BFF' },
  card: { width: 240, marginRight: 20, backgroundColor: '#fff', borderRadius: 20, padding: 12, elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  cardImage: { width: '100%', height: 260, borderRadius: 18 },
  bookmarkIcon: { position: 'absolute', top: 25, right: 25, backgroundColor: 'rgba(0,0,0,0.3)', padding: 8, borderRadius: 20 },
  cardInfo: { marginTop: 10 },
  placeName: { fontSize: 18, fontWeight: 'bold' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  locationText: { color: '#7D848D', marginLeft: 5, fontSize: 13 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  ratingText: { marginLeft: 5, fontWeight: '600' }
});