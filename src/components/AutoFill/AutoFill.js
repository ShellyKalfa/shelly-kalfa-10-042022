import React from "react";

export default function AutoFill({citys, onclick}) {
  const nameCity = citys.AdministrativeArea.LocalizedName;
  const nameCountry = citys.Country.LocalizedName;
  const codeCity = citys.Key
  const cityInfo = {
    name: nameCity,
    code: codeCity
  }

  return (
    <div className="componentAutoFill" onClick={() => onclick(cityInfo)}>
      <div className="componentBodyAutoFill cityAutoFill">
        the City: {nameCity}
      </div>
      <div className="componentBodyAutoFill">
        in Country: {nameCountry}
      </div>
    </div>
  );

}
