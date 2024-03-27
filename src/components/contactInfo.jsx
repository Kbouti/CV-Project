import { useState } from "react";

const ContactInfo = ({fullName, fullNameSetter, email, emailSetter, phone, phoneSetter, city, citySetter}) => {



function submitChanges(){
// Ultimately this should be the onClick callback. This function will get the values of the inputs. 
// We'll have the option of replacing placeholder text with new text or leaving placeholder text if there is nouser input value
//  getValues()
//  setValues(values)

}

function getValues(){
  const newName = document.getElementById("nameInput").value;
  const newPhone = document.getElementById("phoneInput").value;

  {fullNameSetter(newName)};
}

function setValues(newValues){
  // we'll update values, but leave the placeholder if the rest is blank? Maybe?
}




  return (
    <div className="contactInfo subSection">
      <h1 className="sectionHeader">General Information</h1>

      <div className="formEntry">
        <label htmlFor="name">Full Name</label>
        <input id="nameInput" name="name" type="text" placeholder={fullName}></input>
      </div>

      <div className="formEntry">
        <label htmlFor="email">Email</label>
        <input id="emailInput" name="email" type="email" placeholder={email}></input>
      </div>

      <div className="formEntry">
        <label htmlFor="phone">Phone</label>
        <input id="phoneInput"name="phone" type="phone" placeholder={phone}></input>
      </div>

      <div className="formEntry">
        <label htmlFor="city">City</label>
        <input id="cityInput" name="city" type="text" placeholder={city}></input>
      </div>

 <button onClick={getValues}>Submit Changes</button>
    </div>
  );
};

export { ContactInfo };
