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
}

export interface iHeaderData extends iHeader, Document {}
