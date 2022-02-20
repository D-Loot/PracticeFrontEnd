import { useMutation } from "@apollo/client";
import React from "react";
import { Button, Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import Auth from "../../utils/auth";
import { REMOVE_POST } from "../../utils/mutation.js";
import "./delete.css";

const DeleteBtn = ({ postId, user }) => {
  const [deletePost] = useMutation(REMOVE_POST, {
    refetchQueries: ["getPosts"],
  });

  const clickedDelete = async (event) => {
    event.preventDefault();
    try {
      const { data } = await deletePost({
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
      {Auth.loggedIn() && Auth.getProfile().data.username === user ? (
        <div labelposition="right">
          <Button onClick={clickedDelete} color="red">
            <i className="fas fa-bone">&nbsp;&nbsp;</i>
            Delete
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default DeleteBtn;
