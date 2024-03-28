import { useState } from "react";
import { exampleEducation } from "./exampleData";



const Education = ({educationObjects, educationSetter}) => {
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

        <button type="submit" onClick={console.log(`Submitted education form`)}>Submit Changes</button>

      </form>
    </div>
  );
};

export { Education };
