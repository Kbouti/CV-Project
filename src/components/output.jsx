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

// ********************************************************************************************
// This adds the class purple to every education object except the last one. Alter the purple class in CSS to instead create some kind of underline or barrier between entries
  
// This DOES work, but it's being run at the wrong time. This runs on render -> on first render there aren't any elements. On second render there's only one. On third render (either adding another element or changing something elsewhere) there are 2 elements and thus purple is added
// Almost as if I should be using useState() instead..... 



const educationEntries = document.getElementsByClassName("educationEntry");
  for (let i = 0; i < educationEntries.length -1; i++) {
    if (educationEntries[i] !== undefined) {
      console.log(`i: ${i} out of ${educationEntries.length}, adding purple`);
      educationEntries[i].classList.add("purple");
    }
  }
// ********************************************************************************************

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
