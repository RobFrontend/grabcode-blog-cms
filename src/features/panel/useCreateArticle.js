import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArticleAPI } from "../../services/apiArticles";
import toast from "react-hot-toast";

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const { mutate: createArticle, isPending: isCreating } = useMutation({
    mutationFn: createArticleAPI,
    onSuccess: () => {
      toast.success("Post utworzony!", {
        duration: 2000,
        icon: "✅",
      });
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => {
      toast.error(
        "Artykuł nie został utworzony! Upewnij się, że wszystkie pola są uzupełnione i wgrany jest obrazek.",
        { duration: 5000, icon: "❗" }
      );
    },
  });
  return { isCreating, createArticle };
}
