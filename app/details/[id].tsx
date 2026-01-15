import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Image & Back Button */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }} style={styles.mainImage} />
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <TouchableOpacity style={styles.bookmarkBtn}>
            <Ionicons name="bookmark-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={styles.infoBox}>
          <View style={styles.dragBar} />
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>Niladri Reservoir</Text>
              <Text style={styles.location}>Tekergat, Sunamganj</Text>
            </View>
            <Image source={{ uri: 'https://i.pravatar.cc/50' }} style={styles.smallAvatar} />
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}><Ionicons name="location-outline" size={16} color="#7D848D" /><Text> Tekergat</Text></View>
            <View style={styles.stat}><Ionicons name="star" size={16} color="#FFD336" /><Text> 4.7 (2498)</Text></View>
            <Text style={styles.priceText}>$59<Text style={styles.perPerson}>/Person</Text></Text>
          </View>

          <Text style={styles.aboutTitle}>About Destination</Text>
          <Text style={styles.description}>
            You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended hotel rooms, transportation... <Text style={styles.readMore}>Read More</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Book Now Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookBtnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1, 
               backgroundColor: '#fff' },

  imageContainer: { 
                   height: 400, 
                   position: 'relative' },

  mainImage: { 
               width: '100%', 
               height: '100%',
               borderBottomLeftRadius: 30, 
               borderBottomRightRadius: 30 },


  backBtn: { 
            position: 'absolute', 
            top: 50, left: 20, 
            backgroundColor: 'rgba(0,0,0,0.3)', 
            padding: 10, 
            borderRadius: 25 },

  headerTitle: 
              { position: 'absolute', 
                top: 55, 
                alignSelf: 'center', 
                color: '#fff', 
                fontSize: 18, 
                fontWeight: 'bold' },

  bookmarkBtn: { 
               position: 'absolute', 
               top: 50, 
               right: 20, 
               backgroundColor: 'rgba(0,0,0,0.3)', 
               padding: 10, 
               borderRadius: 25 },

  infoBox: { 
             padding: 25, 
             backgroundColor: '#fff', 
             marginTop: -30, 
             borderTopLeftRadius: 30, 
             borderTopRightRadius: 30 },

  dragBar: { 
             width: 40, 
             height: 5, 
             backgroundColor: '#E3E3E3', 
             alignSelf: 'center', 
             borderRadius: 5, 
             marginBottom: 20 },

  titleRow: { 
             flexDirection: 'row', 
             justifyContent: 'space-between', 
             alignItems: 'center' },

  title: { 
             fontSize: 24, 
             fontWeight: 'bold' },

  location: { 
             color: '#7D848D', 
             marginTop: 5 },

  smallAvatar: { 
                 width: 40, 
                 height: 40, 
                 borderRadius: 20 },

  statsRow: { 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginTop: 20, 
            justifyContent: 'space-between' },

  stat: { 
            flexDirection: 'row', 
            alignItems: 'center' },

  priceText: { 
              fontSize: 18, 
              fontWeight: 'bold', 
              color: '#007BFF' },

  perPerson: { 
             color: '#7D848D', 
             fontWeight: 'normal', 
             fontSize: 12 },

  aboutTitle: { 
                fontSize: 18, 
                fontWeight: 'bold', 
                marginTop: 25 },

  description: { 
                color: '#7D848D', 
                marginTop: 10, 
                lineHeight: 22 },

  readMore: { 
              color: '#FF7029', 
              fontWeight: 'bold' },

  footer: { 
           padding: 20, 
           borderTopWidth: 1, 
           borderColor: '#F7F7F9' },

  bookBtn: { 
             backgroundColor: '#007BFF', 
             padding: 18, 
             borderRadius: 16, 
             alignItems: 'center' },

  bookBtnText: { 
                 color: '#fff', 
                 fontSize: 18, 
                 fontWeight: 'bold' }

                 
});