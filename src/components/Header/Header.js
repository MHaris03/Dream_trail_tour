import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";
import { HashLink } from "react-router-hash-link";

import classes from "./Header.module.css";
import TourButton from "../TourButton/TourButton";
import logo from "../../images/LOGO 1.png";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const history = useHistory();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const fetchUserData = async () => {
      if (user.email) {
        try {
          const userRef = collection(db, "Users");
          const snapshot = await getDocs(
            query(userRef, where("email", "==", user.email))
          );

          if (!snapshot.empty) {
            snapshot.forEach((doc) => {
              const userData = doc.data();
              setUserName(userData?.UserName);
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user.email]);
  return (
    <header className="fixed-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${classes.navbar} navbar`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className={classes.logoContainer}>
            <img src={logo} className="d-inline-block align-top" alt="logo" /> <span>   Dream Trail</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`ms-auto ${classes.navLinkContainer} align-items-center`}
            >
              <Nav.Link
                eventKey="1"
                exact
                as={NavLink}
                to="/"
                activeClassName={classes.active}
              >
                Home
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                as={HashLink}
                smooth to="/contactus#"
                activeClassName={classes.active}
              >
                Contactus
              </Nav.Link>
              {user.email ? (
                <>
                  <Nav.Link
                    eventKey="3"
                    as={HashLink}
                    smooth to="/my-orders#"
                    activeClassName={classes.active}
                  >
                    My Orders
                  </Nav.Link>
                  {user.email === "dream_trail_tour@outlook.com" && (
                    <>
                      <Nav.Link
                        eventKey="4"
                        as={HashLink}
                        smooth to="/manage-all-orders#"
                        activeClassName={classes.active}
                      >
                        Manage All Orders
                      </Nav.Link>
                      <Nav.Link
                        eventKey="5"
                        as={HashLink}
                        smooth to="/add-new-service#"
                        activeClassName={classes.active}
                      >
                        Add A New Tour
                      </Nav.Link>
                    </>
                  )}
                  <TourButton color="green" onClick={logout}>
                    {userName ? `${userName} Logout` : "Logout"}
                  </TourButton>
                  <img
                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    alt="userimg"
                    className={classes.userImg}
                  />
                  {/* )} */}
                </>
              ) : (
                <TourButton
                  onClick={() => history.push("/login")}
                  color="green"
                >
                  Login
                </TourButton>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
