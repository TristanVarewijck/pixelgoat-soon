import Emails from "../components/Table";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Button from "react-bootstrap/Button";

function Private({ logout }) {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    onSnapshot(collection(firebaseApp, "adresses"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      setEmails(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const navigate = useNavigate();
  function clickHandler() {
    logout();
    navigate("/");
  }

  return (
    <div className="private m-5">
      <Button onClick={clickHandler}>Back to Home</Button>
      <Emails data={emails} />
    </div>
  );
}

export default Private;
