import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <>
      <nav class="navbar bg-primary" data-bs-theme="dark">
        <div class="container d-flex justify-content-center">
          <a class="navbar-brand" style={{
            fontSize: "24px"
          }} href="#">
            Task 3:Video Conferencing Website
          </a>
        </div>
      </nav>
      <div className="container d-flex"
        style={{
          marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <input
        style={{
          marginRight: "15px",
          paddingLeft: "40px",
        }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button className="btn btn-primary border border-dark rounded" onClick={handleJoinRoom}>
          Connect
        </button>
      </div>
    </>
  );
};

export default HomePage;
