import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const EditForm = () => {

    const dataUserLog = useSelector((state) => state.userReducer); // Récupération de userData au store
    const [isEditing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
      firstName: dataUserLog.firstName,
      lastName: dataUserLog.lastName,
      userName: dataUserLog.userName,
    });
  
    const handleEditClick = () => {
      setEditing(true);
    };
    const handleCancelForm = () => {
      setEditing(false);
    }
  
    const handleInputChange = (e) => {
      const { id , value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Ajoutez ici la logique pour soumettre les données du formulaire
      // (par exemple, en dispatchant une action Redux)
      setEditing(false);
    };
  

    return (
        <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {dataUserLog.firstName} {dataUserLog.lastName} !
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
            <div className="input-wrapper"><label for="userName">
              User Name:
              <input
                type="text"
                id="userName"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </label></div>
            <div className="input-wrapper"><label for="firstName">
              First Name:
              <input className="input-wrapper"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </label></div>
            <div className="input-wrapper"><label  for="lastName">
              Last Name:
              <input className="input-wrapper"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </label></div>
            <button type="submit" className="edit-button">Save</button>
            <span> </span>
            <button onClick={handleCancelForm} className="edit-button">Cancel</button>
          </form>
        )}
      </main>
    );
};

export default EditForm;