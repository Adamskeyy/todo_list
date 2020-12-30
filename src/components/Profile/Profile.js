import React from "react";

import { Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  // const [error, setError] = useState("");
  const { currentUser } = useAuth();
  // const history = useHistory();
  // async function handleLogout() {
  //   setError("");
  //   try {
  //     await logout();
  //     history.push(`${process.env.PUBLIC_URL}/login`);
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <strong>{currentUser.email}</strong>
          <Link
            to={`${process.env.PUBLIC_URL}/update-profile`}
            className="btn btn-primary w-100 mt-3"
          >
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        {/* <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
      </div>
    </>
  );
}

export default Profile;
