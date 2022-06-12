import styles from "./Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Thanks from "../Thanks/Thanks";
import RatingForm from "../RatingForm/RatingForm";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSetRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      return alert('you must select a rating before submitting');
    }

    setSubmitted(true);

  }

  return (
    <div className={styles.container}>
      {submitted ? <Thanks rating={rating} /> : <RatingForm handleSetRating={handleSetRating} rating={rating} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default Rating;
