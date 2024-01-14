import { Board } from "@prisma/client";
import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { BoardCardWithPropositionsProps } from "~/types/types";

export const BoardCard = ({ board }: BoardCardWithPropositionsProps) => {
  const formattedDate = format(
    new Date(board.createdAt),
    "'le' dd MMMM yyyy 'à' HH:mm",
    { locale: fr }
  );
  const numberOfPropositions = board.propositions.length;
  return (
    <Link href={`/boards/${board.id}`}>
      <div className="rounded-md">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-lg p-4">
          <h3 className="text-gray-900 dark:text-white text-3xl md:text-2xl font-extrabold m-2">
            {board.title}
          </h3>
          {formattedDate}

          <div className="text-lg font-bold mt-4 relative">
            {numberOfPropositions > 0 && (
              <span className="h-7 w-7 flex justify-center items-center border-green-600 bg-green-900 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                {numberOfPropositions}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
