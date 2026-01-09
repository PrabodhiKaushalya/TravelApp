import { View, Text, FlatList } from 'react-native';

export default function NotificationsScreen() {
  const notes = [{ id: '1', msg: 'Your trip to Sigiriya is tomorrow!' }];
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList 
        data={notes}
        renderItem={({ item }) => <Text style={{ padding: 10, borderBottomWidth: 0.5 }}>{item.msg}</Text>}
      />
    </View>
  );
}