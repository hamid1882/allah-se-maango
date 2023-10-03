import Swiper from "react-native-swiper";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import bookData from "./assets/allahsemaango.json";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const parsedData = bookData.page_data.map(({ image_url, page }) => {
      return {
        image_url,
        page,
      };
    });

    setData(parsedData);
  }, []);

  return (
    <Swiper dotColor="white" scrollsToTop={true} showsPagination={true}>
      {data.map(({ image_url, page }, index) => (
        <View key={index} style={styles.container}>
          <Image style={styles.image} source={{ uri: image_url }} />
        </View>
      ))}
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
  image: {
    width: Dimensions.get("window").width + 50,
    height: Dimensions.get("window").height,
    resizeMode: "stretch",
  },
});
