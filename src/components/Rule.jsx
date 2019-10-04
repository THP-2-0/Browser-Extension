import React from "react";
import PropTypes from "prop-types";

function Rule({ numberOfRulesChecked, setNumberOfRulesChecked, text }) {
  const actOnClick = e => {
    const newValue = numberOfRulesChecked + (e.currentTarget.checked ? 1 : -1);
    setNumberOfRulesChecked(newValue);
  };

  return (
    <li>
      <input type="checkbox" onClick={actOnClick} />
      {text}
    </li>
  );
}

Rule.propTypes = {
  numberOfRulesChecked: PropTypes.number.isRequired(),
  setNumberOfRulesChecked: PropTypes.func.isRequired(),
  text: PropTypes.string.isRequired()
};

export default Rule;
