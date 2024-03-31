import { useState } from "react";
import { exampleEducation } from "./exampleData";
import { v4 as uuidv4 } from "uuid";

const Education = ({
  fullNameSetter,
  emailSetter,
  phoneSetter,
  citySetter,
  educationObjects,
  educationSetter,
  experienceSetter,
  displayExample,
  displayExampleSetter,
}) => {
  function submitEducation(e) {
    e.preventDefault();
    console.log(`Education form submitted`);
    console.log(`displayExample: ${displayExample}`);

    const schoolInput = document.getElementById("schoolInput");
    const degreeInput = document.getElementById("degreeInput");
    const locationInput = document.getElementById("schoolLocationInput");
    const yearsInput = document.getElementById("schoolYearsInput");

    const newSchool = schoolInput.value;
    const newDegree = degreeInput.value;
    const newLocation = locationInput.value;
    const newYears = yearsInput.value;

    schoolInput.value = "";
    degreeInput.value = "";
    locationInput.value = "";
    yearsInput.value = "";

    if (displayExample === true) {
      console.log(
        `Captured TRUE displayExample. Setting to false and removing example data`
      );
      displayExampleSetter(false);
      fullNameSetter("");
      emailSetter("");
      phoneSetter("");
      citySetter("");

      const blankArray = [];
      const newObjsArray = [];
      const newEntry = {
        key: uuidv4(),
        school: newSchool,
        degree: newDegree,
        location: newLocation,
        years: newYears,
      };

      newObjsArray.push(newEntry);
      experienceSetter(blankArray);
      educationSetter(newObjsArray);
      return;
    }

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

        <button
          className="submitButton"
          type="submit"
          onClick={submitEducation}
        >
          Submit Changes
        </button>
      </form>

      <button className="expandButton">Expand</button>

    </div>
  );
};

export { Education };
