import { collection, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;
    const skip = (page - 1) * limit;

    const BoardOfDirectorCollection = await dbConnect(collection.BOARDOFDIRECTOR);
    const result = await BoardOfDirectorCollection.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const total = await BoardOfDirectorCollection.countDocuments({});

    return NextResponse.json({
      data: result,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch board of directors" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { success: false, message: "Name is required" },
        { status: 400 }
      );
    }
    if (!body.designation || !body.designation.trim()) {
      return NextResponse.json(
        { success: false, message: "Designation is required" },
        { status: 400 }
      );
    }
    if (!body.image || !body.image.trim()) {
      return NextResponse.json(
        { success: false, message: "Image URL is required" },
        { status: 400 }
      );
    }

    const BoardOfDirectorCollection = await dbConnect(collection.BOARDOFDIRECTOR);

    const newMember = {
      name: body.name,
      designation: body.designation,
      image: body.image,
      ...(body.socials && { socials: body.socials }),
      createdAt: new Date(),
    };

    const result = await BoardOfDirectorCollection.insertOne(newMember);

    return NextResponse.json({
      success: true,
      message: "Board member added successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add board member" },
      { status: 500 }
    );
  }
}
