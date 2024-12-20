



import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Details.module.css";
import axios from "axios";

export default function Details() {
  const { id } = useParams();
  const location = useLocation();
  const [itemDetails, setItemDetails] = useState(null);
  const [type, setType] = useState("movie"); // القيمة الافتراضية هي "movie"

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const itemType = queryParams.get("type") || "movie"; // "movie" كافتراضي
    setType(itemType);

    getItemDetails(itemType);
  }, [location.search, id]);

  const getItemDetails = async (itemType) => {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/${itemType}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8`
      );
      setItemDetails(data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  return (
    <div className={styles.detailsContainer}>
      {itemDetails ? (
        <div className={styles.detailsContent}>
          <div className={styles.detailsPoster}>
            {/* استخدم profile_path للشخص بدلاً من poster_path */}
            <img
              src={`https://image.tmdb.org/t/p/original${itemDetails.profile_path || itemDetails.poster_path}`}
              alt={itemDetails.name || itemDetails.title}
            />
          </div>
          <div className={styles.detailsInfo}>
            <h1 className={styles.detailsTitle}>
              {itemDetails.name || itemDetails.title}
            </h1>
            {/* عرض السيرة الذاتية إذا كان الشخص هو المتمرير */}
            {type === "person" && itemDetails.biography && (
              <p className={styles.detailsOverview}>{itemDetails.biography}</p>
            )}
            <p className={styles.detailsTagline}>{itemDetails.tagline || ""}</p>
            <div className={styles.detailsGenres}>
              {itemDetails.genres && itemDetails.genres.map((genre) => (
                <span key={genre.id} className={styles.genreBadge}>
                  {genre.name}
                </span>
              ))}
            </div>
            <p>
              <strong>Vote:</strong> {itemDetails.vote_average}
            </p>
            <p>
              <strong>Vote count:</strong> {itemDetails.vote_count}
            </p>
            <p>
              <strong>Popularity:</strong> {itemDetails.popularity}
            </p>
            {/* إذا كان نوع "person"، أضف تاريخ الميلاد */}
            {type === "person" && (
              <p>
                <strong>Birthday:</strong> {itemDetails.birthday || "N/A"}
              </p>
            )}
            <p>
              <strong>Release date:</strong>{" "}
              {itemDetails.release_date || itemDetails.first_air_date || "N/A"}
            </p>
          </div>
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
}
