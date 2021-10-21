import Button from "elements/Button";
import React from "react";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, key) => {
          return (
            <div key={key} className={`item column-4 ${key === 0 ? "row-2" : "row-1"}`}>
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="streched-link d-block text-white"
                    type="link"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.citiy}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}