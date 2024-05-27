import { Image, StyleSheet, View,Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={styles.titleContainer}> Petiano so sofre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize:30,
  },

});
