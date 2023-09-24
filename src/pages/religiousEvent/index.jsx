import React, { useState, useEffect, useRef } from "react";
import AdvertiseList from "../../component/Advertiselist/Advertiselist";
import Festivalpage from "../../component/Festival/festivalpage";

const ReligiousEventList = () => {
  const [calcWidth, setCalcWidth] = useState({
    leftWidth: 0,
    rightWidth: 0,
  });

  const leftRef = useRef("");
  const rightRef = useRef("");
  
  useEffect(() => {
    setCalcWidth({
      leftWidth: leftRef.current && leftRef.current?.offsetWidth,
      rightWidth: rightRef.current && rightRef.current?.offsetWidth,
    });
  }, []);

  return (
    <>
      <AdvertiseList>
        <Festivalpage calcWidth={calcWidth} />
      </AdvertiseList>
    </>
  );
};

export default ReligiousEventList;
