import { View, Text, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Details() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Destination: {id}</Text>
      
      {/* Programmatic Link */}
      <Button 
        title="Go to Booking" 
        onPress={() => router.push('/booking')} 
      />
    </View>
  );
}