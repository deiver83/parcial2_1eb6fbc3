export const Inicio = () => {
  return (
    <>
      <div className="p-5 mb-4 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Lorem, ipsum.</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            voluptate ea est at maxime perferendis quia excepturi saepe optio
            neque?
          </p>
        </div>
      </div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/assets/img/concierto1.jpg" className="d-block w-100" alt="Concierto 1" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/concierto2.jpg" className="d-block w-100" alt="Concierto 2" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/concierto3.jpg" className="d-block w-100" alt="Concierto 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
