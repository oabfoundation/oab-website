import { collection, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;
    const skip = (page - 1) * limit;

    const TestimonialsCollection = await dbConnect(collection.TESTIMONIALS);
    const result = await TestimonialsCollection.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const total = await TestimonialsCollection.countDocuments({});

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
      { success: false, message: "Failed to fetch testimonials" },
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
    if (!body.message || !body.message.trim()) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 }
      );
    }
    if (body.rating !== undefined && (body.rating < 1 || body.rating > 5)) {
      return NextResponse.json(
        { success: false, message: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const TestimonialsCollection = await dbConnect(collection.TESTIMONIALS);

    const newTestimonial = {
      name: body.name,
      designation: body.designation,
      image: body.image,
      message: body.message,
      rating: body.rating,
      createdAt: new Date(),
    };

    const result = await TestimonialsCollection.insertOne(newTestimonial);

    return NextResponse.json({
      success: true,
      message: "Testimonial added successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add testimonial" },
      { status: 500 }
    );
  }
}
