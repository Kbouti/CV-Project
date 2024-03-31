import { useState } from "react";
import { exampleExperience } from "./exampleData";
import { v4 as uuidv4 } from "uuid";

const Experience = ({
  fullNameSetter,
  emailSetter,
  phoneSetter,
  citySetter,
  educationSetter,
  experienceObjects,
  experienceSetter,
  displayExample,
  displayExampleSetter,
}) => {
  function submitExperience(e) {
    e.preventDefault();
    console.log(`Experience form submitted`);
    console.log(`displayExample: ${displayExample}`);

    const newOrganization = document.getElementById("organizationInput").value;
    const newPosition = document.getElementById("positionInput").value;
    const newLocation = document.getElementById("workLocationInput").value;
    const newYears = document.getElementById("workYearsInput").value;
    const newDesctiption = document.getElementById("descriptionInput").value;

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
      const newArray = [];
      const newEntry = {
        key: uuidv4(),
        organization: newOrganization,
        position: newPosition,
        location: newLocation,
        years: newYears,
        description: newDesctiption,
      };

      newArray.push(newEntry);
      educationSetter(blankArray);
      experienceSetter(newArray);
      return;
    }
  }

  return (
    <div id="experience" className="experience subSection">
      <h2 className="sectionHeader">Experience</h2>
      <div className="experienceThumbnails"></div>
      <form>
        <div className="formEntry">
          <label htmlFor="organization">Organization</label>
          <input
            id="organizationInput"
            name="organization"
            type="text"
            placeholder={exampleExperience.organization}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="position">Position</label>
          <input
            id="positionInput"
            name="position"
            type="text"
            placeholder={exampleExperience.position}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="location">Location</label>
          <input
            id="workLocationInput"
            name="location"
            type="text"
            placeholder={exampleExperience.location}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="years">Years</label>
          <input
            id="workYearsInput"
            name="years"
            type="text"
            placeholder={exampleExperience.years}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="description">Description</label>
          <input
            id="descriptionInput"
            name="description"
            type="text"
            placeholder={exampleExperience.description}
          ></input>
        </div>

        <button
          className="submitButton"
          type="submit"
          onClick={submitExperience}
        >
          Submit Changes
        </button>
      </form>

      <button className="expandButton">Expand</button>

    </div>
  );
};

export { Experience };
