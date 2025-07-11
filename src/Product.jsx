import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import hotelsofa from "./Assets/hotelsofa.jpg";
import AvantGardeLamp from "./Assets/AvantGardeLamp.jpg";
import ChicChair from "./Assets/ChicChair.jpg";
import CoffeTable from "./Assets/CoffeTable.jpg";
import ComfyBed from "./Assets/ComfyBed.jpg";
import ContemporarySofa from "./Assets/ContemporarySofa.jpg";
import CuttingEdgeBed from "./Assets/CuttingEdgeBed.jpg";
import FuturisticShelves from "./Assets/FuturisticShelves.jpg";
import GlassTable from "./Assets/GlassTable.jpg";
import KingBed from "./Assets/KingBed.jpg";
import LoungChair from "./Assets/LoungChair.jpg";
import MinimalistShelves from "./Assets/MinimalistShelves.jpg";
import ModernSofa from "./Assets/ModernSofa.jpg";
import ModernTable from "./Assets/ModernTable.jpg";
import RecliningSofa from "./Assets/RecliningSofa.jpg";
import SectionSofa from "./Assets/SectionSofa.jpg";
import SleekBed from "./Assets/SleekBed.jpg";
import SleekChair from "./Assets/SleekChair.jpg";
import StramlinedTable from "./Assets/StramlinedTable.jpg";
import StylishBed from "./Assets/StylishBed.jpg";
import ToyShelf from "./Assets/ToyShelf.jpg";
import hoteltable from "./Assets/hoteltable.jpg";
import hoteltv from "./Assets/hoteltv.jpg";
import VelvetSofa from "./Assets/VelvetSofa.jpg";
import WoodenShelves from "./Assets/WoodenShelves.jpg";

export const products = [
  { id: 1, title: "Avant-Garde Lamp", image: AvantGardeLamp, description: "A unique modern lamp that adds personality to any room." },
  { id: 2, title: "Chic Chair", image: ChicChair, description: "Stylish and comfortable chair perfect for lounging." },
  { id: 3, title: "Coffee Table", image: CoffeTable, description: "Elegant wooden table for your living room or office." },
  { id: 4, title: "Comfy Bed", image: ComfyBed, description: "Soft and spacious bed for restful sleep every night." },
  { id: 5, title: "Contemporary Sofa", image: ContemporarySofa, description: "A sleek sofa designed for modern spaces." },
  { id: 6, title: "Cutting-Edge Bed", image: CuttingEdgeBed, description: "Futuristic bed frame with comfort in mind." },
  { id: 7, title: "Futuristic Shelves", image: FuturisticShelves, description: "Space-saving modern shelf unit for storage." },
  { id: 8, title: "Glass Table", image: GlassTable, description: "A clean, minimalist glass table for elegance." },
  { id: 9, title: "King Bed", image: KingBed, description: "Spacious king-sized bed for luxury comfort." },
  { id: 10, title: "Lounge Chair", image: LoungChair, description: "Comfortable chair perfect for relaxing indoors." },
  { id: 11, title: "Minimalist Shelves", image: MinimalistShelves, description: "Minimal design, maximum storage efficiency." },
  { id: 12, title: "Modern Sofa", image: ModernSofa, description: "Modern 3-seater sofa ideal for small apartments." },
  { id: 13, title: "Modern Table", image: ModernTable, description: "A stylish table suitable for modern décor." },
  { id: 14, title: "Reclining Sofa", image: RecliningSofa, description: "Relax fully with this adjustable reclining sofa." },
  { id: 15, title: "Sectional Sofa", image: SectionSofa, description: "Modular sofa with plenty of seating space." },
  { id: 16, title: "Sleek Bed", image: SleekBed, description: "A smooth and space-saving bed design." },
  { id: 17, title: "Sleek Chair", image: SleekChair, description: "Sleek chair with premium cushioning." },
  { id: 18, title: "Streamlined Table", image: StramlinedTable, description: "Streamlined table with chrome-finished legs." },
  { id: 19, title: "Stylish Bed", image: StylishBed, description: "Stylish bed that brings life to any bedroom." },
  { id: 20, title: "Toy Shelf", image: ToyShelf, description: "Perfect for organizing kids' toys and books." },
  { id: 21, title: "Hotel Table", image: hoteltable, description: "Durable and classy table for hotel rooms." },
  { id: 22, title: "Hotel TV", image: hoteltv, description: "Smart TV with crystal-clear display and built-in apps." },
  { id: 23, title: "Velvet Sofa", image: VelvetSofa, description: "Velvety texture and ultra-soft for luxury seating." },
  { id: 24, title: "Wooden Shelves", image: WoodenShelves, description: "Classic wooden shelves for home or office." },
];

export const duplicatedProducts = Array(5)
  .fill(products)
  .flat()
  .map((product, index) => ({
    ...product,
    id: index + 1,
    price: (index + 1) * 10 + 99.99,
  }));

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [sortOrder, setSortOrder] = useState("a-z");
  const [price, setPrice] = useState(1000);
  const [freeShipping, setFreeShipping] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [money, setMoney] = useState(() => {
    return (Math.random() * (499.99 - 99.99) + 99.99).toFixed(2);
  });

  const navigate = useNavigate();

  const itemsPerPage = 6;
  const totalPages = Math.ceil(duplicatedProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const visibleProducts = duplicatedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          zIndex: 9999,
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div className="container mt-4 p-4 bg-light rounded shadow">
        {/* Filter Section */}
        <div className="row g-3">
          <div className="col-md-3">
            <h5>Search Product</h5>
            <input type="text" placeholder="Search" className="form-control" />
            <div className="mt-4">
              <h5>Select Price</h5>
              <div className="d-flex justify-content-between">
                <span>$0</span>
                <strong>${price.toFixed(2)}</strong>
              </div>
              <input
                type="range"
                className="form-range"
                min="0"
                max="1000"
                step="10"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span>Max: $1,000</span>
            </div>
          </div>

          <div className="col-md-3">
            <h5>Select Category</h5>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {["all", "Tables", "Chairs", "Kids", "Sofas", "Beds"].map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <div className="mt-4 d-flex align-items-center">
              <label className="me-2">Free Shipping</label>
              <input
                type="checkbox"
                checked={freeShipping}
                onChange={(e) => setFreeShipping(e.target.checked)}
              />
            </div>
          </div>

          <div className="col-md-3">
            <h5>Select Company</h5>
            <select
              className="form-select"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              {["all", "Company A", "Company B", "Company C"].map((company) => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>

            <button className="btn btn-primary mt-4 w-100">SEARCH</button>
          </div>

          <div className="col-md-3">
            <h5>Sort By</h5>
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <button
              className="btn mt-4 w-100"
              style={{ backgroundColor: "#e83e8c", color: "white" }}
            >
              RESET
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h6>{duplicatedProducts.length} products</h6>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mt-5">
        <div className="row g-4">
          {visibleProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p> {/* Description shown here */}
                    <h5>${product.price}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="container mt-4 d-flex justify-content-center">
        <button className="btn btn-secondary mt-5 d-flex gap-3 align-items-center">
          <span
            className={`btn text-white ${currentPage === 1 ? "disabled" : ""}`}
            onClick={handlePreviousPage}
          >
            Previous
          </span>
          {[1, 2, 3].map((pageNumber) => (
            <span
              key={pageNumber}
              className={`btn text-white ${
                currentPage === pageNumber ? "active bg-primary" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </span>
          ))}
          <span
            className={`btn text-white ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={handleNextPage}
          >
            Next
          </span>
        </button>
      </div>
    </div>
  );
}

export default Product;
