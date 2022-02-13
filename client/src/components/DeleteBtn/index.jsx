import { useMutation } from "@apollo/client";
import React from "react";
import { Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import Auth from "../../utils/auth";
import { REMOVE_POST } from "../../utils/mutation.js";
import "./delete.css";

const DeleteBtn = ({ postId }) => {
  const { username: userParam } = useParams();

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
      {Auth.loggedIn() && Auth.getProfile().data.username === userParam ? (
        <Link>
          <Button as="div" labelPosition="right">
            <Button onClick={clickedDelete} color="red">
              <i className="fas fa-bone">&nbsp;&nbsp;</i>
              Treat
            </Button>
          </Button>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default DeleteBtn;
