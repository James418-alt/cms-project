import myHeaderModel from "@/app/utils/model/HeaderModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { logo, navs, btnText, btnColor, btnTsize, navsTextSize } =
      await req.json();
    const { headerID } = params;

    const getD = await myHeaderModel.findByIdAndUpdate(
      headerID,
      {
        logo,
        navs,
        btnText,
        btnColor,
        btnTsize,
        navsTextSize,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Header Updated",
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
