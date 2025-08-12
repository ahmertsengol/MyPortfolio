// Disabled: using free mailto approach only. Keep route for future use.
export async function POST() {
  return new Response(JSON.stringify({ disabled: true }), {
    status: 501,
    headers: { "Content-Type": "application/json" },
  });
}

