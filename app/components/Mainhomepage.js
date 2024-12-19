import React from "react";
import Homepage from "./homepage/Homepage";
import HomeSecond from "./homeSecond/HomeSecond";

import Homethird from "./homeThird/Homethird";
import Homedetails from "./homeDetails/Homedetails";
import Homeforth from "./homeForth/Homeforth";

const Mainhomepage = () => {
  return (
    <div className="space-y-40 sm:space-y-96 overflow-hidden overscroll-none">
      <Homepage />
      <HomeSecond />
      <Homethird />
      <Homedetails />
      <Homeforth />
    </div>
  );
};

export default Mainhomepage;
