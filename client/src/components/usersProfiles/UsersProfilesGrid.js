import React, { useState, useEffect }  from 'react'
import UserProfile from './UserProfile';
import axios from 'axios'

const UsersProfilesGrid = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://localhost:5000/api/users`);

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
    return isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="cards">
          {items && items.map((item) => (
              <UserProfile key={item._id} item={item}></UserProfile>

          ))}
        </section>
      );
}

export default UsersProfilesGrid
