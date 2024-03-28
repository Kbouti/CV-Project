import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const examplePerson = {
    fullName: "Derek Zoolander",
    email: "DZoo@BallsModels.com",
    phone: "212-555-5378",
    city: "New York",
  }



// ***************************************************************************
//   We need a key from  uuid for each education and work object
//  Next step figure out how to access/generate a uuid

// ***************************************************************************

const exampleEducation = {
    key: uuidv4(),
    school: "Derek Zoolander's center for kids who don't read good",
    degree: "Bachelor of Farts",
    location: "Uranus",
    years: "2004-2010"
}


const exampleExperience = {
    key: uuidv4(),
    organization: "Balls Models",
    position: "Male Model",
    location: "New York",
    years: "2000-2010",
    description: "Pure bred runway model, no singing, acting, or left turns. "
}


  export {examplePerson, exampleEducation, exampleExperience}