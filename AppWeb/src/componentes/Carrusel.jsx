import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://donosticity.org/wp-content/uploads/2020/01/02.-SS.-PASEO-MARITIMO.-PORTADA-JOSE-LUIS-DIZ-800x400.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/24/37/K4wNkq.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/proxy/ZsKNd3lTDbVGse-h6SoPWs5kAFULBV6hHTlvQpd-DPczQhRq5rP8R78GvOMAHFDxduwVEFtS2IC-IQUCy046iYBfDc52ADa68U41Qrr0AjNhCHIPq1ULoD_6lPIRu9Q"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;