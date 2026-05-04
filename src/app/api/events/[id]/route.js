import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET
export async function GET(req, { params }) {
  try {
    const eventCollection = await dbConnect(collection.EVENTS);

    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const event = await eventCollection.findOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({ success: true, data: event });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// PATCH
export async function PATCH(req, { params }) {
  try {
    const eventCollection = await dbConnect(collection.EVENTS);

    const { id } = await params;
    const body = await req.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const result = await eventCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    return NextResponse.json({ success: true, result });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// DELETE
export async function DELETE(req, { params }) {
  try {
    const eventCollection = await dbConnect(collection.EVENTS);

    const { id } =await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    await eventCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}