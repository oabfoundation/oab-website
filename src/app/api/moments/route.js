import { collection, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;
    const skip = (page - 1) * limit;

    const MomentsCollection = await dbConnect(collection.MOMENTS);
    const result = await MomentsCollection.find({})
      .sort({ createdAt: 1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const total = await MomentsCollection.countDocuments({});

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
      { success: false, message: "Failed to fetch moments" },
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
    if (!body.role || !body.role.trim()) {
      return NextResponse.json(
        { success: false, message: "Role is required" },
        { status: 400 }
      );
    }
    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { success: false, message: "Title is required" },
        { status: 400 }
      );
    }
    if (!body.description || !body.description.trim()) {
      return NextResponse.json(
        { success: false, message: "Description is required" },
        { status: 400 }
      );
    }
    if (!body.events || !body.events.trim()) {
      return NextResponse.json(
        { success: false, message: "Events is required" },
        { status: 400 }
      );
    }
    if (!body.dateAndTime || !body.dateAndTime.trim()) {
      return NextResponse.json(
        { success: false, message: "Date and time is required" },
        { status: 400 }
      );
    }
    if (!body.location || !body.location.trim()) {
      return NextResponse.json(
        { success: false, message: "Location is required" },
        { status: 400 }
      );
    }
    if (!body.image || !body.image.trim()) {
      return NextResponse.json(
        { success: false, message: "Image URL is required" },
        { status: 400 }
      );
    }
    const MomentsCollection = await dbConnect(collection.MOMENTS);

    const newMoment = {
      name: body.name,
      role: body.role,
      title: body.title,
      description: body.description,
      events: body.events,
      dateAndTime: body.dateAndTime,
      location: body.location,
      image: body.image,
      createdAt: new Date(),
    };

    const result = await MomentsCollection.insertOne(newMoment);

    return NextResponse.json({
      success: true,
      message: "Moment added successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add moment" },
      { status: 500 }
    );
  }
}
