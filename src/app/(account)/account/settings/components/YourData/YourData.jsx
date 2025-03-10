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
import styles from "./YourData.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { filteredCountries } from "@/helpers/excludedCountries";
import EditIcon from "@/shared/icons/EditIcon";
import useCountryCode from "@/helpers/useCountryCode";

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

export default function YourData() {
  const {
    thanksPopupDisplay,
    setThanksPopupDisplay,
    setThanksPopupDefaultDisplay,
  } = usePopupStore();
  const { user, updateUser, isHydrated } = useAuthStore();
  const [userCountry, setUserCountry] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const countryCode = useCountryCode();

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
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      address1: user?.address1 || "",
      address2: user?.address || "",
      city: user?.city || "",
      zip: user?.zip || "",
      country: null,
      phone: user?.phone || "",
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const userUpdatePayload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address1: data.address1,
        address: data.address2,
        city: data.city,
        zip: data.zip,
        country: data.country.value,
        phone: data.phone,
      };
      await updateUser(userUpdatePayload);
      //setThanksPopupDefaultDisplay(true);
      setSuccessMessage("Profile updated successfully");
    } catch (error) {
      setSuccessMessage("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isHydrated) return;
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        address1: user?.address1 || "",
        address2: user.address || "",
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
        <div className={styles.formGroup}>
          <label>First name</label>
          <div>
            <input
              {...register("firstName")}
              placeholder="Enter your first name"
            />
            <p>{errors.firstName?.message}</p>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Last name</label>
          <div>
            <input
              {...register("lastName")}
              placeholder="Enter your last name"
            />
            <p>{errors.lastName?.message}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="example@gmail.com"
            />
            <p>{errors.email?.message}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <div>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country={countryCode}
                  value={phoneValue}
                  className={`${styles.phoneWrap} ${
                    errors.email && styles.invalid
                  }`}
                  onChange={(phone) =>
                    setValue("phone", phone, {
                      shouldTouch: true,
                      shouldValidate: true,
                    })
                  }
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    placeholder: "Phone Number",
                  }}
                  containerClass={errors.phone ? styles.invalid : ""}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Address line 1</label>
          <div>
            <input
              {...register("address1")}
              placeholder="Enter your adress line 1"
            />
            <p>{errors.address1?.message}</p>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Address line 2</label>
          <div>
            <input
              {...register("address2")}
              placeholder="Enter your adress line 2"
            />
            <p>{errors.address2?.message}</p>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>City</label>
          <div>
            <input {...register("city")} placeholder="Enter your city" />
            <p>{errors.city?.message}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Country</label>
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
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                />
              )}
            />
            <p>{errors.country?.message}</p>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Postal code</label>
          <div>
            <input {...register("zip")} placeholder="Enter your postal code" />
            <p>{errors.zip?.message}</p>
          </div>
        </div>

        <button type="submit" className={styles.save}>
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </form>

      {successMessage && (
        <p
          style={{
            marginTop: "15px",
            color: "#fff",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {successMessage}
        </p>
      )}
    </div>
  );
}
