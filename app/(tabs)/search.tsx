import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search destinations..." />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchBar: { backgroundColor: '#eee', padding: 15, borderRadius: 25 }
});