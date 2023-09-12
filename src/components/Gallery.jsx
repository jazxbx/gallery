import { useOutletContext, Link } from "react-router-dom";

function Gallery() {
  const { paintings } = useOutletContext();
  return (
    <div>
      {paintings.map((painting) => (
        <div key={painting.id}>
          <Link to={`/painting/${painting.id}`}>
            <div>{painting.title}</div>
            {painting.images.length > 0 ? (
              <img src={painting.images[0].baseimageurl} alt={painting.title} />
            ) : (
              <p>No image found</p>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
