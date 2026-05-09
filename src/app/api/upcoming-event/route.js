import { collection, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const UpcomingEventsCollection = await dbConnect(collection.UPCOMINGEVENT);

    const result = await UpcomingEventsCollection.find({}).toArray();

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch data",
      },
      {
        status: 500,
      },
    );
  }
}

// --- POST API ---
export async function POST(request) {
  try {
    const body = await request.json();
    const UpcomingEventsCollection = await dbConnect(collection.UPCOMINGEVENT);

    // Form data-ke number field-e convert kora (karon form input text/string hoye thake)
    const newEvent = {
      ...body,
      fee: Number(body.fee),
      seats_total: Number(body.seats_total),
      seats_taken: 0, // Initially empty
      createdAt: new Date(),
    };

    const result = await UpcomingEventsCollection.insertOne(newEvent);

    return NextResponse.json({
      success: true,
      message: "Event created successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Failed to post data" },
      { status: 500 },
    );
  }
}
