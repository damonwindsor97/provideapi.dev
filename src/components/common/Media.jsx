import { Row, Col } from 'react-bootstrap';


const Media = () => {
  return (
    <div className='m-5 media'>
        <h3>Media</h3>

      <Row>
        <Col className='mb-5'>
          <iframe className='w-100 rounded m-2' height="500" src="https://www.youtube.com/embed/XNhJnSbG_Is" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>

        <Col>
          <iframe className='w-100 rounded m-2' height="500" src="https://www.youtube.com/embed/cyq23QhrZns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>

      <Row className='mb-5'>
        <Col>
          <iframe className='w-100 rounded m-2' height="500" src="https://www.youtube.com/embed/6JQevZuhE-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
        
        <Col>
          <iframe className='w-100 rounded m-2' height="500" src="https://www.youtube.com/embed/YeTAuKk7H44?si=CrEMt2vrnYSuJ-xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
        
      </Row>

      <Row className='mb-b'>
        <Col>
        <iframe className='w-100 rounded m-2' height="500" src="https://www.youtube.com/embed/zLFWpcj277A?si=qXMpzcDxoz5Qo_d7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
  )
}

export default Media