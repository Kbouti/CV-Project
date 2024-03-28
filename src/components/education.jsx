import { useState } from "react";

const Education = () => {
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
            placeholder="Derek Zoolander's center for kids who don't read good"
          ></input>
        </div>
        <div className="formEntry">
          <label htmlFor="degree">Degree</label>
          <input
            id="degreeInput"
            name="degree"
            type="text"
            placeholder="Bachelor of Farts"
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="location">Location</label>
          <input
            id="locationInput"
            name="location"
            type="text"
            placeholder="Uranus"
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="degree">Years attended</label>
          <input
            id="degreeInput"
            name="degree"
            type="text"
            placeholder="2004-2010"
          ></input>
        </div>

        <button onClick={console.log(`Submitted education form`)}>Submit Changes</button>

      </form>
    </div>
  );
};

export { Education };
