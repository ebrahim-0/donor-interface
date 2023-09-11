import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../../Hook/useGet";
import { auth } from "../../Auth";
export default function TestLogin() {
  const navigate = useNavigate();

  const { role } = useGet("");

  useEffect(() => {
    (() => {
      setTimeout(async () => {
        if (role.length >= 0) {
          if (role === "") {
            if (role.length === 0) {
              navigate("/");
            }
          } else {
            try {
              await signOut(auth);
              console.log("User logout");
              // Redirect to the login page after signing out
              navigate("/login");
              window.location.reload();
            } catch (error) {
              console.log(error.message);
            }
          }
        }
      }, 500);
    })();
  }, [role, navigate]);

  // return <></>;
}
