import { useOutletContext, Link } from "react-router-dom";

function Gallery() {
  const { paintings } = useOutletContext();

  // filter first??

  return (
    <>
      <h1>Gallery</h1>
      <div className="gallery-container">
        {paintings.map((painting) => (
          <div className="painting-container" key={painting.id}>
            <Link to={`/painting/${painting.id}`}>
              {painting.images.length > 0 && (
                <img
                  src={painting.images[0].baseimageurl}
                  alt={painting.title}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
