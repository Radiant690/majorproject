import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import useSWR from "swr";

function Researchers() {
  const { data: researchers, error } = useSWR(
    "/api/researchers",
    async (url: RequestInfo | URL) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!researchers) return <div>Loading...</div>;

  return (
    <div>
      {researchers.map(
        (researcher: {
          name:
            | Key
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment;
          title:
            | string
            | SVGAnimatedNumberList
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal;
          description:
            | string
            | number
            
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal;
          publications: any[];
          imageUrl: string | undefined;
        }) => (
          <div key={researcher.name}>
            <h2>{researcher.name}</h2>
            <p>{researcher.title}</p>
            <p>{researcher.description}</p>
            <ul>
              {researcher.publications.map((publication) => (
                <li key={publication}>{publication}</li>
              ))}
            </ul>
            <img src={researcher.imageUrl} />
          </div>
        )
      )}
    </div>
  );
}

export default Researchers;
