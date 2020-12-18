import React from "react";

function DisplayUserDetail() {
  return (
    <div>
      <div className="card">
        <div
          style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            position: "relative",
          }}
        >
          <img
            src="https://d279m997dpfwgl.cloudfront.net/wp/2020/07/Emmanuel-1000x776.jpg"
            className="card-img-top mx-auto"
            alt="..."
            style={{
              borderRadius: "50%",
              width: "170px",
              height: "170px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <i className="fas fa-pencil-alt position-absolute bottom-0 start-50 translate-middle-x text-primary hoverable" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Image"></i>
        </div>

        <div className="card-body " style={{ padding: "5px 16px" }}>
          <h4 className="card-title text-primary text-center">@james</h4>
          <p className="card-text text-center" style={{ marginBottom: "5px" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p style={{ marginBottom: "5px" }} className="text-center">
            <i
              className="fas fa-map-marker-alt text-primary"
              style={{ marginRight: "10px" }}
            ></i>
            Lagos, Nigeria
          </p>
          <p className="text-center">
            <i
              className="far fa-calendar-alt text-primary"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            joined May 2010
          </p>
          <div className="d-flex justify-content-between">
            <p>
              <i className="fas fa-sign-out-alt text-primary hoverable" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Signout"></i>
            </p>
            <p>
              <i className="fas fa-pencil-alt text-primary hoverable" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Bio"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayUserDetail;
