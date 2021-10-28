import React, { useState, useEffect } from "react";
import UserProfile from './UserProfile';
import axios from "axios";

const MyProfile = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem("token");
      const config = {
        method: "get",
        url: "http://localhost:5000/api/users/616cd9120931a6fe01962985",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios(config);

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section >
      {/* {items && items.map((item) => (
          <UserProfile key={item._id} item={item}></UserProfile>

      ))} */}
      <h3>Name: {items?.name}</h3>
      <h3>Email: {items?.email}</h3>
    </section>
  );
};

export default MyProfile;
