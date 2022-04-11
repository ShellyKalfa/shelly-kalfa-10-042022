import React from "react";
import "../../asset/NativeBar.css"

export default function NativeBar({clickFunction}) {
  return (<div className="NativeBarFlex">
    <div className="NativeBarText">Helrolo Weather Tqsk</div>
    <div className="NativeBarButtons">
      <div className="Button" onClick={() => clickFunction("Home")}>Home</div>
      <div className="Button" onClick={() => clickFunction("Faverites")}>Faverites</div>
    </div>
  </div>);
}