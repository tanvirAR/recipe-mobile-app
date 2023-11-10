import { View, StyleSheet, Text } from "react-native";


export default function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  subTitle: {
    color: "#e3b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e3b497",
    borderBottomWidth: 2,
  },
});