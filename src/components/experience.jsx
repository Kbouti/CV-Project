import { useState } from "react";
import { exampleExperience } from "./exampleData";



const Experience = ({experienceObjects, experienceSetter}) => {


function submitExperience(e) {
    e.preventDefault();

    alert(`You submitted work experience! `);
}


    return (
        <div className="experience subSection">
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
            id="locationInput"
            name="location"
            type="text"
            placeholder={exampleExperience.location}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="years">Years</label>
          <input
            id="yearssInput"
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


        <button type="submit" onClick={submitExperience}>
          Submit Changes
        </button>


        </form>
        </div>
    )
}

export {Experience}