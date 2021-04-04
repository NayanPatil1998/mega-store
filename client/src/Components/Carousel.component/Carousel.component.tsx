import "./Carousel.component.css";

const Carousel: React.FunctionComponent = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              width="100%"
              className="img-fluid"
              height="100%"
              src="https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>Men Clothing</h1>
                <p>
                  Photo by{" "}
                  <a href="https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Jonathan Borba
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/s/photos/men-fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              width="100%"
              height="100%"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt=""
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>Women Clothing</h1>
                <p>
                  Photo by{" "}
                  <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    freestocks
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/s/photos/fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              width="100%"
              height="100%"
              className="img-fluid"
              src="https://images.unsplash.com/photo-1584377334016-464803e03b80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>Jewellery</h1>
                <p>
                  Photo by{" "}
                  <a href="https://unsplash.com/@kzzljhn00?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Kazzle John Delbo
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/s/photos/jewelry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
