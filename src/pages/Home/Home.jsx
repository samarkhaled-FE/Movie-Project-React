

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; 
import "./Home.module.css";

export default function Home() {
  const [trendingItems, setTrendingItems] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getTrendingItems();
  }, []);

  const getTrendingItems = async () => {
    try {
      setLoading(true); 
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
      );
      setTrendingItems(data.results);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching trending items:", error);
      setLoading(false);
    }
  };

  return (
    <div className="row my-3 py-5">
      <div className="col-md-4">
        <div>
          <div className="border-top w-25 mb-4"></div>
          <h3>Trending</h3>
          <h3>Movies</h3>
          <h3>To watch now</h3>
          <span className="text-warning">most watched movies by day</span>
          <div className="border-top mt-4 w-100"></div>
        </div>
      </div>

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100%",
            minHeight: "300px",
            width: "100%",
          }}
        >
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            size="3x" 
            className="text-warning"
          />
        </div>
      ) : (
        
        trendingItems.map((item, index) => (
          <div key={index} className="col-md-2">
            <div className="item position-relative">
              <Link to={`/details/${item.id}?type=${item.media_type}`}>
                {item.poster_path ? (
                  <img
                    className="w-100 position-relative"
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title || item.name || "No title available"}
                  />
                ) : (
                  <div className="placeholder">No Image</div>
                )}
              </Link>
              <span
                className="position-absolute"
                style={{
                  top: "10px",
                  left: "10px",
                  backgroundColor: "rgba(228, 216, 4, 1)",
                  color: "white",
                  padding: "5px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                }}
              >
                {item.vote_average ? item.vote_average.toFixed(1) : "N/A"}
              </span>
              <h6 className="mt-2">
                <Link
                  to={`/details/${item.id}?type=${item.media_type}`}
                  className="text-decoration-none text-dark"
                >
                  {item.title || item.name || "No title available"}
                </Link>
              </h6>
            </div>
          </div>
        ))
      )}

      <div className="col-md-4">
        <div>
          <div className="border-top w-25 mb-4"></div>
          <h3>Trending</h3>
          <h3>Movies</h3>
          <h3>To watch now</h3>
          <span className="text-warning">most watched movies by day</span>
          <div className="border-top mt-4 w-100"></div>
        </div>
      </div>
    </div>
  );
}

