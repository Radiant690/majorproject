// import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "u3fmvnfg",
//   dataset: "production",
//   useCdn: true,
// });
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "u3fmvnfg",
  dataset: "production",
  useCdn: true,
});

export default client;
