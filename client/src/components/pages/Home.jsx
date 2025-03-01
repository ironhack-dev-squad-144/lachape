import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import api from '../../api'

export default function Home() {
  return (
    <div className="Home">
      {!api.isLoggedIn() && (
        <div>
          <Button tag={Link} to="/login">
            Login
          </Button>
          <p>Or Signup</p>
        </div>
      )}
      {api.isLoggedIn() && (
        <div>
          <Button tag={Link} to="/dishes">
            Dishes
          </Button>
          <br /> <br />
          <Button tag={Link} to="/tables">
            Tables
          </Button>
          <br /> <br />
          <Button tag={Link} to="/history">
            History
          </Button>
        </div>
      )}
    </div>
  )
}
