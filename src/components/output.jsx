import { useState } from "react";

const MainOutput = ({ fullName, phone, email, city }) => {
  return (
    <div className="resume mainSection">
      <div className="resumePage">
        <header>
          <h2>{fullName}</h2>
          <ul>
            <li>{phone}</li>
            <li>{email}</li>
            <li>{city}</li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export { MainOutput };
