import Swiper from "react-native-swiper";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <Swiper showsPagination={true}>
      <View>
        <Text>Hello world</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
