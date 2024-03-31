import { useState } from "react";

import { examplePerson } from "./exampleData";

const ContactInfo = ({
  fullName,
  fullNameSetter,
  email,
  emailSetter,
  phone,
  phoneSetter,
  city,
  citySetter,
  educationSetter,
  experienceSetter,
  displayExample,
  displayExampleSetter,
}) => {
  function submitForm(e) {
    e.preventDefault();
    console.log(`ContactInfo form submitted`);
    console.log(`displayExample: ${displayExample}`);

    const nameInput = document.getElementById("nameInput");
    const phoneInput = document.getElementById("phoneInput");
    const emailInput = document.getElementById("emailInput");
    const cityInput = document.getElementById("cityInput");

    const newName = nameInput.value;
    const newPhone = phoneInput.value;
    const newEmail = emailInput.value;
    const newCity = cityInput.value;

    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    cityInput.value = "";

    if (displayExample === true) {
      console.log(
        `Captured TRUE displayExample. Setting to false and removing example data`
      );
      displayExampleSetter(false);
      const blankArray = [];
      educationSetter(blankArray);
      experienceSetter(blankArray);
    }

    fullNameSetter(newName);
    phoneSetter(newPhone);
    emailSetter(newEmail);
    citySetter(newCity);
  }

  return (
    <div id="contactInfo" className="contactInfo subSection">
      <h1 className="sectionHeader">General Information</h1>

      <form>
        <div className="formEntry">
          <label htmlFor="name">Full Name</label>
          <input
            id="nameInput"
            name="name"
            type="text"
            placeholder={examplePerson.fullName}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="email">Email</label>
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder={examplePerson.email}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="phone">Phone</label>
          <input
            id="phoneInput"
            name="phone"
            type="phone"
            placeholder={examplePerson.phone}
          ></input>
        </div>

        <div className="formEntry">
          <label htmlFor="city">City</label>
          <input
            id="cityInput"
            name="city"
            type="text"
            placeholder={examplePerson.city}
          ></input>
        </div>

        <button className="submitButton" type="submit" onClick={submitForm}>
          Submit Changes
        </button>
      </form>


    <button className="expandButton">
    <span className="material-symbols-outlined">expand_less</span>
    </button>

    </div>
  );
};

export { ContactInfo };
