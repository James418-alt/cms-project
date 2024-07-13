import { connect } from "mongoose";

export const dbConfig = async () => {
  const url = "mongodb://localhost:27017/cmsDb";
  await connect(url).then(() => {
    console.clear();
    console.log("Server Up!");
  });
};
