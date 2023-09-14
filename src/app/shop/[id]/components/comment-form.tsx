import { FC } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import { User } from "next-auth";
import { commentSchema, CommentsValues } from "@/lib/helpers/schema";
import { post } from "@/lib/utils/crud";
import { AppButton } from "@/components/UI/app-button";
import { FormTextarea } from "@/components/UI/form-textarea";
import type { CommentValues } from "@/types/dto-out";
import type { CommentFull } from "@/types/dto-in";

interface CommentFormProps {
  productId: string;
  user: Omit<User, "id" | "image">;
}

export const CommentForm: FC<CommentFormProps> = ({ productId, user }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentsValues>({ resolver: zodResolver(commentSchema) });

  const { trigger, isMutating } = useSWRMutation(
    `/api/product/${productId}/comment`,
    post<CommentFull, CommentValues>
  );

  const onSubmit = handleSubmit(async (data) => {
    const commentVal = {
      productId,
      userEmail: user.email!,
      userName: user.name!,
      body: data.body,
    };
    try {
      await trigger(commentVal);
      reset();
      router.refresh();
    } catch (e) {
      toast.error((e as Error).message, { id: "unique" });
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <FormTextarea {...register("body")} error={errors.body?.message} />
      <AppButton
        disabled={isMutating}
        isLoading={isMutating}
        type="submit"
        className="lg:w-full"
      >
        Leave a comment
      </AppButton>
    </form>
  );
};
