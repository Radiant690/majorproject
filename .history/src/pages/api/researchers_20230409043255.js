import sanity from "sanity.js";
// import sanity from "../../sanity";

export default async function handler(req, res) {
  const query = `*[_type == "researcher"] {
    name,
    title,
    description,
    publications,
    "imageUrl": image.asset->url
  }`;
  const researchers = await sanity.fetch(query);
  res.status(200).json(researchers);
}
