import ResearcherCard from "./ResearcherCard";

export default function ResearcherList({ researchers }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {researchers.map((researcher) => (
        <ResearcherCard key={researcher._id} researcher={researcher} />
      ))}
    </div>
  );
}
