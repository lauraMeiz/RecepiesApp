// import Iframe from "react-iframe";

import { useState } from "react";

function OneRecept({ dish, getFavorite }) {
  const [video, setVideo] = useState(0);
  // Object.keys(dish).filter((f) =>
  //   // console.log(f.substring(0, 13) === "strIngredient")
  // );
  const playVideo = (dish) => {
    setVideo(dish);
    console.log(dish.strYoutube);
    console.log(dish.strYoutube.split("="));
  };
  const cancelVideo = () => {
    setVideo(0);
  };
  // console.log(Object.keys(dish));
  return (
    <>
      <div className="oneRecept">
        <h1 key={dish.idMeal}>
          {dish.strMeal}{" "}
          <span style={{ fontStyle: "italic", fontSize: "17px" }}>
            {dish.strArea}&{dish.strCategory}
          </span>
        </h1>
        <div className="video_img">
          <div onClick={() => getFavorite(dish.idMeal)} className="ok">
            Favorite ?{" "}
          </div>

          <img src={dish.strMealThumb} alt="food" />
          <button className="btn-video" onClick={() => playVideo(dish)}>
            Play Video
          </button>
        </div>
        {video ? (
          <div className="video">
            {/* <iframe
              title={dish}
              video={dish}
              url={dish.strYoutube}
              alt=""
            ></iframe> */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${
                dish.strYoutube.split("=")[1]
              }`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <button className="btn-video" onClick={cancelVideo}>
              Cancel
            </button>
          </div>
        ) : null}
        {/* <img
          // className="ingridient-img"
          src={`https://www.themealdb.com/images/ingredients/${dish}
            .split(" ")
            .join("%20")}.png`}
          alt=""
        /> */}
        <table>
          <tr className="name">
            <th> Ingredients</th>
            <th> </th>

            <th>Steps</th>
          </tr>
          <tr className="ingridient">
            <th className="igri">
              {Object.keys(dish).map(
                (f, i) =>
                  f.substring(0, 13) === "strIngredient" && (
                    // dish[f] !== "" &&
                    // dish[f] !== null

                    <li key={i}>
                      {/* <img
                        // className="ingridient-img"
                        src={`https://www.themealdb.com/images/ingredients/${dish[
                          f
                        ]
                          .split(" ")
                          .join("%20")}.png`}
                        alt=""
                      /> */}
                      {dish[f]}
                    </li>
                  )
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
        </table>{" "}
      </div>
    </>
  );
}
export default OneRecept;
