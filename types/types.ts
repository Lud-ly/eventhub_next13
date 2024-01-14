import { Board } from "@prisma/client";

export interface ArrowBackProps {
  iSize: number;
}
export type BoardCardProps = {
  board: Board;
};

export type BoardCardWithPropositionsProps = {
  board: Board & {
    propositions: {
      id: number;
      title: string;
      createdAt: Date;
      _count: { vote: number };
    }[];
  };
};
