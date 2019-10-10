import React, { useState, useEffect } from "react";
import Rule from "./Rule";

const data = [
  { id: "1", text: "Every action must be tab-able" },
  { id: "2", text: "Maximum 3 colours on a page" },
  {
    id: "3",
    text: "All the texts need to be readable / have an excellent contrast"
  },
  {
    id: "4",
    text:
      "Fonts must be READABLE (read standard/or have a good reason to be weird)."
  },
  { id: "5", text: "Texts need to be understandable (non-technical)" },
  {
    id: "6",
    text: "The elements of the page need to have white space around them"
  },
  {
    id: "7",
    text: "The number of interactions to achieve a goal need to be minimal"
  },
  {
    id: "8",
    text:
      "The user needs to be able to understand what does the website do (be clear)"
  },
  { id: "9", text: "Call to actions must use action verbs" },
  {
    id: "10",
    text: "Links need to do something visible / shouldn't be dead links."
  },
  { id: "11", text: "Videos & pictures need to load the fastest as possible" },
  {
    id: "12",
    text:
      "Text on images/backgrounds/videos needs to be EASILY readable PLEASE."
  },
  { id: "13", text: "Elements need to belong together" },
  {
    id: "14",
    text: "Not too many lines/borders. Blank space is an excellent separator."
  },
  { id: "15", text: "‘#’ links are forbidden. This is a button, not a link. " },
  { id: "16", text: "Every action must have a hover and a focus" },
  { id: "17", text: "Every action must be fireable with “space” or “enter”" },
  { id: "18", text: "Every image must have an alt tag" },
  {
    id: "19",
    text: "Every action must have a label (especially if icon only)"
  },
  {
    id: "20",
    text:
      "Every icon-only button must be well known/obvious (unless a particular design)."
  },
  {
    id: "21",
    text:
      "Scale down your app slowly to 500px and check if everything makes sense/looks good ALL THE TIME"
  },
  {
    id: "22",
    text:
      "Activate mobile mode and check with the slowest mobile and smallest mobile :D"
  }
];

const percent = rulesChecked =>
  Math.round((rulesChecked.length / data.length) * 100);

export default function App() {
  const [rulesChecked, setRulesChecked] = useState([]);

  useEffect(() => {
    const key = window.location.hostname;
    chrome.storage.local.get([key], result => {
      const value = result[key] || [];
      setRulesChecked(value);
    });
  }, []);

  const toggleRule = ruleId => {
    let newRules;
    if (rulesChecked.includes(ruleId)) {
      newRules = rulesChecked.filter(id => ruleId !== id);
    } else {
      newRules = [ruleId, ...rulesChecked];
    }
    setRulesChecked(newRules);

    const rulesToSet = {};
    rulesToSet[window.location.hostname] = newRules;

    chrome.storage.local.set(rulesToSet, function() {
      console.log("Value is set to " + rulesToSet);
    });
  };

  return (
    <>
      <h1>The rulz of ze UX {percent(rulesChecked)}%</h1>
      <ul>
        {data.map((rule, i) => (
          <Rule
            rule={rule}
            key={rule.id}
            toggleRule={toggleRule}
            checked={rulesChecked.includes(rule.id)}
          />
        ))}
      </ul>
    </>
  );
}
