import { useOutletContext, useParams } from "react-router-dom";

export default function Painting() {
  const { paintings } = useOutletContext();
  const { paintingId } = useParams();

  const painting = paintings.find((_painting) => _painting.id === +paintingId);

  console.log(painting);
  return (
    <>
      <h1>{painting.title}</h1>
      {}
      <img src={painting.primaryimageurl} alt={painting.title} />
      {/* <img src={painting.baseimgurl} alt={painting.title} /> */}
      <table></table>
    </>
  );
}
