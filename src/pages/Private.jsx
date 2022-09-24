import Emails from "../components/Table";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

function Private() {
  const [emails, setEmails] = useState([]);
  const colRef = collection(db, "adresses");

  const headers = [
    { email: "email", key: "email" },
    { check: "check", key: "check" },
  ];

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
    <div className="private">
      <Emails data={emails} />
    </div>
  );
}

export default Private;
