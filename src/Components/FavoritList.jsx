function FavoritList({
  favoriteList,
  dish,
  deleteHandle,
  cancelVideo,
  playVideo,
  video,
}) {
  //   const handleDelete = (idMeal) => {
  //     deleteHandle(parseInt(idMeal));
  //     console.log(idMeal);
  //   };

  return (
    <>
      <div className="oneRecept favorite ">
        <h1 key={dish.idMeal}>
          {dish.strMeal}{" "}
          <span style={{ fontStyle: "italic", fontSize: "17px" }}>
            {dish.strArea}&{dish.strCategory}
          </span>
        </h1>
        <div className="video-img-fv">
          <div onClick={() => deleteHandle(dish.idMeal)} className="ok">
            Delete from list?{" "}
          </div>

          <img src={dish.strMealThumb} alt="food" />
        </div>
        <table>
          <tr className="name">
            <th className="none"> Ingredients</th>
            <th></th>

            <th>Steps</th>
          </tr>
          <tr className="ingridient">
            <th>
              {Object.keys(dish).map(
                (f, i) =>
                  f.substring(0, 13) === "strIngredient" &&
                  dish[f] !== "" &&
                  dish[f] !== null && <li key={i}>{dish[f]}</li>
              )}
            </th>
            <th>
              {Object.keys(dish).map(
                (f, i) =>
                  f.substring(0, 10) === "strMeasure" && (
                    <li key={i}>{dish[f]}</li>
                  )
              )}
            </th>
            {/* <td>{dish.strMeasure1}</td> */}
            <td className="instruction">{dish.strInstructions}</td>
          </tr>
        </table>
        {/* <button onClick={() => playVideo(dish)}>Play</button>
        {video ? (
          <div className="video">
            <iframe video={dish} src={dish.strYoutube}></iframe>
            <button onClick={cancelVideo}>Cancel</button>
          </div>
        ) : null} */}
      </div>
    </>
  );
}
export default FavoritList;
