import * as React from "react";
import StarImg from ".././../assests/images/star.png";

export default function StarImage(props) {
    const {color} = props;
    
  return (
    <div>
      <img
        alt="unsplash "
        src={StarImg}
       style={{backgroundColor:{color},width:"100%"}}
      />
    </div>
  );
}