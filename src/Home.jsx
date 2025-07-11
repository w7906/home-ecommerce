import React from "react";
import { Link } from "react-router-dom";
import AvantGardeLamp from "./Assets/AvantGardeLamp.jpg";
import CoffeTable from "./Assets/CoffeTable.jpg";
import ComfyBed from "./Assets/ComfyBed.jpg";
import hotelsofa from "./Assets/hotelsofa.jpg";
import hoteltv from "./Assets/hoteltv.jpg";
import hoteltable from "./Assets/hoteltable.jpg";
import { duplicatedProducts } from "./Product";  

function Home() {
 
  const featuredProducts = [
    { title: "Avant-Garde Lamp", image: AvantGardeLamp, id: 1 },
    { title: "Comfy Bed", image: ComfyBed, id: 2 },
    { title: "Coffee Table", image: CoffeTable, id: 3 },
  ].map((product) => {
   
    const matchedProduct = duplicatedProducts.find(
      (p) => p.title === product.title
    );
    return {
      ...product,
      price: matchedProduct?.price || "0.00",  
    };
  });

  return (
    <div>
      <logo></logo>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-start">
            <h1 className="fw-bold fs-2 w-100">
              We are changing <br />
              the way people <br />
              shop
            </h1>

            <p className="text-secondary fs-5 w-100 fw-bold">
             WELCOM!
            </p>

            <Link to="/product">
              <button className="btn btn-primary mt-3 w-30 fw-bold">
                PRODUCTS
              </button>
            </Link>
          </div>

          <div className="col-12 col-md-6 mt-4 mt-md-0 image-container bg-dark">
  <div
    className="d-flex overflow-auto rounded-5"
    style={{
      maxWidth: "100%",
      scrollBehavior: "smooth",
      scrollSnapType: "x mandatory",
      gap: "1rem", 
    }}
  >
    <div className="flex-shrink-0" style={{ scrollSnapAlign: "center" }}>
      <img
        src={hotelsofa}
        alt="hotelsofa"
        className="img-fluid rounded-2 border border-5 border-dark rounded-5"  
        style={{ width: "300px", height: "400px", objectFit: "cover" }}
      />
    </div>
    <div className="flex-shrink-0" style={{ scrollSnapAlign: "center" }}>
      <img
        src={hoteltable}
        alt="hoteltable"
        className="img-fluid rounded-2 border border-5 border-dark rounded-5"  
        style={{ width: "300px", height: "400px", objectFit: "cover" }}
      />
    </div>
    <div className="flex-shrink-0" style={{ scrollSnapAlign: "center" }}>
      <img
        src={hoteltv}
        alt="hoteltv"
        className="img-fluid rounded-2 border border-5 border-dark rounded-5"  
        style={{ width: "300px", height: "400px", objectFit: "cover" }}
      />
    </div>
  </div>
</div>


        </div>

        <section className="featured-products-section py-5 mt-5 bg-light">
          <div className="container">
            <h2 className="mb-5">Featured Products</h2>
            <div className="row g-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="col-12 col-md-4">
                  <Link to={`/product/${product.id}`} className="text-decoration-none">
                    <div className="card h-100 border-0 shadow">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="card-img-top"
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <h5 className="text-center">${product.price}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
