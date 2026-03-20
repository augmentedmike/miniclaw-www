// Load from environment variables
const apiKey = process.env.EMAILOCTOPUS_API_KEY
const listId = process.env.EMAILOCTOPUS_LIST_ID

if (!apiKey || !listId) {
  console.error("❌ Missing environment variables!")
  console.error("Make sure EMAILOCTOPUS_API_KEY and EMAILOCTOPUS_LIST_ID are set in .env.local")
  process.exit(1)
}

async function testSubscribe() {
  const response = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: "test@miniclaw.com",
        fields: {
          FirstName: "Test User",
          Plan: "Download",
          UseCase: "Testing the email integration before deployment",
        },
        tags: ["download", "test"],
      }),
    }
  )

  const data = await response.json()

  if (response.ok) {
    console.log("✓ Test contact added successfully!")
    console.log("Contact ID:", data.id)
    console.log("\nCheck your EmailOctopus dashboard at:")
    console.log("https://emailoctopus.com/lists/8b1456a8-0aaa-11f1-99dd-057f9f00eebf")
  } else {
    console.log("✗ Error:", data)
  }
}

testSubscribe()
