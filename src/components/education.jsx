import { useState } from "react";
import { exampleEducation } from "./exampleData";

import { v4 as uuidv4 } from "uuid";

const Education = ({ educationObjects, educationSetter }) => {
  // OK we need a function to call when we submit this form. Form needs to:
  //    - Prevent default
  //    - Create a new object with the user input values
  //    - Create a new array using existing educationObjects
  //    - Add new oject to new array
  //    - Call set function with new array

  function submitEducation(e) {
    e.preventDefault();
    console.log(`submitted education!`);
    let newuuid = uuidv4();
    console.log(`uuid: ${newuuid}`);
  }

  return (
    <div className="education subSection">
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
            id="locationInput"
            name="location"
            type="text"
            placeholder={exampleEducation.location}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="degree">Years attended</label>
          <input
            id="degreeInput"
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
