import { useState } from "react";

import { ContactInfo } from "./contactInfo.jsx";
import { Education } from "./education.jsx";
import { Experience } from "./experience.jsx";
import { MainOutput } from "./output.jsx";
import {
  examplePerson,
  exampleEducation,
  exampleExperience,
} from "./exampleData.jsx";

const education = [exampleEducation];
const experience = [exampleExperience];


const MasterPage = () => {
  const [fullName, setFullName] = useState(examplePerson.fullName);
  const [email, setEmail] = useState(examplePerson.email);
  const [phone, setPhone] = useState(examplePerson.phone);
  const [city, setCity] = useState(examplePerson.city);
  const [educationObjects, setEducationObjects] = useState(education);
  const [experienceObjects, setExperienceObjects] = useState(experience);
  const [displayExample, setDisplayExample] = useState(true);


// *****************************************************************************************
// We need to establish a new state variable to keep track of collapsing and expanding the form sections

  
// *****************************************************************************************

  return (
    <>
      <MainOutput
        fullName={fullName}
        phone={phone}
        email={email}
        city={city}
        educationObjects={educationObjects}
        experienceObjects={experienceObjects}
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
        educationSetter={setEducationObjects}
        experienceSetter={setExperienceObjects}
        displayExample={displayExample}
        displayExampleSetter={setDisplayExample}
      />
      <Education
        fullNameSetter={setFullName}
        emailSetter={setEmail}
        phoneSetter={setPhone}
        citySetter={setCity}
        educationObjects={educationObjects}
        educationSetter={setEducationObjects}
        experienceSetter={setExperienceObjects}
        displayExample={displayExample}
        displayExampleSetter={setDisplayExample}
      />
      <Experience
        fullNameSetter={setFullName}
        emailSetter={setEmail}
        phoneSetter={setPhone}
        citySetter={setCity}
        educationSetter={setEducationObjects}
        experienceObjects={experienceObjects}
        experienceSetter={setExperienceObjects}
        displayExample={displayExample}
        displayExampleSetter={setDisplayExample}
      />
    </>
  );
};

export { MasterPage };
