import { useOutletContext, useParams } from "react-router-dom";

export default function Painting() {
  const { paintings } = useOutletContext();
  const { paintingId } = useParams();

  const painting = paintings.find((_painting) => _painting.id === +paintingId);
  //   waiting for fetch req => w/o this code, whenever you refresh the page, the jsx renders immediately w/o waiting for the paintings state to load up. This prevents the component from rendering with incomplete or incorrect data when the painting hasn't been fetched or found yet.
  if (!painting) {
    return <div></div>;
  }
  return (
    <>
      <h1>{painting.title}</h1>
      <img src={painting.primaryimageurl} alt={painting.title} />
      {/* <img src={painting.baseimgurl} alt={painting.title} /> */}
      <table></table>
    </>
  );
}
