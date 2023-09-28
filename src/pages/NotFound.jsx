import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1 className="m-5">Error 404</h1>
      <p className="m-5">This page could not be found, please navigate <Link to='/'>Back Home</Link> </p>
    </div>
  )
}

export default NotFound