import React from "react";

function Sidebar({ NavOpen }) {
  return (
    <div className="wrapper">
      <div className={`blur ${NavOpen && "blur_show"}`}></div>
      <div className={`sidebar ${NavOpen && "sidebar_show"}`}>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
