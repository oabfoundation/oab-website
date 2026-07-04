import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid moment ID" },
        { status: 400 }
      );
    }

    const MomentsCollection = await dbConnect(collection.MOMENTS);
    const result = await MomentsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Moment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch moment" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid moment ID" },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Validation
    if (body.name !== undefined && (!body.name || !body.name.trim())) {
      return NextResponse.json(
        { success: false, message: "Name cannot be empty" },
        { status: 400 }
      );
    }
    if (body.role !== undefined && (!body.role || !body.role.trim())) {
      return NextResponse.json(
        { success: false, message: "Role cannot be empty" },
        { status: 400 }
      );
    }
    if (body.title !== undefined && (!body.title || !body.title.trim())) {
      return NextResponse.json(
        { success: false, message: "Title cannot be empty" },
        { status: 400 }
      );
    }
    if (body.description !== undefined && (!body.description || !body.description.trim())) {
      return NextResponse.json(
        { success: false, message: "Description cannot be empty" },
        { status: 400 }
      );
    }
    if (body.events !== undefined && (!body.events || !body.events.trim())) {
      return NextResponse.json(
        { success: false, message: "Events cannot be empty" },
        { status: 400 }
      );
    }
    if (body.dateAndTime !== undefined && (!body.dateAndTime || !body.dateAndTime.trim())) {
      return NextResponse.json(
        { success: false, message: "Date and time cannot be empty" },
        { status: 400 }
      );
    }
    if (body.location !== undefined && (!body.location || !body.location.trim())) {
      return NextResponse.json(
        { success: false, message: "Location cannot be empty" },
        { status: 400 }
      );
    }
    if (body.image !== undefined && (!body.image || !body.image.trim())) {
      return NextResponse.json(
        { success: false, message: "Image URL cannot be empty" },
        { status: 400 }
      );
    }
    const MomentsCollection = await dbConnect(collection.MOMENTS);

    const updateData = {
      ...(body.name && { name: body.name }),
      ...(body.role && { role: body.role }),
      ...(body.title && { title: body.title }),
      ...(body.description && { description: body.description }),
      ...(body.events && { events: body.events }),
      ...(body.dateAndTime && { dateAndTime: body.dateAndTime }),
      ...(body.location && { location: body.location }),
      ...(body.image && { image: body.image }),
      updatedAt: new Date(),
    };

    const result = await MomentsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Moment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Moment updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update moment" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid moment ID" },
        { status: 400 }
      );
    }

    const MomentsCollection = await dbConnect(collection.MOMENTS);
    const result = await MomentsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Moment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Moment deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete moment" },
      { status: 500 }
    );
  }
}
