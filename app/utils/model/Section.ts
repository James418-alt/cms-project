import { Schema, model, models } from "mongoose";
import { iSectionData } from "../interfaces";

const Section = new Schema<iSectionData>(
  {
    title: { type: String },
    cards: { type: [] },
    button: { type: String },
    titlecolor: { type: String },
    buttoncolor: { type: String },
  },
  { timestamps: true }
);

const mySectionModel =
  models.sections || model<iSectionData>("sections", Section);

export default mySectionModel;
