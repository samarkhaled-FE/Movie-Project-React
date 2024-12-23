

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; 

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getTrendingMovies();
  }, []);

  let getTrendingMovies = async () => {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
      );
      setMovies(data.results.slice(0, 10)); 
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching data:", error);
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
          <span className="text-warning">Most watched movies by day</span>
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
        movies.map((movie, index) => (
          <div key={index} className="col-md-2">
            <Link
              to={`/details/${movie.id}?type=${movie.media_type}`}
              className="text-decoration-none text-warning"
            >
              <div className="item position-relative">
                {movie.poster_path ? (
                  <img
                    className="w-100 position-relative"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title || movie.name || "No title available"}
                  />
                ) : (
                  <img
                    className="w-100 position-relative"
                    src="default-image.jpg"
                    alt="No title available"
                  />
                )}
                <h6>
                  {movie.title || movie.name || "No title available"}
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
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                  </span>
                </h6>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
