import React from "react";
import '../Css/HeaderComponent.css'

function HeaderComponent() {
  return (
    <div className="header">
      <div className="header__input" >
        <input id="default-checkbox" type="checkbox" value="" />
        <label for="default-checkbox" >
          3 items selected
        </label>
      </div>
      <div>
        <h4>Delete file</h4>
      </div>
    </div>
  );
}

export default HeaderComponent;
