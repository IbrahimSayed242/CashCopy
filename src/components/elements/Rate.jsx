import React from "react";

const Rate = ({ broker }) => {
  const starStyle = {
    fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
  };

  const filledStarStyle = {
    ...starStyle,
    color: "yellow",
  };

  return (
    <div className="stars">
      {broker.total_rate >= 1 ? (
        <span style={filledStarStyle} className="material-symbols-outlined">
          star_rate
        </span>
      ) : (
        <span style={starStyle} className="material-symbols-outlined">
          star_rate
        </span>
      )}

      {broker.total_rate >= 2 ? (
        <span style={filledStarStyle} className="material-symbols-outlined">
          star_rate
        </span>
      ) : (
        <span style={starStyle} className="material-symbols-outlined">
          star_rate
        </span>
      )}

      {broker.total_rate >= 3 ? (
        <span style={filledStarStyle} className="material-symbols-outlined">
          star_rate
        </span>
      ) : (
        <span style={starStyle} className="material-symbols-outlined">
          star_rate
        </span>
      )}

      {broker.total_rate >= 4 ? (
        <span style={filledStarStyle} className="material-symbols-outlined">
          star_rate
        </span>
      ) : (
        <span style={starStyle} className="material-symbols-outlined">
          star_rate
        </span>
      )}

      {broker.total_rate >= 5 ? (
        <span style={filledStarStyle} className="material-symbols-outlined">
          star_rate
        </span>
      ) : (
        <span style={starStyle} className="material-symbols-outlined">
          star_rate
        </span>
      )}
    </div>
  );
};

export default Rate;
