import useSWR from "swr";

function Researchers() {
  const { data: researchers, error } = useSWR(
    "/api/researchers",
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!researchers) return <div>Loading...</div>;

  return (
    <div>
      {researchers.map((researcher) => (
        <div key={researcher.name}>
          <h2>{researcher.name}</h2>
          <p>{researcher.title}</p>
          <p>{researcher.description}</p>
          <ul>
            {researcher.publications.map((publication) => (
              <li key={publication}>{publication}</li>
            ))}
          </ul>
          <img src={researcher.imageUrl} alt={researcher.name} />
        </div>
      ))}
    </div>
  );
}

export default Researchers;
