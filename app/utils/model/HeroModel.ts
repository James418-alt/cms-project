import { Schema, model, models } from "mongoose";
import { iHeroData } from "../interfaces";

const HeroModel = new Schema<iHeroData>(
  {
    title: { type: String },
    desc: { type: String },
    btnText: { type: String },
    linkText: { type: String },
    headercolor: { type: String },
    desccolor: { type: String },
    btncolor: { type: String },
    linkcolor: { type: String },
    headersize: { type: String },
    descsize: { type: String },
    btnsize: { type: String },
    linksize: { type: String },
  },
  { timestamps: true }
);

const myHeroModel = models.heros || model<iHeroData>("heros", HeroModel);
export default myHeroModel;
