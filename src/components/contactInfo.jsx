import { useState } from "react";

const ContactInfo = ({fullName, email}) => {
  return (
    <div className="contactInfo subSection">
      <h1 className="sectionHeader">General Information</h1>

      <div className="formEntry">
        <label htmlFor="name">Full Name</label>
        <input name="name" type="text" placeholder={fullName}></input>
      </div>

      <div className="formEntry">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder={email}></input>
      </div>

      <div className="formEntry">
        <label htmlFor="phone">Phone</label>
        <input name="phone" type="phone"></input>
      </div>

      <div className="formEntry">
        <label htmlFor="city">City</label>
        <input name="city" type="text"></input>
      </div>
    </div>
  );
};

export { ContactInfo };
