import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Link to='/create-event'>
        <button>Create event</button>
      </Link>
      <Link to='/join-event'>
        <button>Join event</button>
      </Link>
    </>
  )
}

export default Home
