import React from "react";

function Sidebar({ Open, children}) {
  return (
    <div className="wrapper">
      <div className={`blur ${Open && "blur_show"}`}></div>
      <div className={`sidebar ${Open && "sidebar_show"}`}>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
