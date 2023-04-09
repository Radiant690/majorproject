import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "your_project_id",
  dataset: "production",
  useCdn: true,
});
