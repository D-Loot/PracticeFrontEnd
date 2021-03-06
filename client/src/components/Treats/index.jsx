import { useMutation } from "@apollo/client";
import React from "react";
import { Button, Label } from "semantic-ui-react";
import { TREAT_POST } from "../../utils/mutation.js";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./treat.css";

const TreatBtn = ({ postId, treatCount }) => {
  const [treatPost, { error }] = useMutation(TREAT_POST, {
    refetchQueries: ["getPosts"],
  });

  const clickedTreat = async (event) => {
    event.preventDefault();
    try {
      const { data } = await treatPost({
        variables: {
          postId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <div labelposition="right">
          <Button onClick={clickedTreat} color="orange">
            <i className="fas fa-bone">&nbsp;&nbsp;</i>
            Treat
          </Button>
          <Label as="a" basic color="orange" pointing="left" name="treatCount">
            {treatCount}
          </Label>
        </div>
      ) : (
        <div className="signInText">
          <div>
            You need to be logged in to give Treats! Please{" "}
            <Link to="/login">login</Link> or{" "}
            <Link to="/register">signup.</Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default TreatBtn;
