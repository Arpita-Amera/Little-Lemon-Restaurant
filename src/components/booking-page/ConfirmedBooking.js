import { Link } from "react-router-dom";

import SuccessIcon from "../ui/icons/SuccessIcon";

import classes from "./ConfirmedBooking.module.css";

export default function ConfirmedBooking({ makeNewReservation }) {
  return (
    <div className={classes.formConfirmation}>
      <div className={classes.confirmationMessage}>
        <SuccessIcon />
        <h2>Booking Confirmed!</h2>
        <p>You have successfully reserved a table!</p>
        <p>Thank you for booking with us. We look forward to seeing you.</p>
      </div>
      
      <div className={classes.confirmationActions}>
      <button>
          <Link
            to="/booking-page"
            onClick={() => makeNewReservation(true)}
          >
            Make a new table reservation
          </Link>
          </button>
      </div>

      <div className={classes.actions}>
          <Link to="/">Go to Home page</Link>
        </div>
    </div>
  );
}
