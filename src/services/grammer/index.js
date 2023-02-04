import APIConfiguration from "../../api";

const correctGrammer = async (body) => {
  let result = APIConfiguration.API.post(`correct`, body);
  return result;
};

const main = {
  correctGrammer,
};

export default main;
