import { useLoaderData, useSearchParams } from "react-router";

function Cat() {
  const [searchParams] = useSearchParams();
  const imageUrl = searchParams.get("img");
  const catId = searchParams.get("id");

  return (
    <div>
      <i className="bx bx-close" />
      <p>{catId}</p>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Cat"
          className="rounded-lg w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <p>No image URL provided.</p>
      )}
    </div>
  );
}

export default Cat;
