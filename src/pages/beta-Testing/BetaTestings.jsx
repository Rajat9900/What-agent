import { useNavigate } from "react-router-dom";
import styles from "../styles/style.module.css";
import { useForm } from "react-hook-form";
import logoIcon from "../../assets/logoIcon.svg";
import { FaArrowRight } from "react-icons/fa6";
import msgicon from "../../assets/msgicon.svg";
import greenTick from "../../assets/greenTick.svg";
const BetaTestings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Email submitted: ", data.email);
    navigate("/thanksMsg");
  };
  return (
    <div className={styles.mainDiv}>
      <form className={styles.subMaindiv} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.firstDivBeta}>
          What{" "}
          <span>
            <img src={logoIcon} />
          </span>{" "}
          <h1>Agent</h1>
        </div>
        <h1 className={styles.SeconDivBeta}>
          THE <span>FUTURE </span>IS HERE!
        </h1>
        <p className={styles.ThirdDivBeta}>
          Enter your email below to join the beta testing waitlist
        </p>

        <div className={styles.ForthDivBeta}>
          <div className={styles.forthFirstSubDiv}>
            <img src={msgicon} />
          </div>
          <div className={styles.ForthSubDiv}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Figmadesign@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.ForthSubDivlast}>
            <img src={greenTick} />
          </div>
        </div>
        <p className={styles.fifthDivBeta}>
          What are your hopes, dreams, desires?
        </p>
        <button className={styles.sixthtDivBeta} type="submit">
          Join the beta testing waitlist{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </form>
    </div>
  );
};

export default BetaTestings;
