import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid member ID" },
        { status: 400 }
      );
    }

    const GeneralMemberCollection = await dbConnect(collection.GENERALMEMBER);
    const result = await GeneralMemberCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch member" },
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
        { success: false, message: "Invalid member ID" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const GeneralMemberCollection = await dbConnect(collection.GENERALMEMBER);

    const updateData = {
      ...(body.name && { name: body.name }),
      ...(body.designation && { designation: body.designation }),
      ...(body.image && { image: body.image }),
      updatedAt: new Date(),
    };

    const result = await GeneralMemberCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Member updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update member" },
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
        { success: false, message: "Invalid member ID" },
        { status: 400 }
      );
    }

    const GeneralMemberCollection = await dbConnect(collection.GENERALMEMBER);
    const result = await GeneralMemberCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Member deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete member" },
      { status: 500 }
    );
  }
}
