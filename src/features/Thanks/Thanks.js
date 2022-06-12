import styles from "./Thanks.module.css";
import logo from "../../images/ty.svg";

const Thanks = (props) => {
  return (
    <div className={styles.thanksContainer}>
      <div>
        <img src={logo} alt="" className={styles.icon} />
      </div>
      <div className={styles.ratingTextContainer}>
        <span className={styles.ratingText}>You selected {props.rating} out of 5</span>
      </div>
      <h1 className={styles.thanks}>Thank you!</h1>
      <p className={styles.p}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thanks;
