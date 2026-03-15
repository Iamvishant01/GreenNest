import React, { useState, useMemo, useCallback, memo } from "react";

const blogData = [
  {
    id: 1,
    title: "Smart Plant Care for Beginners",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&auto=format&fit=crop&q=60",
    desc: "Starting a garden can be simple with the right guidance. Learn the basics of watering, sunlight, and soil care."
  },
  {
    id: 2,
    title: "Choosing the Right Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&auto=format&fit=crop&q=60",
    desc: "Selecting the right plants is important for a successful nursery. Explore different types of indoor and outdoor plants."
  },
  {
    id: 3,
    title: "Sustainable Gardening",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=500&auto=format&fit=crop&q=60",
    desc: "Modern nurseries adopt eco-friendly practices like organic fertilizers and smart watering techniques."
  },
  {
    id: 4,
    title: "Top Indoor Plants",
    image: "https://images.unsplash.com/photo-1604762512526-b7ce049b5764?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Indoor plants not only decorate your home but also improve air quality and reduce stress."
  },
  {
    id: 5,
    title: "Seasonal Gardening Tips",
    image: "https://images.unsplash.com/photo-1683316924890-6a8c5ab10d29?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Different seasons require different plant care techniques. Learn how to maintain plants year round."
  },
  {
    id: 6,
    title: "Medicinal Plants Guide",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=500&auto=format&fit=crop&q=60",
    desc: "Medicinal plants like Tulasi and Aloe Vera provide natural healing benefits."
  },
  {
    id: 7,
    title: "Organic Plant Nutrition",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&auto=format&fit=crop&q=60",
    desc: "Organic fertilizers help plants grow naturally without harmful chemicals."
  },
  {
    id: 8,
    title: "Decorative Garden Ideas",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60",
    desc: "Creative garden decoration ideas that make your garden look attractive."
  },
  {
    id: 9,
    title: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&auto=format&fit=crop&q=60",
    desc: "Discover plants that require minimal care and are perfect for beginners."
  }
];

const BlogCard = memo(({ blog }) => {
  return (
    <div className="blog-card">

      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
        decoding="async"
        width="350"
        height="220"
        srcSet={`${blog.image}&w=300 300w, ${blog.image}&w=600 600w`}
        sizes="(max-width:768px) 100vw, 350px"
      />

      <div className="blog-content">
        <h4>{blog.title}</h4>
        <p>{blog.desc}</p>

        <button className="read-btn">
          Read More
        </button>
      </div>

    </div>
  );
});

function Blogs() {

  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const visibleList = useMemo(() => {
    return blogData.slice(0, visibleBlogs);
  }, [visibleBlogs]);

  const showMoreBlogs = useCallback(() => {
    setVisibleBlogs(prev => prev + 3);
  }, []);

  return (
    <div className="blog-section">

      <h3 className="blog-title">Blogs →</h3>

      <div className="blog-grid">

        {visibleList.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
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