import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
