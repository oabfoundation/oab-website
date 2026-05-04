"use server"
import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";



export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID format" },
        { status: 400 }
      );
    }
     const projectCollection = await dbConnect(collection.PROJECTS);
    const project = await projectCollection.findOne({ _id: new ObjectId(id) });

    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: project });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ✅ UPDATE (edit)
export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();

    const projectCollection = await dbConnect(collection.PROJECTS);

    await projectCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body } // title, image, etc
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ✅ DELETE
export async function DELETE(req, { params }) {
  try {
    const { id } =params;

    const projectCollection = await dbConnect(collection.PROJECTS);

    await projectCollection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}