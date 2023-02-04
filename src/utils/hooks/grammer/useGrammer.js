import { useMutation } from "@tanstack/react-query";
import main from "../../../services/grammer";

export const useCorrectGrammer = () => {
  return useMutation(main.correctGrammer);
};
