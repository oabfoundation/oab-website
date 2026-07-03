import { collection, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;
    const skip = (page - 1) * limit;

    const ReferenceCollection = await dbConnect(collection.REFERENCE);
    const result = await ReferenceCollection.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const total = await ReferenceCollection.countDocuments({});

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
      { success: false, message: "Failed to fetch references" },
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
    if (!body.destination || !body.destination.trim()) {
      return NextResponse.json(
        { success: false, message: "Destination is required" },
        { status: 400 }
      );
    }
    if (!body.program || !body.program.trim()) {
      return NextResponse.json(
        { success: false, message: "Program is required" },
        { status: 400 }
      );
    }
    if (!body.session || !body.session.trim()) {
      return NextResponse.json(
        { success: false, message: "Session is required" },
        { status: 400 }
      );
    }
    if (!body.image || !body.image.trim()) {
      return NextResponse.json(
        { success: false, message: "Image URL is required" },
        { status: 400 }
      );
    }
    if (!body.quote || !body.quote.trim()) {
      return NextResponse.json(
        { success: false, message: "Quote is required" },
        { status: 400 }
      );
    }
    if (!body.achievement || !body.achievement.trim()) {
      return NextResponse.json(
        { success: false, message: "Achievement is required" },
        { status: 400 }
      );
    }

    const ReferenceCollection = await dbConnect(collection.REFERENCE);

    const newReference = {
      name: body.name,
      destination: body.destination,
      program: body.program,
      session: body.session,
      image: body.image,
      quote: body.quote,
      achievement: body.achievement,
      createdAt: new Date(),
    };

    const result = await ReferenceCollection.insertOne(newReference);

    return NextResponse.json({
      success: true,
      message: "Reference added successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add reference" },
      { status: 500 }
    );
  }
}
