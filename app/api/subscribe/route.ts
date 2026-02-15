import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, useCase, plan } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.EMAILOCTOPUS_API_KEY
    const listId = process.env.EMAILOCTOPUS_LIST_ID

    if (!apiKey || !listId) {
      console.error("EmailOctopus credentials not configured")
      return NextResponse.json(
        { error: "Service not configured. Please try again later." },
        { status: 500 }
      )
    }

    // Add subscriber to EmailOctopus
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email_address: email,
          fields: {
            FirstName: name || "",
            Plan: plan,
            UseCase: useCase || "",
          },
          tags: [plan.toLowerCase()],
        }),
      }
    )

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Subscribed!" })
    } else if (data.error?.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      return NextResponse.json({ success: true, message: "Already subscribed!" })
    } else {
      console.error("EmailOctopus error:", data)
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Subscribe error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
