import React, { useState } from 'react';

const ProfileEntryPage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profile.name || !profile.email || !profile.bio) {
      setError(true);
    } else {
      setError(false);
      setSubmitted(true);
      // handle real submission (API, etc.) here
    }
  };

  const successMessage = () =>
    submitted && (
      <div className="success">
        <h1>Profile successfully created for {profile.name}!</h1>
      </div>
    );

  const errorMessage = () =>
    error && (
      <div className="error">
        <h1>Please enter all the fields.</h1>
      </div>
    );

  return (
    <div className="profile-entry">
      <h1>User Profile Entry</h1>
      {errorMessage()}
      {successMessage()}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
        <label>Bio</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileEntryPage;
