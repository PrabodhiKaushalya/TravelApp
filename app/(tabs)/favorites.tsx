import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/theme';

const FAVORITE_PLACES = [
  { id: '1', name: 'Ella Nine Arch Bridge', location: 'Sri Lanka' },
  { id: '2', name: 'Santorini', location: 'Greece' },
];

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#24c26eff' }}>
      <Text style={styles.title}>Your Favorites</Text>
      
      <FlatList
        data={FAVORITE_PLACES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="heart" size={24} color={Colors.light.tint} />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#b92c2cff',
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3, // Shadow for Android
  },
  placeName: { fontSize: 18, fontWeight: '600' },
  locationText: { color: '#666' },
});