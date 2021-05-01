import React from 'react'

function Welcome({user, Logout}) {
    return (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default Welcome
