import { dbConfig } from "@/app/utils/dbConfig";
import myHeroModel from "@/app/utils/model/HeroModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const {
      title,
      desc,
      btnText,
      linkText,
      headercolor,
      desccolor,
      btncolor,
      linkcolor,
      headersize,
      descsize,
      btnsize,
      linksize,
    } = await req.json();
    const getD = await myHeroModel.create({
      title,
      desc,
      btnText,
      linkText,
      headercolor,
      desccolor,
      btncolor,
      linkcolor,
      headersize,
      descsize,
      btnsize,
      linksize,
    });
    return NextResponse.json({
      message: "Hero Created",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const getD = await myHeroModel.find();
    return NextResponse.json({
      message: "Hero's Found",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
