import { useEffect, useState } from "react";
import FavoritList from "./FavoritList";

function Favorite({ getFavorite, getList, dish }) {
  const [favorite, setFavorite] = useState([]);

  const deleteHandle = (idMeal) => {
    const filteredFavorite = favorite.filter((f) => f.idMeal !== idMeal);
    localStorage.setItem("favoriteList", JSON.stringify(filteredFavorite));

    setFavorite((favorite) => favorite.filter((f) => f.idMeal !== idMeal));
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteList"));

    setFavorite(favorites);
    // localStorage.setItem("favoriteList", JSON.stringify(favorites));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Your favorite dishes!!!</h1>
      <div>
        {favorite.length ? (
          favorite.map((elementas, i) => (
            <FavoritList
              key={i}
              // getFavorite={getFavorite}
              getList={getList}
              dish={elementas}
              deleteHandle={deleteHandle}
            ></FavoritList>
          ))
        ) : (
          <div>
            Sorry... you don't have your favorite dishes... Let's to
            choose!Press button 'Search'
          </div>
        )}
        {/* {favorite.length &&
          favorite.map((element, i) => (
            <h1 style={{ fontSize: "5px" }}>{element}</h1>
          ))} */}
      </div>
    </>
  );
}

export default Favorite;
