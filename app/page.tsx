import { BoardCard } from "~/src/components/board/BoardCard";
import { Button } from "~/src/components/form/Bouton";
import { prisma } from "~/src/db/prisma";

export default async function Home() {
  const boards = await prisma.board.findMany();

  console.log(boards);
  const boardsWithPropositions = await Promise.all(
    boards.map(async (board) => {
      const propositions = await prisma.proposition.findMany({
        where: {
          boardId: board.id,
        },
        orderBy: {
          vote: {
            _count: "desc",
          },
        },
        select: {
          id: true,
          title: true,
          createdAt: true,
          _count: {
            select: {
              vote: true,
            },
          },
        },
      });

      return { ...board, propositions };
    })
  );
  console.log(boardsWithPropositions);
  return (
    <div className="flex flex-col gap-4 p-4" id="board-card">
      <Button as="a" href="/boards/new" className="self-end">
        Créer évènement
      </Button>
      <h1 className="text-5xl font-bold mb-10">Liste des évènements</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {boardsWithPropositions.map((boardWithPropositions) => (
          <li key={boardWithPropositions.id}>
            <BoardCard board={boardWithPropositions} />
          </li>
        ))}
      </ul>
    </div>
  );
}
