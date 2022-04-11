import React from "react";
import {BsBookmarkHeart, BsBookmarkHeartFill} from "react-icons/bs"

export default function Faverites({onClickAddFaveritesF, isInFaverites}) {

  function f() {
    if (isInFaverites) {
      return (<BsBookmarkHeartFill/>)
    }
    return (<BsBookmarkHeart/>)
  }

  return (
    <div className="FaveritesFlex" onClick={onClickAddFaveritesF}>
      <label htmlFor="addFaverites">{f()} </label>
      <div id="addFaverites"> add Faverites</div>
    </div>
  );
}