import React from "react";
import DisplayPosts from "./subComponents/DisplayPosts";
import DisplayUserDetail from "./subComponents/DisplayUserDetail";

function Home() {
  return (
    <div className="container home-container  ">
      <div className="row ">
        <div className="col-md-7 ">
          <DisplayPosts />
        </div>
        <div className="col-md-5 ">
          <DisplayUserDetail />
        </div>
      </div>
    </div>
  );
}

export default Home;
