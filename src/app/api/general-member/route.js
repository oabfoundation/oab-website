import { collection, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const GeneralMemberCollection = await dbConnect(collection.GENERALMEMBER);

    const result = await GeneralMemberCollection.find({})
      .sort({ createdAt: 1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: result,
      total: result.length,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch members" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const GeneralMemberCollection = await dbConnect(collection.GENERALMEMBER);

    const newMember = {
      name: body.name,
      designation: body.designation,
      image: body.image,
      createdAt: new Date(),
    };

    // Ekhane 'newEvent' er bodole 'newMember' hobe
    const result = await GeneralMemberCollection.insertOne(newMember);

    return NextResponse.json({
      success: true,
      message: "Member added successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("POST Error:", error); // Terminal-e check koro ekhon error ki dekhay
    return NextResponse.json(
      { success: false, message: "Failed to add member" },
      { status: 500 },
    );
  }
}
