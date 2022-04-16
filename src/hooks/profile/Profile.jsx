import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Card } from "react-bootstrap";

const Profile = () => {
  const { username, isLoggedIn } = useContext(UserContext);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://pyxis.nymag.com/v1/imgs/a22/179/b205a78510315d932427143ad6b6fb5694-03-homer-simpson-doughnuts.rsquare.w700.jpg"
      />
      <Card.Body>
        <Card.Title>
          {username} is logged in {isLoggedIn ? "yes" : "no"}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Profile;
