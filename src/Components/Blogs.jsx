import React, { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "Smart Plant Care for Beginners",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    desc: "Starting a garden can be simple with the right guidance. Learn the basics of watering, sunlight, and soil care."
  },
  {
    id: 2,
    title: "Choosing the Right Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    desc: "Selecting the right plants is important for a successful nursery. Explore different types of indoor and outdoor plants."
  },
  {
    id: 3,
    title: "Sustainable Gardening",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
    desc: "Modern nurseries adopt eco-friendly practices like organic fertilizers and smart watering techniques."
  },
  {
    id: 4,
    title: "Top Indoor Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4",
    desc: "Indoor plants not only decorate your home but also improve air quality and reduce stress."
  },
  {
    id: 5,
    title: "Seasonal Gardening Tips",
    image: "https://i.pinimg.com/736x/db/05/40/db0540bb50069e9644511d68c2e7116b.jpg",
    desc: "Different seasons require different plant care techniques. Learn how to maintain plants year round."
  },
  {
    id: 6,
    title: "Medicinal Plants Guide",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a",
    desc: "Medicinal plants like Tulasi and Aloe Vera provide natural healing benefits."
  },
  {
    id: 7,
    title: "Organic Plant Nutrition",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    desc: "Organic fertilizers help plants grow naturally without harmful chemicals."
  },
  {
    id: 8,
    title: "Decorative Garden Ideas",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Creative garden decoration ideas that make your garden look attractive."
  },
  {
    id: 9,
    title: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    desc: "Discover plants that require minimal care and are perfect for beginners."
  }
];

function Blogs() {

  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const showMoreBlogs = () => {
    setVisibleBlogs(prev => prev + 3);
  };

  return (
    <div className="blog-section">

      <h3 className="blog-title">Blogs →</h3>

      <div className="blog-grid">
        {blogData.slice(0, visibleBlogs).map(blog => (

          <div className="blog-card" key={blog.id}>

            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <h4>{blog.title}</h4>
              <p>{blog.desc}</p>

              <button className="read-btn">
                Read More
              </button>
            </div>

          </div>

        ))}
      </div>

      {visibleBlogs < blogData.length && (
        <div className="show-more">
          <button onClick={showMoreBlogs}>
            Show More ▼
          </button>
        </div>
      )}

    </div>
  );
}

export default Blogs;