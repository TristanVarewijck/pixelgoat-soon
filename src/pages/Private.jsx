import Emails from "../components/Table";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import Button from "react-bootstrap/Button";

function Private({ logout }) {
  const [emails, setEmails] = useState([]);
  const colRef = collection(db, "adresses");

  const navigate = useNavigate();
  function clickHandler() {
    logout();
    navigate("/");
  }

  useEffect(() => {
    async function getDocuments() {
      const docsSnap = await getDocs(colRef);
      const emailArray = docsSnap.docs.map((doc) => {
        return doc.data();
      });
      setEmails(emailArray);
    }
    getDocuments();
  }, []);

  return (
    <div className="private m-5">
      <Button onClick={clickHandler}>Back to Home</Button>
      <Emails data={emails} />
    </div>
  );
}

export default Private;
