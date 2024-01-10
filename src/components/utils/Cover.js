import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { AuthService } from "../../utils/authService";

const Cover = ({ name, coverImg }) => {
  const authService = new AuthService();
  if ((name, coverImg)) {
    return (
      <div
        className="d-flex justify-content-center flex-column text-center "
        style={{ background: "#000", minHeight: "100vh" }}
      >
        <div className="mt-auto text-light mb-5">
          <div
            className=" ratio ratio-1x1 mx-auto mb-2"
            style={{ maxWidth: "320px" }}
          >
            <img src={coverImg} alt="" />
          </div>
          <h1>{name}</h1>
          <p>Please login with your Google account to create a SUI account for you</p>
          <Button
            onClick={() => authService.login()}
            variant="outline-light"
            className="rounded-pill px-3 mt-3"
          >
            Login with Google
          </Button>
        </div>
        <p className="mt-auto text-secondary">Powered by SUI</p>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
