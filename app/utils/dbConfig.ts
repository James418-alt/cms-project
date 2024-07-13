import { connect } from "mongoose";

export const dbConfig = async () => {
  const url =
    "mongodb+srv://ebifegha123:ebifegha123@gomenticode.1l9lbmv.mongodb.net/cmsDb?retryWrites=true&w=majority&appName=GomentiCode";
  await connect(url).then(() => {
    console.clear();
    console.log("Server Up!");
  });
};
