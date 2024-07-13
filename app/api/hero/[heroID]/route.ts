import { dbConfig } from "@/app/utils/dbConfig";
import myHeroModel from "@/app/utils/model/HeroModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
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
    const { heroID } = params;
    const getD = await myHeroModel.findByIdAndUpdate(
      heroID,
      {
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
      },
      { new: true }
    );
    return NextResponse.json({
      message: "Hero Updated",
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
