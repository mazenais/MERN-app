import React from 'react'

const Home = () => {
        return isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <section className="cards">
              {items.users.map((item) => (
                <UserProfile key={item.id} item={item}></UserProfile>
              ))}
            </section>
          );
    )
}

export default Home
