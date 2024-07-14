import { Document } from "mongoose";

export interface iHero {
  title: string;
  desc: string;
  btnText: string;
  linkText: string;
  headercolor: string;
  desccolor: string;
  btncolor: string;
  linkcolor: string;
  headersize: string;
  descsize: string;
  btnsize: string;
  linksize: string;
}

export interface iHeroData extends iHero, Document {}

export interface iHeader {
  logo: string;
  navs: string[];
  btnText: string;
  btnColor: string;
}

export interface iHeaderData extends iHeader, Document {}

export interface iSection {
  title: string;
  cards: {}[];
  button: string;
  titlecolor: string;
  buttoncolor: string;
}

export interface iSectionData extends iSection, Document {}
