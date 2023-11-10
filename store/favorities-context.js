import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavouriteMealIds((prev) => [...prev, id]);
  }

  function removeFavorite(id) {
    setFavouriteMealIds((prev) => prev.filter((mealId) => id !== mealId));
  }

  const value = {
    ids: favouriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
