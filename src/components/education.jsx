import { useState } from "react";
import { exampleEducation } from "./exampleData";

import { v4 as uuidv4 } from "uuid";

const Education = ({ educationObjects, educationSetter, displayExample }) => {

  function submitEducation(e) {
    console.log(`Education form submitted`)
    console.log(`displayExample: ${displayExample}`);
//  ************************************************************************************************
//  Ok, now we've got access to the displayExample prop. 
//  On formsubmit we need to check if displayExample is true and if true, remove example data and set to false
//  ************************************************************************************************


    e.preventDefault();
    
    const newSchool = document.getElementById("schoolInput").value;
    const newDegree = document.getElementById("degreeInput").value;
    const newLocation = document.getElementById("schoolLocationInput").value;
    const newYears = document.getElementById("schoolYearsInput").value;

    const newEntry = {
      key: uuidv4(),
      school: newSchool,
      degree: newDegree,
      location: newLocation,
      years: newYears,
    };

    const newObjsArray = [];
    educationObjects.map((object) => {
      newObjsArray.push(object);
    });

    newObjsArray.push(newEntry);
    educationSetter(newObjsArray);
  }

  return (
    <div id="education" className="education subSection">
      <h2 className="sectionHeader">Education</h2>
      <div className="educationThumbnails"></div>
      <form>
        <div className="formEntry">
          <label htmlFor="school">School</label>
          <input
            id="schoolInput"
            name="school"
            type="text"
            placeholder={exampleEducation.school}
          ></input>
        </div>
        <div className="formEntry">
          <label htmlFor="degree">Degree</label>
          <input
            id="degreeInput"
            name="degree"
            type="text"
            placeholder={exampleEducation.degree}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="location">Location</label>
          <input
            id="schoolLocationInput"
            name="location"
            type="text"
            placeholder={exampleEducation.location}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="degree">Years attended</label>
          <input
            id="schoolYearsInput"
            name="degree"
            type="text"
            placeholder={exampleEducation.years}
          ></input>
        </div>

        <button type="submit" onClick={submitEducation}>
          Submit Changes
        </button>
      </form>
    </div>
  );
};

export { Education };
