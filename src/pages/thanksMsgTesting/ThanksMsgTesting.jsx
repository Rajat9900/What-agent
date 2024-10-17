import styles from "../styles/style.module.css";
import IconLogo from "../../assets/IconLogo.svg";
import { TiTick } from "react-icons/ti";
const ThanksMsgTesting = () => {
  return (
    <div className={styles.mainDiv1}>
      <div className={styles.subMaindiv1}>
        <div className={styles.firstDivBeta1}>
          What{" "}
          <span>
            <img src={IconLogo} />
          </span>{" "}
          <h1>Agent</h1>
        </div>
        <h1 className={styles.SeconDivBeta1}>
          Thank you for joining the waitlist!
        </h1>

        <p className={styles.ThirdDivBeta1}>
          We will be in touch soon{" "}
          <span>
            <TiTick />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThanksMsgTesting;
