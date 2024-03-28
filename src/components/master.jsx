import { useState } from "react";

import { ContactInfo } from "./contactInfo.jsx";
import { Education } from "./education.jsx";
import { Experience } from "./experience.jsx";
import { MainOutput } from "./output.jsx";




// Ok I'm thinking we establish the placeholder name and info in an object that gets declared here. 
// We want to establish objects because when we get to work and education there are going to be multiple objects, not just a set of values


const examplePerson = {
  fullName: "Derek Zoolander",
  email: "DZoo@Ballzmodels.com",
  phone: "212-555-5378",
  city: "New York",
}



const MasterPage = () => {
  const [fullName, setFullName] = useState(examplePerson.fullName);
  const [email, setEmail] = useState(examplePerson.email);
  const [phone, setPhone] = useState(examplePerson.phone);
  const [city, setCity] = useState(examplePerson.city);

  return (
    <>
      <MainOutput 
              fullName={fullName}
              phone = {phone}
              email = {email}
              city = {city}

      />
      <ContactInfo
        fullName={fullName}
        fullNameSetter={setFullName}
        email={email}
        emailSetter={setEmail}
        phone={phone}
        phoneSetter={setPhone}
        city={city}
        citySetter={setCity}
      />
      <Education />
      <Experience />
    </>
  );
};

export { examplePerson, MasterPage };
