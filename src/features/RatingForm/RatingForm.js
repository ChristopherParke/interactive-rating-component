import styles from "./RatingForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const RatingForm = (props) => {

  const handleSetRating = (value) => {
    props.handleSetRating(value);
  };

  const handleSubmit = (e) => {
    props.handleSubmit(e);
  };

  return (
    <Fragment>
      <div className={styles.starContainer}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <h1 className={styles.how}>How did we do?</h1>
      <p className={styles.p}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.numberContainer}>
        {props.rating === 1 ? (
          <span className={styles.numberActive}>1</span>
        ) : (
          <span className={styles.number} onClick={() => handleSetRating(1)}>
            1
          </span>
        )}
        {props.rating === 2 ? (
          <span className={styles.numberActive}>2</span>
        ) : (
          <span className={styles.number} onClick={() => handleSetRating(2)}>
            2
          </span>
        )}
        {props.rating === 3 ? (
          <span className={styles.numberActive}>3</span>
        ) : (
          <span className={styles.number} onClick={() => handleSetRating(3)}>
            3
          </span>
        )}
        {props.rating === 4 ? (
          <span className={styles.numberActive}>4</span>
        ) : (
          <span className={styles.number} onClick={() => handleSetRating(4)}>
            4
          </span>
        )}
        {props.rating === 5 ? (
          <span className={styles.numberActive}>5</span>
        ) : (
          <span className={styles.number} onClick={() => handleSetRating(5)}>
            5
          </span>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={(event) => handleSubmit(event)}
        >
          SUBMIT
        </button>
      </div>
    </Fragment>
  );
};

export default RatingForm;
