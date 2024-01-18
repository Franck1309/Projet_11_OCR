import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userEdit } from "../actions/userData.action";

const EditForm = () => {
  const dispatch = useDispatch();
  const tokenLocal = window.localStorage.getItem("tokenLocal");
  const dataUserLog = useSelector((state) => state.userReducer);
  const [isEditing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const handleEditClick = () => {
    setEditing(true);
    
    setFormData({
      userName: dataUserLog.userName,
      firstName: dataUserLog.firstName,
      lastName: dataUserLog.lastName,
    });
  };

  const handleCancelForm = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedUserData = {
      userName: formData.userName,
    };

    dispatch(userEdit(tokenLocal, updatedUserData));
    setEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {dataUserLog.firstName} {dataUserLog.lastName}!
        </h1>
        {!isEditing && (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        )}
      </div>
      {isEditing && (
        <form onSubmit={handleFormSubmit} className="sign-in-content">
          <h2>Edit User Info</h2>
          <div className="input-wrapper">
            <label htmlFor="userName">
              User Name:
              <input
                type="text"
                id="userName"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                id="firstName"
                defaultValue={formData.firstName}
                readOnly
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                id="lastName"
                defaultValue={formData.lastName}
                readOnly
              />
            </label>
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
          <span> </span>
          <button onClick={handleCancelForm} className="cancel-button">
            Cancel
          </button>
        </form>
      )}
    </main>
  );
};

export default EditForm;
