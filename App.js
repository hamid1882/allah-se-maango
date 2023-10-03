import Swiper from "react-native-swiper";
import { StyleSheet, View, Text, Dimensions } from "react-native";

export default function App() {
  return (
    <Swiper showsPagination={true}>
      <View style={styles.container}>
        <Text>Hello WOrld</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello WOrld</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello WOrld</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello WOrld</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello WOrld</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
