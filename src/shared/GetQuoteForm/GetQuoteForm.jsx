"use client";
import useCountryCode from "@/helpers/useCountryCode";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import styles from "./GetQuoteForm.module.scss";
import ButtonArrow from "../icons/ButtonArrow";
import PrivacyIcon from "../icons/PrivacyIcon";
import usePopupStore from "@/stores/popupStore";
import ThanksPopup from "../ThanksPopup/ThanksPopup";
import ItemTitle from "../ui/ItemTitle/ItemTitle";

// Updated Validation Schema with new file field and conditional validation
const schema = yup.object().shape({
  firstName: yup.string().required("This field is required!"),
  lastName: yup.string().required("This field is required!"),
  email: yup
    .string()
    .email("Invalid email address.")
    .required("This field is required!"),
  phone: yup
    .string()
    .notRequired()
    .test("phone", "Invalid phone number", (value) => {
      if (!value || value.trim() === "") return true;
      return /^[0-9]{10,15}$/.test(value);
    }),
  // New fields
  preferredContactMethod: yup.string().notRequired(),
  serviceNeed: yup.string().notRequired(),
  otherService: yup
    .string()
    .when("serviceNeed", (serviceNeed, schema) =>
      serviceNeed === "Other"
        ? schema.required("Please specify your service need.")
        : schema
    ),
  projectType: yup.string().notRequired(),
  projectDescription: yup.string().notRequired(),
  estimatedBudget: yup.string().notRequired(),
  projectDeadline: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .notRequired(),
  urgencyLevel: yup.string().notRequired(),
  fileFormats: yup.array().of(yup.string()).notRequired(),
  revisionsProcess: yup.string().notRequired(),
  freeConsultation: yup.string().notRequired(),
  // New file field – optional, accepts images, PDFs, and docs
  referenceFile: yup.mixed().notRequired(),
  termspopup: yup.bool().oneOf([true], "This field is required!"),
  type: yup.string().notRequired(),
});

const GetQuoteForm = ({ type = "default" }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // New state for tracking file upload status
  const [fileUploaded, setFileUploaded] = useState(false);
  const countryCode = useCountryCode();

  const { thanksPopupDisplay, setThanksPopupDisplay, setGetQuotePopupDisplay } =
    usePopupStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      // New fields default values
      preferredContactMethod: "",
      serviceNeed: "",
      otherService: "",
      projectType: "",
      projectDescription: "",
      estimatedBudget: "",
      projectDeadline: "",
      urgencyLevel: "",
      fileFormats: [],
      revisionsProcess: "",
      freeConsultation: "",
      referenceFile: null,
      termspopup: false,
      type: type,
    },
  });

  const phoneValue = watch("phone");
  const serviceNeedValue = watch("serviceNeed");

  // Destructure the file input registration for proper onChange handling
  const referenceFileRegistration = register("referenceFile");

  const onSubmit = async (data) => {
    console.log("onSubmit triggered", data); // перевіряємо, чи викликається функція
    setLoading(true);
    try {
      const prepareFile = async (file) => {
        if (!file) return null;
        console.log("file", file);
        const data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
        return { filename: file.name, mimeType: file.type, data };
      };
      const fileInput = data.referenceFile;
      const reference = await prepareFile(fileInput[0]);
      const formData = { ...data, reference };

      const response = await fetch("/api/emails/get-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response received:", response);
      if (response.ok) {
        setThanksPopupDisplay(true);
        reset();
      } else {
        console.log("Response error:", response);
        setSuccessMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error in onSubmit:", error);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.getQuoteForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ItemTitle text="01 | Personal & Contact Information" tag="h3" />

          {/* First Name Field */}
          <div className={styles.field}>
            <label htmlFor="firstName">
              First Name *{" "}
              {errors.firstName && (
                <span className={styles.error}>{errors.firstName.message}</span>
              )}
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              placeholder="Enter your first name"
              className={errors.firstName ? styles.invalid : ""}
            />
          </div>

          {/* Last Name Field */}
          <div className={styles.field}>
            <label htmlFor="lastName">
              Last Name *
              {errors.lastName && (
                <span className={styles.error}>{errors.lastName.message}</span>
              )}
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              placeholder="Enter your last name"
              className={errors.lastName ? styles.invalid : ""}
            />
          </div>

          {/* Email Field */}
          <div className={styles.field}>
            <label htmlFor="email">
              Email *{" "}
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={errors.email ? styles.invalid : ""}
            />
          </div>

          {/* Phone Number Field */}
          <div className={styles.field}>
            <label htmlFor="phone">
              Phone Number{" "}
              {errors.phone && (
                <span className={styles.error}>{errors.phone.message}</span>
              )}
            </label>
            <PhoneInput
              country={countryCode}
              value={phoneValue}
              className={`${styles.phoneWrap} ${
                errors.phone && styles.invalid
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
          </div>

          {/* Preferred Contact Method - radio */}
          <div className={styles.field}>
            <label>Preferred Contact Method </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="Email"
                  {...register("preferredContactMethod")}
                />
                <span>Email</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Phone"
                  {...register("preferredContactMethod")}
                />
                <span>Phone</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="WhatsApp/Telegram"
                  {...register("preferredContactMethod")}
                />
                <span>WhatsApp/Telegram</span>
              </label>
            </div>
          </div>

          <ItemTitle text="02 | Project Details" tag="h3" />

          {/* What Service Do You Need? - radio */}
          <div className={styles.field}>
            <label>What Service Do You Need? </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="3D Modelling"
                  {...register("serviceNeed")}
                />
                <span>3D Modelling</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Animation"
                  {...register("serviceNeed")}
                />
                <span>Animation</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Video Production"
                  {...register("serviceNeed")}
                />
                <span>Video Production</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="UI/UX Design"
                  {...register("serviceNeed")}
                />
                <span>UI/UX Design</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Other"
                  {...register("serviceNeed")}
                />
                <span>Other (please specify)</span>
              </label>
            </div>
          </div>

          {/* Conditionally render specification if "Other" is selected */}
          {serviceNeedValue === "Other" && (
            <div className={styles.field}>
              <textarea
                id="otherService"
                {...register("otherService")}
                placeholder="Please specify..."
              ></textarea>
            </div>
          )}

          {/* Project Type - radio */}
          <div className={styles.field}>
            <label>Project Type </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="New Project"
                  {...register("projectType")}
                />
                <span>New Project</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Ongoing Project"
                  {...register("projectType")}
                />
                <span>Ongoing Project</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Consultation Only"
                  {...register("projectType")}
                />
                <span>Consultation Only</span>
              </label>
            </div>
          </div>

          {/* Describe Your Project - textarea */}
          <div className={styles.field}>
            <label htmlFor="projectDescription">Describe Your Project</label>
            <textarea
              id="projectDescription"
              {...register("projectDescription")}
              placeholder="Describe your project"
            />
          </div>

          {/* New File Upload Field for Reference/Mood Board */}
          <div className={styles.field}>
            <label>Do You Have a Reference or Mood Board?</label>
            <div className={styles.fileUpload}>
              <label htmlFor="referenceFile" className={styles.uploadLabel}>
                {fileUploaded ? (
                  <div className={styles.uploadButton}>
                    <img
                      width={48}
                      height={48}
                      src="/images/icons/success.svg"
                      alt="success"
                    />
                    <h4>File uploaded successfully!</h4>
                  </div>
                ) : (
                  <div className={styles.uploadButton}>
                    <img src="/images/icons/upload.svg" alt="Upload" />
                    <h4>File Upload </h4>
                    <p>Accepts images, PDFs, and docs</p>
                  </div>
                )}
              </label>
              <input
                id="referenceFile"
                type="file"
                accept="image/*,application/pdf,.doc,.docx"
                style={{ display: "none" }}
                {...referenceFileRegistration}
                onChange={(e) => {
                  referenceFileRegistration.onChange(e);
                  setFileUploaded(e.target.files && e.target.files.length > 0);
                }}
              />
            </div>
          </div>

          <ItemTitle text="03 | Budget & Timeline" tag="h3" />

          {/* Estimated Budget - radio */}
          <div className={styles.field}>
            <label>Estimated Budget </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="<€500"
                  {...register("estimatedBudget")}
                />
                <span>&lt;€500</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="€500-€2,000"
                  {...register("estimatedBudget")}
                />
                <span>€500-€2,000</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="€2,000-€5,000"
                  {...register("estimatedBudget")}
                />
                <span>€2,000-€5,000</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="€5,000+"
                  {...register("estimatedBudget")}
                />
                <span>€5,000+</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Flexible"
                  {...register("estimatedBudget")}
                />
                <span>Flexible</span>
              </label>
            </div>
          </div>

          {/* Project Deadline - date picker */}
          <div className={styles.field}>
            <label htmlFor="projectDeadline">Project Deadline </label>
            <input
              id="projectDeadline"
              type="date"
              {...register("projectDeadline")}
            />
          </div>

          {/* Urgency Level - radio */}
          <div className={styles.field}>
            <label>Urgency Level </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="Standard"
                  {...register("urgencyLevel")}
                />
                <span>Standard</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Rush"
                  {...register("urgencyLevel")}
                />
                <span>Rush</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="ASAP"
                  {...register("urgencyLevel")}
                />
                <span>ASAP</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Just Exploring"
                  {...register("urgencyLevel")}
                />
                <span>Just Exploring</span>
              </label>
            </div>
          </div>

          {/* Preferred File Format for Delivery - checkboxes */}
          <div className={styles.field}>
            <label>Preferred File Format for Delivery (Select Multiple)</label>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="PNG"
                  {...register("fileFormats")}
                />
                <span>PNG</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="MP4"
                  {...register("fileFormats")}
                />
                <span>MP4</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="GIF"
                  {...register("fileFormats")}
                />
                <span>GIF</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="OBJ"
                  {...register("fileFormats")}
                />
                <span>OBJ</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="STL"
                  {...register("fileFormats")}
                />
                <span>STL</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Figma"
                  {...register("fileFormats")}
                />
                <span>Figma</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Other"
                  {...register("fileFormats")}
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          <ItemTitle text="04 | Additional Preferences" tag="h3" />

          {/* Revisions & Feedback Process - radio */}
          <div className={styles.field}>
            <label>Revisions & Feedback Process </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="Open to Suggestions"
                  {...register("revisionsProcess")}
                />
                <span>Open to Suggestions</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Strict Guidelines"
                  {...register("revisionsProcess")}
                />
                <span>Strict Guidelines</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Collaboration-Based"
                  {...register("revisionsProcess")}
                />
                <span>Collaboration-Based</span>
              </label>
            </div>
          </div>

          {/* Would You Like a Free Consultation Call? - radio */}
          <div className={styles.field}>
            <label>Would You Like a Free Consultation Call? </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="Yes"
                  {...register("freeConsultation")}
                />
                <span>Yes</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  {...register("freeConsultation")}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className={styles.termspopup}>
            <input
              id="termspopup"
              type="checkbox"
              {...register("termspopup")}
            />
            <label htmlFor="termspopup">
              I agree to the Terms and Conditions and Privacy Policy.
            </label>
            {touchedFields.termspopup && errors.termspopup && (
              <span className={styles.error}>{errors.termspopup.message}</span>
            )}
          </div>

          <input type="hidden" {...register("type")} value={type} />

          {/* Submit Button */}
          <button className={styles.submit} type="submit">
            <span>{loading ? "Sending..." : "Send Request"}</span>
            <ButtonArrow />
          </button>
          <div className={styles.privacy}>
            <PrivacyIcon />
            <p>
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </form>
        {successMessage && (
          <span className={styles.success}>{successMessage}</span>
        )}
      </div>
      <ThanksPopup />
    </>
  );
};

export default GetQuoteForm;
