import { Schema, model } from "mongoose";
import { iHeaderData } from "../interfaces";
import { models } from "mongoose";

const HeaderModel = new Schema<iHeaderData>({
  logo: { type: String },
  navs: { type: [] },
  btnText: { type: String },
  btnColor: { type: String },
});

const myHeaderModel = models.headers || model("headers", HeaderModel);

export default myHeaderModel;
