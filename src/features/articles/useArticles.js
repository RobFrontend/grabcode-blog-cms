import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../services/apiArticles";

export function useArticles() {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  return { isLoading, error, articles };
}
