import { Document } from "mongoose";

export interface iHero {
  title: string;
  desc: string;
  btnText: string;
  linkText: string;
}

export interface iHeroData extends iHero, Document {}

export interface iHeader {
  logo: string;
  navs: string[];
  btnText: string;
}

export interface iHeroData extends iHero, Document {}
