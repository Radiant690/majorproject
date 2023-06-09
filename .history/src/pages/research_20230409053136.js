import useSWR from "swr";

function research() {
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
    <
    <div class="flex">
      {/* {researchers.map((researcher) => (
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
      ))} */}

      {/* TODO: REWORK ON THIS LATER */}
      {researchers.map((researcher) => (
        <div class="px-6 mx-6 my-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={researcher.imageUrl}
              alt={researcher.name}
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {researcher.name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {researcher.description}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default research;
