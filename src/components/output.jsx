import { useState } from "react";

const MainOutput = ({fullName}) => {
  return (
    <div className="resume mainSection">
      <div className="resumePage">
        <h2>{fullName}</h2>
      </div>
    </div>
  );
};

export { MainOutput };
