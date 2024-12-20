import React from "react";
import '../styles/home.css'
import ArtisanNavBar from "./ArtisanNavBar";
const Home = () => {
  return (
    <>
    <div className="wrapper">

    <ArtisanNavBar/>
    <div className="home">
       <div className="home-hero">
        <h1>Authentic Tribal Craftsmanship</h1>
        <p>
          Discover unique handcrafted treasures that tell stories of ancient
          traditions and cultural heritage.
        </p>
        <button
          style={{
            backgroundColor: "#8B4513",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Explore Collection
        </button>
      </div>

      {/* Featured Products Section */}
      <div className="home-featured-products" style={{ textAlign: "center", padding: "50px 20px" }}>
        <h2>Featured Products</h2>
        <div
          className="home-products">
          <div className="home-product" style={{ width: "200px", textAlign: "center" }}>
            <img
              src="https://storage.googleapis.com/a1aa/image/nNXs9ueodRzgBSzp2M4tAunnA0HAycLXq8GYDvvW8gJeMUxTA.jpg"
              alt="Handcrafted Dreamcatcher"
              style={{ width: "100%", height: "auto" }}
            />
            <p>Handcrafted Dreamcatcher</p>
          </div>
          <div className="home-product" style={{ width: "200px", textAlign: "center" }}>
            <img
              src="https://storage.googleapis.com/a1aa/image/nSBljaCaIG6gOl3T0rPOfRXakQSa9H4JnaA0x5PtE4XgGq4JA.jpg"
              alt="Handwoven Basket"
              style={{ width: "100%", height: "auto" }}
            />
            <p>Handwoven Basket</p>
          </div>
          <div className="home-product" style={{ width: "200px", textAlign: "center" }}>
            <img
              src="https://storage.googleapis.com/a1aa/image/74ezRJUn8sTPPCrVOiKhaWbkGqXylzsnpOeyPtk6ZIEeZoinA.jpg"
              alt="Tribal Necklace"
              style={{ width: "100%", height: "auto" }}
            />
            <p>Tribal Necklace</p>
          </div>
        </div>
      </div>

      <header className="home-header" style={{ textAlign: "center", margin: "0px 0" ,backgroundColor:'#F5F4B3'}}>
        <h1>Featured Artisans</h1>
      </header>

      <section className="home-artisans" style={{backgroundColor:'#F5F4B3'}}>
  <div className="home-artisan">
    <img
      src="https://img.freepik.com/free-photo/portrait-indian-woman-bazaar_23-2150913250.jpg?t=st=1731697150~exp=1731700750~hmac=cf40c77426134447f25a9d85abb8d7e20944a7aa924ec2558f291b36284edf5d&w=1380"
      alt="Silhouette of a person in a dark setting"
      width="150"
      height="150"
    />
    <h2>Maya Johnson</h2>
    <p>Cherokee Nation</p>
    <p className="home-specialty">Pottery &amp; Ceramics</p>
  </div>
  <div className="home-artisan">
    <img
      src="https://img.freepik.com/free-photo/portrait-man-pottery-studio-working-stoneware_23-2151686451.jpg?t=st=1731697170~exp=1731700770~hmac=88f1c47a0054aea4e260d73e58cbe30f19b7e9c7b7fbef32c1f9c547c40f9692&w=1380"
      alt="Silhouette of a person in a dark setting"
      width="150"
      height="150"
    />
    <h2>Robert Blackhawk</h2>
    <p>Lakota</p>
    <p className="home-specialty">Beadwork &amp; Jewelry</p>
  </div>
  <div className="home-artisan">
    <img
      src="https://storage.googleapis.com/a1aa/image/rbXYA5Ri4RZgEpFsegB6B9xvAqpUFUEQyzJPuJ3lekGIrUxTA.jpg"
      alt="Person smiling in a professional setting"
      width="150"
      height="150"
    />
    <h2>Sarah Redfeather</h2>
    <p>Navajo</p>
    <p className="home-specialty">Textile Weaving</p>
  </div>
</section>


      <footer className="home-footer" style={{ textAlign: "center", background: "#8B4513", color: "white", padding: "20px" }}>
        <h2>Preserving Heritage Through Craft</h2>
        <p>
          Tribal Treasures is committed to supporting indigenous artisans by
          providing a platform to showcase their exceptional craftsmanship while
          preserving their cultural heritage. Every purchase directly supports
          these talented artists and their communities.
        </p>
      </footer>
    </div>
    </div></>
  );
};

export default Home;
