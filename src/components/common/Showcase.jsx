import '../../styles/index.css'

const Showcase = () => {
  return (
    <div className="myShowcase mb-5">
      <img className="background-image" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="gaming"/>

      <div className="overlay">
        <h1 className="myShowcaseHeading">PROVIDE</h1>
        <p className='p-1 myShowcaseText'>Bring ease, to your cheating experience</p>
      </div>


    </div>
  )
}

export default Showcase