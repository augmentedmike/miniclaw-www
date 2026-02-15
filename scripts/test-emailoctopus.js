const apiKey = "eo_270c60780d264e5af535785c71c298b0209334654a2888d693c2d30e6daf6df6"
const listId = "8b1456a8-0aaa-11f1-99dd-057f9f00eebf"

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
        email_address: "test@clawdaddy.com",
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
