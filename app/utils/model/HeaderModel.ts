import { Schema, model, models } from "mongoose";
import { iHeaderData, iHeroData } from "../interfaces";

const HeaderModel = new Schema<iHeaderData>(
  {
    logo: { type: String },
    navs: { type: [] },
    btnText: { type: String },
  },
  { timestamps: true }
);

const myHeaderModel =
  models.headers || model<iHeaderData>("headers", HeaderModel);
export default myHeaderModel;
