import mySectionModel from "@/app/utils/model/Section";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { title, desc, bgImg, img, link, text } = await req.json();
    const getD = await mySectionModel.create({
      title,
      desc,
      bgImg,
      img,
      link,
      text,
    });
    return NextResponse.json({
      message: "Section Created",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const getD = await mySectionModel.find();
    return NextResponse.json({
      message: "Section Found",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};
