import * as yup from "yup";

export const grammerValidationSchema = yup.object().shape({
  text: yup.string().required("Text is required"),
});
