import React from "react";
import PropTypes from "prop-types";

function Rule({
  numberOfRulesChecked,
  setNumberOfRulesChecked,
  rule,
  checked,
  toggleRule
}) {
  const actOnChange = e => {
    toggleRule(rule.id);
  };

  return (
    <li>
      <input
        name={rule.id}
        type="checkbox"
        checked={checked}
        onChange={actOnChange}
      />
      {rule.text}
    </li>
  );
}

Rule.propTypes = {
  rule: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
  toggleRule: PropTypes.func.isRequired
};

export default Rule;
