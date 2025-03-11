import { useLenis } from "lenis/react";
import Select from "react-select";
import { filteredCountries } from "@/helpers/excludedCountries";
import { components } from "react-select";

function CountrySelect({ field, ...props }) {
  const lenis = useLenis();

  const handleMenuOpen = () => {
    if (lenis) {
      //lenis.stop();
    }
  };

  const handleMenuClose = () => {
    if (lenis) {
      //lenis.start();
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#fff",
      height: "53px",
      borderRadius: "16px",
      background: "rgba(255, 255, 255, 0.03)",
      border: "none",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 16px",
      boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        borderColor: "#ffffff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "36px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "36px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#fff",
      backdropFilter: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      "> span": {
        display: "none",
      },
      "> div": {
        padding: "0",
        width: "24px",
        height: "24px",
        backgroundImage: "url(/images/icons/selectArrow.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      "> div > svg": {
        display: "none",
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,

      background: "#fff",
      display: "block",
      "> div": {
        "&::-webkit-scrollbar": {
          background: "transparent",
          width: "8px",
        },

        "&::-webkit-scrollbar-track": {
          background: "#ffffff0d",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#121321",
          borderRadius: "100px",
        },
      },
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#fff" : "#fff",
      color: "#0d0d0d",
      "&:hover": {
        background: "#2b2b2b",
        color: "#ffffff",
      },
    }),
  };

  return (
    <Select
      {...field}
      options={filteredCountries}
      onChange={(value) => field.onChange(value)}
      styles={customStyles}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      {...props}
      components={{ MenuList }}
    />
  );
}

export default CountrySelect;

const MenuList = (props) => {
  return (
    <components.MenuList
      {...props}
      innerProps={{
        ...props.innerProps,
        onWheel: (e) => {
          e.stopPropagation();
          if (props.innerProps.onWheel) {
            props.innerProps.onWheel(e);
          }
        },
      }}
    />
  );
};
