import React, { useState } from "react";
import Rule from "./Rule";

const data = [
  "Every action must be tab-able",
  "Maximum 3 colours on a page",
  "All the texts need to be readable / have an excellent contrast",
  "Fonts must be READABLE (read standard/or have a good reason to be weird).",
  "Texts need to be understandable (non-technical)",
  "The elements of the page need to have white space around them",
  "The number of interactions to achieve a goal need to be minimal",
  "The user needs to be able to understand what does the website do (be clear)",
  "Call to actions must use action verbs",
  "Links need to do something visible / shouldn't be dead links.",
  "Videos & pictures need to load the fastest as possible",
  "Text on images/backgrounds/videos needs to be EASILY readable PLEASE.",
  "Elements need to belong together",
  "Not too many lines/borders. Blank space is an excellent separator.",
  "‘#’ links are forbidden. This is a button, not a link. ",
  "Every action must have a hover and a focus",
  "Every action must be fireable with “space” or “enter”",
  "Every image must have an alt tag",
  "Every action must have a label (especially if icon only)",
  "Every icon-only button must be well known/obvious (unless a particular design).",
  "Scale down your app slowly to 500px and check if everything makes sense/looks good ALL THE TIME",
  "Activate mobile mode and check with the slowest mobile and smallest mobile :D"
];

const percent = numberOfRules =>
  Math.round((numberOfRules / data.length) * 100);

export default function App() {
  const [numberOfRulesChecked, setNumberOfRulesChecked] = useState(0);
  return (
    <>
      <h1>The rulz of ze UX {percent(numberOfRulesChecked)}%</h1>
      <ul>
        {data.map((rule, i) => (
          <Rule
            text={rule}
            key={i}
            numberOfRulesChecked={numberOfRulesChecked}
            setNumberOfRulesChecked={setNumberOfRulesChecked}
          />
        ))}
      </ul>
    </>
  );
}
