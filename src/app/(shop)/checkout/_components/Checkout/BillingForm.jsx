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
import CustomPhoneInput from "@/shared/ui/CustomPhoneInput/CustomPhoneInput";
import useCountryCode from "@/helpers/useCountryCode";
import CountrySelect from "@/shared/ui/CountrySelect/CountrySelect";
import PrivacyIcon from "@/shared/icons/PrivacyIcon";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const BillingForm = ({ formMethods }) => {
  const { user, updateUser, isHydrated } = useAuthStore();
  const router = useRouter();
  const countryCode = useCountryCode();

  const {
    register,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = formMethods;

  const phoneValue = watch("phone");

  /*useEffect(() => {
    if (!isHydrated) return;
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        address1: user?.address1 || "",
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
        <label>
          First name
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName.message}</span>
          )}
        </label>
        <div>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className={errors.firstName ? styles.invalid : ""}
            placeholder="Enter your first name"
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>
          Last Name
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName.message}</span>
          )}
        </label>
        <div>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className={errors.lastName ? styles.invalid : ""}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>
          Address line 1
          {errors.address1 && (
            <span className={styles.error}>{errors.address1.message}</span>
          )}
        </label>
        <div>
          <input
            type="text"
            id="address1"
            {...register("address1")}
            className={errors.address1 ? styles.invalid : ""}
            placeholder="Enter your address line 1"
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>
          Address line 2
          {errors.address2 && (
            <span className={styles.error}>{errors.address2.message}</span>
          )}
        </label>
        <div>
          <input
            type="text"
            id="address2"
            {...register("address2")}
            className={errors.address2 ? styles.invalid : ""}
            placeholder="Enter your address line 2"
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>
          City
          {errors.city && (
            <span className={styles.error}>{errors.city.message}</span>
          )}
        </label>
        <div>
          <input
            type="text"
            id="city"
            {...register("city")}
            className={errors.city ? styles.invalid : ""}
            placeholder="Enter your city"
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>
          Country
          {errors.country && (
            <span className={styles.error}>{errors.country.message}</span>
          )}
        </label>
        <div className={styles.countryWrap}>
          <Controller
            name="country"
            control={control}
            render={({ field }) => <CountrySelect field={field} />}
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>
          Postal code
          {errors.postalCode && (
            <span className={styles.error}>{errors.postalCode.message}</span>
          )}
        </label>
        <div>
          <input
            type="text"
            id="postalCode"
            {...register("postalCode")}
            className={errors.postalCode ? styles.invalid : ""}
            placeholder="Enter your postal code"
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>
          Phone Number
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </label>
        <div className={styles.phoneWrapper}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <CustomPhoneInput
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

      <div className={styles.inputWrap}>
        <label>
          Email
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </label>
        <div>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={errors.email ? styles.invalid : ""}
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>Payment method</label>
        <div>
          <div className={styles.paymentMethod}>Bank Transfer*</div>
        </div>
      </div>

      <div className={styles.inputWrap}>
        <label>Message</label>
        <div>
          <textarea
            id="orderNotes"
            {...register("orderNotes")}
            placeholder="Add special notes for your order"
          />
        </div>
      </div>
      <div className={styles.privacy}>
        <PrivacyIcon />
        <p>
          After placing your order, you'll receive an email with payment
          instructions, including our bank details and a summary of your order.
        </p>
      </div>
    </div>
  );
};

export default BillingForm;
