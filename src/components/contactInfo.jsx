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

//  ******************************************************************************************
  displayExample,
  displayExampleSetter,

// I added displayExample and displayExampleSetter as props because we need to manipulate this on formSubmit. 
// If displayExample is true, we first change it to false, then remove the example objects from our data arrays, THEN add our new entry, THEN render again. 
// if displayExample is false then we just add our new entry and rerender
//  ******************************************************************************************

}) => {
  function submitForm(e) {
    e.preventDefault();
console.log(`ContactInfo form submitted`)
console.log(`displayExample: ${displayExample}`);




    const newName = document.getElementById("nameInput").value;
    const newPhone = document.getElementById("phoneInput").value;
    const newEmail = document.getElementById("emailInput").value;
    const newCity = document.getElementById("cityInput").value;

    {
      fullNameSetter(newName);
    }
    {
      phoneSetter(newPhone);
    }
    {
      emailSetter(newEmail);
    }
    {
      citySetter(newCity);
    }
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

        <button type="submit" onClick={submitForm}>
          Submit Changes
        </button>
      </form>
    </div>
  );
};

export { ContactInfo };
