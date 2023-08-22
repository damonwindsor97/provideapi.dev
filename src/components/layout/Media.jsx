import Carousel from 'react-bootstrap/Carousel';


const Media = () => {
  return (
    <div className='m-5'>

      <Carousel>
      <Carousel.Item>
      <iframe className='w-100 rounded' height="500" src="https://www.youtube.com/embed/XNhJnSbG_Is" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <iframe className='w-100 rounded' height="500" src="https://www.youtube.com/embed/cyq23QhrZns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <iframe className='w-100 rounded' height="500" src="https://www.youtube.com/embed/6JQevZuhE-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Carousel.Caption>
          <p>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Media