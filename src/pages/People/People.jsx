
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; 

export default function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getTrendingPeople();
  }, []);

  let getTrendingPeople = async () => {
    try {
      setLoading(true); 
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/person/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
      );
      setPeople(data.results.slice(0, 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div className="row my-3 py-5">
        <div className="col-md-4">
          <div>
            <div className="border-top w-25 mb-4"></div>
            <h3>Trending</h3>
            <h3>People</h3>
            <h3>To follow now</h3>
            <span className="text-warning">Most followed people by day</span>
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
        ) : people.length > 0 ? (
          people.map((person, index) => (
            <div key={index} className="col-md-2">
              <div className="item position-relative">
                <Link
                  to={`/details/${person.id}?type=person`}
                  className="text-decoration-none text-warning"
                >
                  {person.profile_path ? (
                    <img
                      className="w-100 position-relative"
                      src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                      alt={person.name || "No name available"}
                    />
                  ) : (
                    <img
                      className="w-100 position-relative"
                      src="default-image.jpg" 
                      alt="No name available"
                    />
                  )}
                  <h6>
                    {person.name.length > 20
                      ? person.name.slice(0, 20) + "..."
                      : person.name || "No name available"}
                  </h6>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No people to display at the moment.</div>
        )}
      </div>
    </>
  );
}

