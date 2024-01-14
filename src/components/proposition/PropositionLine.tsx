import { UpVote } from "./UpVote";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

type PropositionLineProps = {
  title: string;
  id: number;
  createdAt: Date;
  voteCount: number;
};

export const Proposition = ({
  title,
  id,
  createdAt,
  voteCount,
}: PropositionLineProps) => {
  const formattedDate = format(
    new Date(createdAt),
    "'posté le' dd MMMM yyyy 'à' HH:mm",
    { locale: fr }
  );

  return (
    <div className="p-6 flex-col lg:flex-row justify-between items-center rounded-lg shadow bg-gray-800 border-gray-700 gap-2 w-full">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <UpVote voteCount={voteCount} propositionId={id} />
      </div>
      <p className="text-sm text-center">{formattedDate}</p>
    </div>
  );
};
