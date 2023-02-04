import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { grammerValidationSchema } from "./utils/validation/grammerValidation";
import { useCorrectGrammer } from "./utils/hooks/grammer/useGrammer";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(grammerValidationSchema),
  });

  const { mutate, isLoading, isError, data: response } = useCorrectGrammer();
  console.log("useCorrectGrammer", { mutate, isLoading, isError, response });
  const handleRegistration = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegistration)}
      style={{ height: "400px", width: "600px", background: "white" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
        }}
        m={1}
        p={3}
      >
        <TextField
          id="outlined-basic"
          label="Enter your Content"
          variant="outlined"
          multiline
          rows={4}
          {...register("text")}
        />
        <Typography sx={{ color: "#FF0000" }} align="center" variant="p">
          {errors.text?.message}
        </Typography>
        <Button variant="outlined" type="submit" disabled={isLoading}>
          Correct Grammer
        </Button>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {isError.message}</p>}
        {!isLoading && response ? (
          <p>Corrected Text: {response?.data?.data?.result}</p>
        ) : (
          ""
        )}
      </Box>
    </form>
  );
};

export default App;
