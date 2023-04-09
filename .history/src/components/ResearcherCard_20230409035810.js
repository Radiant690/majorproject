import Image from "next/image";

export default function ResearcherCard({ researcher }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <div className="relative h-48">
        <Image
          src={researcher.image.url}
          alt={researcher.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mt-3">{researcher.name}</h3>
      <h4 className="text-gray-600">{researcher.title}</h4>
      <p className="mt-2">{researcher.description}</p>
      {researcher.publications && researcher.publications.length > 0 && (
        <div className="mt-4">
          <h5 className="font-medium">Publications:</h5>
          <ul className="list-disc list-inside">
            {researcher.publications.map((publication, index) => (
              <li key={index}>{publication}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
