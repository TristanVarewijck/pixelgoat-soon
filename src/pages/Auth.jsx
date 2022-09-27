import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Auth({ authenticate, setUser }) {
  const navigate = useNavigate();

  function clickHandler(e) {
    e.preventDefault();
    const userLogged = e.target.user.value;
    async function getUsers() {
      const colRef = collection(db, "users");
      const docsSnap = await getDocs(colRef);
      docsSnap.docs.map((doc) => {
        const savedUser = doc.data().user;

        if (savedUser === userLogged) {
          authenticate();
          navigate("/private");
          setUser(userLogged);
        }
      });
    }

    getUsers();
  }
  return (
    <Form onSubmit={clickHandler} className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Authorization</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter authorization code"
          name="user"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Auth;
