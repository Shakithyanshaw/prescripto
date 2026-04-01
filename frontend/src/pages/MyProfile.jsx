import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    image: assets.profile_pic,
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address: {
      line1: '123 Main St',
      line2: 'Apt 4B',
    },
    gender: 'Male',
    dob: '1990-01-01',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt={userData.name} />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
    </div>
  );
};

export default MyProfile;
