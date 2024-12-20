import React, { useEffect, useState } from "react";
import ArtisanNavBar from "./ArtisanNavBar";
import "../styles/artisanviewallproducts.css"; // Import the CSS file

const ArtisanViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductsAndImages = async () => {
      try {
        // Fetch all products
        const productsResponse = await fetch("https://impartial-surprise-production-2ca1.up.railway.app/viewallproducts");
        const productsData = await productsResponse.json();
        setProducts(productsData);

        // Fetch images for each product
        const imagePromises = productsData.map(async (product) => {
          try {
            const imageResponse = await fetch(`https://impartial-surprise-production-2ca1.up.railway.app/product/${product.pid}`);
            const imageBlob = await imageResponse.blob();
            return {
              pid: product.pid,
              imageUrl: URL.createObjectURL(imageBlob),
            };
          } catch (imageError) {
            console.error(`Error fetching image for product ${product.pid}:`, imageError);
            return {
              pid: product.pid,
              imageUrl: null,
            };
          }
        });

        const imageResults = await Promise.all(imagePromises);
        const imageMap = {};
        imageResults.forEach(({ pid, imageUrl }) => {
          imageMap[pid] = imageUrl;
        });

        setImages(imageMap);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProductsAndImages();
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="artisan-container">
      <ArtisanNavBar />
      <div className="artisancontent">
        <h1>Product List</h1>
        <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product.pid}>
              {images[product.pid] ? (
                <img
                  src={images[product.pid]}
                  alt={product.pname}
                />
              ) : (
                <div className="card-placeholder">No Image Available</div>
              )}
              <div className="card-body">
                <h3>{product.pname}</h3>
                <p><strong>Description:</strong> {product.pdescription}</p>
                <p><strong>Price:</strong> ${product.pprice}</p>
                <p><strong>Category:</strong> {product.pcategory}</p>
                <p><strong>Rating:</strong> {product.prating || "N/A"}</p>
                <p><strong>Added Date:</strong> {new Date(product.padddate).toDateString()}</p>
                <p><strong>Status:</strong> {product.pisActive ? "Active" : "Inactive"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtisanViewAllProducts;
