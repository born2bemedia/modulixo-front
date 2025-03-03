"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthStore from "@/stores/authStore";
import { useEffect, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useRouter } from "next/navigation";
import usePopupStore from "@/stores/popupStore";
import styles from "../../your-data/page.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { filteredCountries } from "@/helpers/excludedCountries";
import EditIcon from "@/shared/icons/EditIcon";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    color: "#000",
    height: "49px",
    borderRadius: "16px",
    background: "#fff",
    border: "none",
    fontSize: "14px",
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
    color: "#000",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000",
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
      backgroundImage: "url(/images/selectArrow.svg)",
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
        width: "5px",
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

export default function YourData() {
  const {
    thanksPopupDisplay,
    setThanksPopupDisplay,
    setThanksPopupDefaultDisplay,
  } = usePopupStore();
  const { user, updateUser, isHydrated } = useAuthStore();
  const [userCountry, setUserCountry] = useState("");
  const router = useRouter();
  const [disabledValue, setDisabled] = useState(true);

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setUserCountry(user?.country);
    ////console.log(user?.country);
  }, [user]);

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      street: user?.street || "",
      addressLine1: user?.address || "",
      city: user?.city || "",
      zip: user?.zip || "",
      country: null,
      phone: user?.phone || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const userUpdatePayload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        street: data.street,
        address: data.addressLine1,
        city: data.city,
        zip: data.zip,
        country: data.country.value,
        phone: data.phone,
      };
      await updateUser(userUpdatePayload);
      setThanksPopupDefaultDisplay(true);
    } catch (error) {
      setSuccessMessage("Failed to update profile. Please try again.");
    }
  };

  useEffect(() => {
    if (!isHydrated) return;
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        street: user?.street || "",
        addressLine1: user.address || "",
        city: user.city || "",
        zip: user.zip || "",
        country: user.country ? getCountryOptionByCode(user.country) : null,
        phone: user?.phone || "",
      });
    } else {
      router.push("/log-in");
    }
  }, [user, reset, router]);

  return (
    <div className={styles.yourData}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.col1}>
          <h3>Contact</h3>
          <div className={styles.inputWrap}>
            <label>First name:</label>
            <div>
              <input disabled={disabledValue} {...register("firstName")} />
              <p>{errors.firstName?.message}</p>
            </div>
          </div>
          <div className={styles.inputWrap}>
            <label>Last name:</label>
            <div>
              <input disabled={disabledValue} {...register("lastName")} />
              <p>{errors.lastName?.message}</p>
            </div>
          </div>
          <div className={styles.inputWrap}>
            <label>Phone:</label>
            <div>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={"us"}
                    onChange={(value) => setValue("phone", value)}
                  />
                )}
              />
              <p>{errors.phone?.message}</p>
            </div>
          </div>
          <div className={styles.inputWrap}>
            <label>Email:</label>
            <div>
              <input
                disabled={disabledValue}
                {...register("email")}
                type="email"
              />
              <p>{errors.email?.message}</p>
            </div>
          </div>
        </div>

        <div className={styles.col2}>
          <h3>Address</h3>
          <div className={styles.inputWrap}>
            <label>Street address:</label>
            <div>
              <input disabled={disabledValue} {...register("street")} />
              <p>{errors.street?.message}</p>
            </div>
          </div>
          <div className={styles.inputWrap}>
            <label>Apartment/Suite:</label>
            <div>
              <input disabled={disabledValue} {...register("addressLine1")} />
              <p>{errors.addressLine1?.message}</p>
            </div>
          </div>
          <div className={styles.inputWrap}>
            <label>City:</label>
            <div>
              <input disabled={disabledValue} {...register("city")} />
              <p>{errors.city?.message}</p>
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label>Country:</label>
            <div>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={filteredCountries}
                    onChange={(value) => field.onChange(value)}
                    disabled={disabledValue}
                    styles={customStyles}
                  />
                )}
              />
              <p>{errors.country?.message}</p>
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label>ZIP:</label>
            <div>
              <input disabled={disabledValue} {...register("zip")} />
              <p>{errors.zip?.message}</p>
            </div>
          </div>
        </div>

        <div className={styles.buttonWrap}>
          <button
            disabled={disabledValue}
            type="submit"
            className={styles.save}
          >
            Save
          </button>
          <span
            className={styles.edit}
            onClick={() => setDisabled(!disabledValue)}
          >
            <EditIcon />
          </span>
        </div>
      </form>

      {successMessage && (
        <p style={{ marginTop: "15px", color: "green", fontSize: "14px" }}>
          {successMessage}
        </p>
      )}
    </div>
  );
}
