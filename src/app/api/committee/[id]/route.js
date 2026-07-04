import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid committee member ID" },
        { status: 400 }
      );
    }

    const CommitteeCollection = await dbConnect(collection.COMMITTEE);
    const result = await CommitteeCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Committee member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch committee member" },
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
        { success: false, message: "Invalid committee member ID" },
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

    const CommitteeCollection = await dbConnect(collection.COMMITTEE);

    const updateData = {
      ...(body.name && { name: body.name }),
      ...(body.designation && { designation: body.designation }),
      ...(body.image && { image: body.image }),
      updatedAt: new Date(),
    };

    const result = await CommitteeCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Committee member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Committee member updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update committee member" },
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
        { success: false, message: "Invalid committee member ID" },
        { status: 400 }
      );
    }

    const CommitteeCollection = await dbConnect(collection.COMMITTEE);
    const result = await CommitteeCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Committee member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Committee member deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete committee member" },
      { status: 500 }
    );
  }
}
