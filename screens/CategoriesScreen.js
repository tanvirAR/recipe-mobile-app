import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function RenderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOvereview", {
        categoryId: itemData.item.id 
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={RenderCategoryItem}
      numColumns={2}
    />
  );
}
