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
        <section className="education">
          <h3>Education</h3>
        </section>
        <section className="Experience">
          <h3>Experience</h3>
        </section>
      </div>
    </div>
  );
};

export { MainOutput };
