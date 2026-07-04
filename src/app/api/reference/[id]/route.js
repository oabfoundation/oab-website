import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid reference ID" },
        { status: 400 }
      );
    }

    const ReferenceCollection = await dbConnect(collection.REFERENCE);
    const result = await ReferenceCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Reference not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch reference" },
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
        { success: false, message: "Invalid reference ID" },
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
    if (body.destination !== undefined && (!body.destination || !body.destination.trim())) {
      return NextResponse.json(
        { success: false, message: "Destination cannot be empty" },
        { status: 400 }
      );
    }
    if (body.program !== undefined && (!body.program || !body.program.trim())) {
      return NextResponse.json(
        { success: false, message: "Program cannot be empty" },
        { status: 400 }
      );
    }
    if (body.session !== undefined && (!body.session || !body.session.trim())) {
      return NextResponse.json(
        { success: false, message: "Session cannot be empty" },
        { status: 400 }
      );
    }
    if (body.image !== undefined && (!body.image || !body.image.trim())) {
      return NextResponse.json(
        { success: false, message: "Image URL cannot be empty" },
        { status: 400 }
      );
    }
    if (body.quote !== undefined && (!body.quote || !body.quote.trim())) {
      return NextResponse.json(
        { success: false, message: "Quote cannot be empty" },
        { status: 400 }
      );
    }
    if (body.achievement !== undefined && (!body.achievement || !body.achievement.trim())) {
      return NextResponse.json(
        { success: false, message: "Achievement cannot be empty" },
        { status: 400 }
      );
    }

    const ReferenceCollection = await dbConnect(collection.REFERENCE);

    const updateData = {
      ...(body.name && { name: body.name }),
      ...(body.destination && { destination: body.destination }),
      ...(body.program && { program: body.program }),
      ...(body.session && { session: body.session }),
      ...(body.image && { image: body.image }),
      ...(body.quote && { quote: body.quote }),
      ...(body.achievement && { achievement: body.achievement }),
      updatedAt: new Date(),
    };

    const result = await ReferenceCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Reference not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Reference updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update reference" },
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
        { success: false, message: "Invalid reference ID" },
        { status: 400 }
      );
    }

    const ReferenceCollection = await dbConnect(collection.REFERENCE);
    const result = await ReferenceCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Reference not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Reference deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete reference" },
      { status: 500 }
    );
  }
}
