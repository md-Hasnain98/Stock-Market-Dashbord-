import React from "react";
import ReactCountryFlag from "react-country-flag";

const CountryFlagIcons = () => {
  return (
    <div className="btn btn-ghost">
    

      <ReactCountryFlag
      
        countryCode="US"
        svg
        style={{
          width: "2em",
          height: "1em",
        }}
        title="US"
      />
    </div>
  );
};

export default CountryFlagIcons;
