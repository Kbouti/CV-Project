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
  function toggleForm() {
    console.log(`form toggle triggered`);
    const section = document.getElementById("experience");
    const form = section.getElementsByTagName("form")[0];
    const materialSymbol = section.getElementsByClassName(
      "material-symbols-outlined"
    )[0];
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      materialSymbol.innerHTML = "expand_less";
      return;
    }
    form.classList.add("hidden");
    materialSymbol.innerHTML = "expand_more";
    return;
  }

  function submitExperience(e) {
    e.preventDefault();
    console.log(`Experience form submitted`);
    console.log(`displayExample: ${displayExample}`);

    const newOrganization = document.getElementById("organizationInput").value;
    const newPosition = document.getElementById("positionInput").value;
    const newLocation = document.getElementById("workLocationInput").value;
    const newYears = document.getElementById("workYearsInput").value;
    const newDesctiption = document.getElementById("descriptionInput").value;
    const newArray = [];
    const newEntry = {
      key: uuidv4(),
      organization: newOrganization,
      position: newPosition,
      location: newLocation,
      years: newYears,
      description: newDesctiption,
    };
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
      educationSetter(blankArray);
      newArray.push(newEntry);
      experienceSetter(newArray);
      return;
    } else {
      experienceObjects.map((object) => {
        newArray.push(object);
      });
      newArray.push(newEntry);
      experienceSetter(newArray);
      return;
    }
  }

  return (
    <div id="experience" className="experience subSection">
      <h2 className="sectionHeader">Experience</h2>
      <div className="experienceThumbnails"></div>
      <form className="hidden">
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

      <button onClick={toggleForm} className="expandButton">
        <span className="material-symbols-outlined">expand_more</span>
      </button>
    </div>
  );
};

export { Experience };
