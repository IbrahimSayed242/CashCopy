import React from "react";

const Rate = ({ rateing }) => {
  const starStyle = {
    fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
  };

  const filledStarStyle = {
    ...starStyle,
    color: "yellow",
  };
  const starHalfStyle = {
    fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    color: "yellow",
  };

  const totalFullStar = () => {
    const x = rateing - Math.floor(rateing);

    if (x <= 0.5) {
      return Math.floor(rateing);
    } else {
      return Math.round(rateing);
    }
  };

  const numberFullStar = [...Array(totalFullStar()).keys()];

  const totalHalfStar = () => {
    const x = rateing - Math.floor(rateing);
    if (x > 0 && x <= 0.5) {
      return 1;
    } else {
      return 0;
    }
  };

  const numberHalfStar = [...Array(totalHalfStar()).keys()];

  const totalEmptyStar = () => {
    return 5 - Math.ceil(rateing);
  };

  const numberEmptyStar = [...Array(totalEmptyStar()).keys()];

  return (
    <div className="stars">
      {numberFullStar.length > 0
        ? numberFullStar.map((e, i) => (
            <span
              key={i}
              style={filledStarStyle}
              className="material-symbols-outlined"
            >
              star_rate
            </span>
          ))
        : ""}
      {numberHalfStar.length > 0
        ? numberHalfStar.map((e, i) => (
            <span
              key={i}
              style={starHalfStyle}
              className="material-symbols-outlined"
            >
              star_half
            </span>
          ))
        : ""}
      {numberEmptyStar.length > 0
        ? numberEmptyStar.map((e, i) => (
            <span
              key={i}
              style={starStyle}
              className="material-symbols-outlined"
            >
              star_rate
            </span>
          ))
        : ""}
    </div>
  );
};

export default Rate;
