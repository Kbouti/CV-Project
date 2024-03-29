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

  // ******************************************************************************************
  const [displayExample, setDisplayExample] = useState(true);
  // Need something like the above state variable to establish whether or not to include example information on resume output
  //  The question now is how and where do we use it
// ******************************************************************************************

  return (
    <>
      <MainOutput
        fullName={fullName}
        phone={phone}
        email={email}
        city={city}
        educationObjects={educationObjects}
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
        displayExample={displayExample}
        displayExampleSetter= {setDisplayExample}
      />
      <Education
        educationObjects={educationObjects}
        educationSetter={setEducationObjects}
        displayExample={displayExample}
        displayExampleSetter= {setDisplayExample}
      />
      <Experience
        experienceObjects={experienceObjects}
        experienceSetter={setExperienceObjects}
        displayExample={displayExample}
        displayExampleSetter= {setDisplayExample}

      />
    </>
  );
};

export { MasterPage };
