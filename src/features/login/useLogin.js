import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLogin } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      toast.success("Logged in successfuly!");
      navigate("/panel");
    },
    onError: (err) => {
      toast.error("Check your email or password!");
    },
  });

  return { isLogin, login };
}
