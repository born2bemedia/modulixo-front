"use client";
import styles from "./Checkout.module.scss";

const TermsAndConditions = ({ formMethods, isSubmitting, submitError }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <>
      <div className={styles.orderSubmit}>
        <div className={styles.terms}>
          <div>
            <label>
              <input
                className={errors.terms ? styles.error : ""}
                type="checkbox"
                {...register("terms")}
              />
              <span>
                I have read and agree to Modulixo’s Terms and Conditions.
              </span>
            </label>
          </div>

          <div>
            <label>
              <input
                className={errors.refundPolicy ? styles.error : ""}
                type="checkbox"
                {...register("refundPolicy")}
              />{" "}
              <span>I have read and agree to the Refund Policy.</span>
            </label>
          </div>
        </div>
        <button type="submit" disabled={isSubmitting}>
          <div>
            <span>{isSubmitting ? "Loading..." : "Pay"}</span>
          </div>
        </button>
      </div>
      {submitError && (
        <div
          style={{
            color: "red",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {submitError}
        </div>
      )}
    </>
  );
};

export default TermsAndConditions;
