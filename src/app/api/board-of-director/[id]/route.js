import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid board member ID" },
        { status: 400 }
      );
    }

    const BoardOfDirectorCollection = await dbConnect(collection.BOARDOFDIRECTOR);
    const result = await BoardOfDirectorCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Board member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch board member" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid board member ID" },
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
    if (body.designation !== undefined && (!body.designation || !body.designation.trim())) {
      return NextResponse.json(
        { success: false, message: "Designation cannot be empty" },
        { status: 400 }
      );
    }
    if (body.image !== undefined && (!body.image || !body.image.trim())) {
      return NextResponse.json(
        { success: false, message: "Image URL cannot be empty" },
        { status: 400 }
      );
    }

    const BoardOfDirectorCollection = await dbConnect(collection.BOARDOFDIRECTOR);

    const updateData = {
      ...(body.name && { name: body.name }),
      ...(body.designation && { designation: body.designation }),
      ...(body.image && { image: body.image }),
      ...(body.socials && { socials: body.socials }),
      updatedAt: new Date(),
    };

    const result = await BoardOfDirectorCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result.value) {
      return NextResponse.json(
        { success: false, message: "Board member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Board member updated successfully",
      data: result.value,
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update board member" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid board member ID" },
        { status: 400 }
      );
    }

    const BoardOfDirectorCollection = await dbConnect(collection.BOARDOFDIRECTOR);
    const result = await BoardOfDirectorCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Board member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Board member deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete board member" },
      { status: 500 }
    );
  }
}
