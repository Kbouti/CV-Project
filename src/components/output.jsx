import { useState } from "react";

import { exampleEducation } from "./exampleData";

const MainOutput = ({
  fullName,
  phone,
  email,
  city,
  educationObjects,
  experienceObjects,
}) => {
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
          {educationObjects.map((object) => {
            return (
              <div key={object.key} className="educationEntry userEntry">
                <p>{object.years}</p>
                <h4>{object.school}</h4>
                <p>{object.location}</p>
                <p>{object.degree}</p>
              </div>
            );
          })}
        </section>
        <section className="Experience">
          <h3>Professional Experience</h3>
          {experienceObjects.map((object) => {
            return (
              <div key={object.key} className="experienceEntry userEntry">
                <p>{object.years}</p>
                <h4>{object.organization}</h4>
                <p>{object.location}</p> 
                <p>{object.position}</p>
                <p className="jobDescription">{object.description}</p>

              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export { MainOutput };
