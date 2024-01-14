import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import ArrowBack from "~/src/components/nav/ArrowBack";
import { prisma } from "~/src/db/prisma";

export default async function LayoutBoard({
  params,
  children,
}: PropsWithChildren<{
  params: { boardId: string };
}>) {
  const boardId = Number(params.boardId);
  if (isNaN(boardId)) {
    return notFound();
  }
  const board = await prisma.board.findUniqueOrThrow({
    where: {
      id: boardId,
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <ArrowBack iSize={40} />
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{board.title}</h2>
        {children}
      </div>
    </div>
  );
}
