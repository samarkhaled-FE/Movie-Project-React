

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function TvShows() {
//   const [tvShows, setTvShows] = useState([]);

//   useEffect(() => {
//     getTrendingTvShows();
//   }, []);

//   let getTrendingTvShows = async () => {
//     try {
//       let { data } = await axios.get(
//         "https://api.themoviedb.org/3/trending/tv/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
//       );
//       setTvShows(data.results.slice(0, 10)); // عرض أول 10 برامج فقط
//     } catch (error) {
//       console.error("Error fetching TV shows:", error);
//     }
//   };

//   return (
//     <>
//       <div className="row my-3 py-5">
//         <div className="col-md-4">
//           <div>
//             <div className="border-top w-25 mb-4"></div>
//             <h3>Trending</h3>
//             <h3>TV Shows</h3>
//             <h3>To watch now</h3>
//             <span className="text-muted">Most watched TV shows by day</span>
//             <div className="border-top mt-4 w-100"></div>
//           </div>
//         </div>
//         {tvShows.map((show, index) => (
//           <div key={index} className="col-md-2">
//             <Link
//               to={`/details/${show.id}?type=tv`} // تمرير النوع كمعلمة
//               className="text-decoration-none text-dark"
//             >
//               <div className="item position-relative">
//                 <img
//                   className="w-100"
//                   src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
//                   alt={show.name || "No title available"}
//                 />
//                 <span className="badge bg-warning position-absolute top-0 end-0 m-2">
//                   {show.vote_average?.toFixed(1) || "N/A"}
//                 </span>
//                 <h6 className="mt-2">{show.name || "No title available"}</h6>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // استيراد الـ FontAwesome spinner

export default function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true); // حالة تحميل البيانات

  useEffect(() => {
    getTrendingTvShows();
  }, []);

  let getTrendingTvShows = async () => {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
      );
      setTvShows(data.results.slice(0, 10)); // عرض أول 10 برامج فقط
      setLoading(false); // إيقاف حالة التحميل بعد جلب البيانات
    } catch (error) {
      console.error("Error fetching TV shows:", error);
      setLoading(false); // إيقاف حالة التحميل في حالة حدوث خطأ
    }
  };

  return (
    <>
      <div className="row my-3 py-5">
        <div className="col-md-4">
          <div>
            <div className="border-top w-25 mb-4"></div>
            <h3>Trending</h3>
            <h3>TV Shows</h3>
            <h3>To watch now</h3>
            <span className="text-muted">Most watched TV shows by day</span>
            <div className="border-top mt-4 w-100"></div>
          </div>
        </div>

        {/* عرض الـ loading spinner إذا كانت البيانات لم يتم تحميلها بعد */}
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
              size="3x" // تغيير الحجم حسب الحاجة
              className="text-warning"
            />
          </div>
        ) : (
          // عرض البرامج إذا كانت البيانات جاهزة
          tvShows.map((show, index) => (
            <div key={index} className="col-md-2">
              <Link
                to={`/details/${show.id}?type=tv`} // تمرير النوع كمعلمة
                className="text-decoration-none text-dark"
              >
                <div className="item position-relative">
                  <img
                    className="w-100"
                    src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
                    alt={show.name || "No title available"}
                  />
                  <span className="badge bg-warning position-absolute top-0 end-0 m-2">
                    {show.vote_average?.toFixed(1) || "N/A"}
                  </span>
                  <h6 className="mt-2">{show.name || "No title available"}</h6>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}
