import { useEffect, useState } from "react";
import OneRecept from "./OneRecept";

function Search() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [not, setNot] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("favoriteList");
    if (null === data) {
      localStorage.setItem("favoriteList", JSON.stringify([]));
      setFavoriteList([]);
    } else {
      setFavoriteList(data);
    }
  }, [favoriteList]);

  //localStorage.setItem("favoriteList", JSON.stringify(favoriteList));

  const searchHandle = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 1) {
      setNot(false);
    } else {
      setNot(true);
    }
  };

  const getFavorite = (idMeal) => {
    const elementas = [];
    meals.forEach((m) => {
      if (m.idMeal === idMeal) {
        elementas.push(m);
      }
      const filter = JSON.parse(favoriteList).filter(
        (f) => f.idMeal !== idMeal
      );
      const all = [...filter, ...elementas];
      setFavoriteList((favoriteList) => [...favoriteList, ...all]);

      localStorage.setItem("favoriteList", JSON.stringify(all));
    });
    // console.log(elementas.idMeal);

    // for (let i = 0; i < elementas.length; i++) {
    //   console.log(parseInt(elementas[i].idMeal));
    // }

    // setFavoriteList((favoriteList) => [...favoriteList, ...elementas]);
    // localStorage.setItem("favoriteList", JSON.stringify(elementas));
    // console.log(elementas);
    // if (!elementas) {
    //   setFavoriteList((favoriteList) => [...favoriteList, ...elementas]);
    // }
    //setFavoriteList((favoriteList) => [...favoriteList, ...elementas]);
  };

  const showChoice = () => {
    if (search !== null) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())

        .then((result) => {
          console.log(result.meals);
          if (result.meals !== null) {
            setMeals(result.meals);
            setNotFound("");
          } else {
            setNotFound("Something wrong,please, try again");
            setMeals("");
          }
        })

        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="top">
        <label>Choose your dish for today!</label>
        <input
          type="search"
          value={search}
          onChange={searchHandle}
          placeholder="Please, enter your choice"
        />

        <button onClick={showChoice} type="submit" disabled={not}>
          Search
        </button>
      </div>
      <ul className="search">
        {meals.length ? (
          meals.map((m) => (
            <OneRecept
              getFavorite={getFavorite}
              key={m.idMeal}
              dish={m}
            ></OneRecept>
          ))
        ) : (
          <div style={{ color: "black", textTransform: "uppercase" }}>
            {notFound}
          </div>
        )}
      </ul>
    </>
  );
}

export default Search;
