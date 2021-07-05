import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import BeautyStars from "beauty-stars";

function Rating() {
  return (
    <React.Fragment>
      {/* <Rater total={5} rating={2} interactive={false} /> */}
      <BeautyStars
      value={3}
      activeColor="#ffaf38"
      size="14px"
       inactiveColor="#E2DDDD"
      maxStars={5}
       />
    </React.Fragment>
  );
}

export default Rating;
