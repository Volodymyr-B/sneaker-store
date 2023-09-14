import { FC } from "react";
import { AppAccordion } from "@/components/UI/app-accordion";
import type { CommentFull } from "@/types/dto-in";

interface CommentsListProps {
  comments: CommentFull[];
}

export const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  return (
    <AppAccordion title={`Comments [ ${comments.length} ] :`}>
      <ul className="flex flex-col gap-4">
        {comments.map((comment) => (
          <li className="flex flex-col bg-white p-2 shadow-md" key={comment.id}>
            <span>{comment.userName}</span>
            <span>{comment.body}</span>
          </li>
        ))}
      </ul>
    </AppAccordion>
  );
};
