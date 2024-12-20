

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // لإضافة روابط التفاصيل
// import "./Home.module.css"; 

// export default function Home() {
//   const [trendingItems, setTrendingItems] = useState([]);

//   useEffect(() => {
//     getTrendingItems();
//   }, []);

//   const getTrendingItems = async () => {
//     try {
//       let { data } = await axios.get(
//         "https://api.themoviedb.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
//       );
//       setTrendingItems(data.results);
//     } catch (error) {
//       console.error("Error fetching trending items:", error);
//     }
//   };

//   return (
//     <div className="row my-3 py-5">
//       <div className="col-md-4">
//         <div>
//           <div className="border-top w-25 mb-4"></div>
//           <h3>Trending</h3>
//           <h3>Movies</h3>
//           <h3>To watch now</h3>
//           <span className="text-warning">most watched movies by day</span>
//           <div className="border-top mt-4 w-100"></div>
//         </div>
//       </div>

//       {/* عرض جميع العناصر الشائعة */}
//       {trendingItems.map((item, index) => (
//         <div key={index} className="col-md-2">
//           <div className="item position-relative">
//             {/* إضافة رابط التفاصيل */}
//             <Link to={`/details/${item.id}?type=${item.media_type}`}>
//               {item.poster_path ? (
//                 <img
//                   className="w-100 position-relative"
//                   src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//                   alt={item.title || item.name || "No title available"}
//                 />
//               ) : (
//                 <div className="placeholder">No Image</div>
//               )}
//             </Link>
//             <span
//               className="position-absolute"
//               style={{
//                 top: "10px",
//                 left: "10px",
//                 backgroundColor: "rgba(228, 216, 4, 1)",
//                 color: "white",
//                 padding: "5px",
//                 borderRadius: "50%",
//                 fontWeight: "bold",
//               }}
//             >
//               {item.vote_average ? item.vote_average.toFixed(1) : "N/A"}
//             </span>
//             <h6 className="mt-2">
//               <Link
//                 to={`/details/${item.id}?type=${item.media_type}`}
//                 className="text-decoration-none text-dark"
//               >
//                 {item.title || item.name || "No title available"}
//               </Link>
//             </h6>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // لإضافة روابط التفاصيل
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // استيراد الـ FontAwesome spinner
// import "./Home.module.css";

// export default function Home() {
//   const [trendingItems, setTrendingItems] = useState([]);
//   const [loading, setLoading] = useState(true); // إضافة حالة loading

//   useEffect(() => {
//     getTrendingItems();
//   }, []);

//   const getTrendingItems = async () => {
//     try {
//       setLoading(true); // تعيين حالة التحميل إلى true قبل جلب البيانات
//       let { data } = await axios.get(
//         "https://api.themoviedb.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
//       );
//       setTrendingItems(data.results);
//       setLoading(false); // تعيين حالة التحميل إلى false بعد جلب البيانات
//     } catch (error) {
//       console.error("Error fetching trending items:", error);
//       setLoading(false); // تعيين حالة التحميل إلى false في حالة الخطأ
//     }
//   };

//   return (
//     <div className="row my-3 py-5">
//       <div className="col-md-4">
//         <div>
//           <div className="border-top w-25 mb-4"></div>
//           <h3>Trending</h3>
//           <h3>Movies</h3>
//           <h3>To watch now</h3>
//           <span className="text-warning">most watched movies by day</span>
//           <div className="border-top mt-4 w-100"></div>
//         </div>
//       </div>

//       {/* عرض الـ "loading" قبل جلب البيانات */}
//       {loading ? (
//         <div
//           className="d-flex justify-content-center align-items-center"
//           style={{
//             height: "100%",
//             minHeight: "300px",
//             width: "100%",
//           }}
//         >
//           <FontAwesomeIcon
//             icon={faSpinner}
//             spin
//             size="3x" // تغيير الحجم حسب الحاجة
//             className="text-warning"
//           />
//         </div>
//       ) : (
//         /* عرض جميع العناصر الشائعة بعد تحميل البيانات */
//         trendingItems.map((item, index) => (
//           <div key={index} className="col-md-2">
//             <div className="item position-relative">
//               {/* إضافة رابط التفاصيل */}
//               <Link to={`/details/${item.id}?type=${item.media_type}`}>
//                 {item.poster_path ? (
//                   <img
//                     className="w-100 position-relative"
//                     src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//                     alt={item.title || item.name || "No title available"}
//                   />
//                 ) : (
//                   <div className="placeholder">No Image</div>
//                 )}
//               </Link>
//               <span
//                 className="position-absolute"
//                 style={{
//                   top: "10px",
//                   left: "10px",
//                   backgroundColor: "rgba(228, 216, 4, 1)",
//                   color: "white",
//                   padding: "5px",
//                   borderRadius: "50%",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {item.vote_average ? item.vote_average.toFixed(1) : "N/A"}
//               </span>
//               <h6 className="mt-2">
//                 <Link
//                   to={`/details/${item.id}?type=${item.media_type}`}
//                   className="text-decoration-none text-dark"
//                 >
//                   {item.title || item.name || "No title available"}
//                 </Link>
//               </h6>
//             </div>
            
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // لإضافة روابط التفاصيل
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // استيراد الـ FontAwesome spinner
import "./Home.module.css";

export default function Home() {
  const [trendingItems, setTrendingItems] = useState([]);
  const [loading, setLoading] = useState(true); // إضافة حالة loading

  useEffect(() => {
    getTrendingItems();
  }, []);

  const getTrendingItems = async () => {
    try {
      setLoading(true); // تعيين حالة التحميل إلى true قبل جلب البيانات
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
      );
      setTrendingItems(data.results);
      setLoading(false); // تعيين حالة التحميل إلى false بعد جلب البيانات
    } catch (error) {
      console.error("Error fetching trending items:", error);
      setLoading(false); // تعيين حالة التحميل إلى false في حالة الخطأ
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

      {/* عرض الـ "loading" قبل جلب البيانات */}
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
        /* عرض جميع العناصر الشائعة بعد تحميل البيانات */
        trendingItems.map((item, index) => (
          <div key={index} className="col-md-2">
            <div className="item position-relative">
              {/* إضافة رابط التفاصيل */}
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

      {/* هنا يتم إضافة محتوى جديد بعد عرض البيانات */}
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

