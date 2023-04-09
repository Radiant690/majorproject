import sanity from "../sanity";

export async function getResearchers() {
  const query = `*[_type == "researcher"]{
    name,
    title,
    description,
    publications,
    image,
  }`;
  const researchers = await sanity.fetch(query);
  return researchers;
}
