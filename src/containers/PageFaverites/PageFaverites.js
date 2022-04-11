import React, {useEffect, useState} from "react";
import FaveritesCitys from "../../components/FaveritesCitys/FaveritesCitys";
import "../../asset/FaveritesCitys.css"

export default function PageFaverites({data = [], openFaveritesCitys, keyFetch = "", clickForRemove}) {
  return (<div className="divFaverites">
    {
      data.map((city, index) => (
        <FaveritesCitys key={index}
                        cityInfo={city}
                        openFaveritesCitys={openFaveritesCitys}
                        keyFetch={keyFetch}
                        clickForRemove={clickForRemove}/>
      ))
    }

  </div>)

}