import styles from "./Checkout.module.scss";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { filteredCountries } from "@/helpers/excludedCountries";

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

const BillingForm = ({ formMethods }) => {
  const { user, updateUser, isHydrated } = useAuthStore();
  const router = useRouter();
  const {
    register,
    control,
    reset,
    formState: { errors },
  } = formMethods;

  /*useEffect(() => {
    if (!isHydrated) return;
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        street: user?.street || "",
        adress: user.address || "",
        city: user.city || "",
        postalCode: user.zip || "",
        country: user.country ? getCountryOptionByCode(user.country) : null,
        phone: user?.phone || "",
      });
    }
  }, [user, reset]);*/

  return (
    <div className={styles.billingForm}>
      <div className={styles.inputWrap}>
        <label>First name:</label>
        <div>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className={errors.firstName ? styles.error : ""}
          />
          <p>{errors.firstName?.message}</p>
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>Last Name:</label>
        <div>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className={errors.lastName ? styles.error : ""}
          />
          <p>{errors.lastName?.message}</p>
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>City:</label>
        <div>
          <input
            type="text"
            id="city"
            {...register("city")}
            className={errors.city ? styles.error : ""}
          />
          <p>{errors.city?.message}</p>
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>Address 1: </label>
        <div>
          <input
            type="text"
            id="street"
            {...register("street")}
            className={errors.street ? styles.error : ""}
          />
          <p>{errors.street?.message}</p>
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
                styles={customStyles}
              />
            )}
          />
          <p>{errors.country?.message}</p>
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>Address 2: </label>
        <div>
          <input
            type="text"
            id="address"
            {...register("address")}
            className={errors.address ? styles.error : ""}
          />
          <p>{errors.address?.message}</p>
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>ZIP:</label>
        <div>
          <input
            type="text"
            id="postalCode"
            {...register("postalCode")}
            className={errors.postalCode ? styles.error : ""}
          />
          <p>{errors.postalCode?.message}</p>
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
          <p>{errors.email?.phone}</p>
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>ZIP:</label>
        <div>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={errors.email ? styles.error : ""}
          />
          <p>{errors.email?.message}</p>
        </div>
      </div>
      <div className={styles.inputWrap}>
        <label className={styles.paymentInfo}>
          * After placing your order, you'll receive an email with payment
          instructions, including our bank details and a summary of your order.{" "}
        </label>
      </div>

      <div className={styles.inputWrap}>
        <label>Message:</label>
        <div>
          <textarea id="orderNotes" {...register("orderNotes")} />
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
