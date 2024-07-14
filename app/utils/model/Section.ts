import { Schema, model, models } from "mongoose";
import { iSectionData } from "../interfaces";

const Section = new Schema<iSectionData>(
  {
    title: { type: String },
    desc: { type: String },
    bgImg: { type: String },
    img: { type: String },
    link: { type: String },
    text: { type: String },
  },
  { timestamps: true }
);

const mySectionModel =
  models.sections || model<iSectionData>("sections", Section);

export default mySectionModel;
