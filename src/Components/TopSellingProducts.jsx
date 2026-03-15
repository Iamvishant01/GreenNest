import React, { useState, memo } from "react";

const productsData = [
  {
    id: 1,
    name: "Rose",
    image: "https://images.unsplash.com/photo-1580840461377-a048dd0d7d20?w=500&auto=format&fit=crop&q=60",
    desc: "Roses are one of the most popular flowering plants in nurseries known for their beauty and fragrance."
  },
  {
    id: 2,
    name: "Tulasi",
    image: "https://i.pinimg.com/1200x/bf/1c/2d/bf1c2dbc094360725af3b9b9c9f9f699.jpg",
    desc: "Tulasi is a sacred medicinal plant widely grown in India and valued for its health benefits."
  },
  {
    id: 3,
    name: "Aloe Vera",
    image: "https://i.pinimg.com/1200x/c5/cc/64/c5cc64394d877a50231fc59da2e818f1.jpg",
    desc: "Aloe vera is widely used for skincare, healing burns, and natural remedies."
  },
  {
    id: 4,
    name: "Money Plant",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=500&auto=format&fit=crop&q=60",
    desc: "Money plant is a popular indoor plant believed to bring prosperity and positive energy."
  },
  {
    id: 5,
    name: "Snake Plant",
    image: "https://i.pinimg.com/1200x/a4/77/3d/a4773ddb1154fc4e09aa409bcea984c9.jpg",
    desc: "Snake plants are low maintenance indoor plants known for purifying the air."
  },
  {
    id: 6,
    name: "Lavender",
    image: "https://i.pinimg.com/1200x/53/4f/46/534f46f4f5383e3bd33b68054b980ac6.jpg",
    desc: "Lavender plants are loved for their calming fragrance and beautiful purple flowers."
  },
  {
    id: 7,
    name: "Jasmine",
    image: "https://i.pinimg.com/736x/9d/b9/c8/9db9c89be292fcb6b238083dde492f9e.jpg",
    desc: "Jasmine produces fragrant white flowers widely used in decoration and perfumes."
  },
  {
    id: 8,
    name: "Bamboo Plant",
    image: "https://i.pinimg.com/1200x/8c/df/97/8cdf97a096165108f66f9259f4ba06ee.jpg",
    desc: "Lucky bamboo is popular in home decor and believed to bring good fortune."
  }
];

const ProductCard = memo(({ product }) => {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
        width="300"
        height="200"
      />

      <div className="card-content">
        <h4>{product.name}</h4>
        <p>{product.desc}</p>

        <button className="details-btn">
          View Details
        </button>
      </div>

    </div>
  );
});

function TopSellingProducts() {

  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts(prev => prev + 3);
  };

  return (
    <div className="product-section">

      <h3 className="section-title">
        Currently Top Selling Globally →
      </h3>

      <div className="product-grid">
        {productsData.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleProducts < productsData.length && (
        <div className="show-more">
          <button onClick={showMoreProducts}>
            Show More
          </button>
        </div>
      )}
      &nbsp;
      &nbsp;
      <hr/>
    </div>
  );
}

export default TopSellingProducts;