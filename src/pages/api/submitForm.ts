import type { APIRoute } from "astro";
import axios from 'axios';

export const POST: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams.entries());

  const data = await request.formData();
  const firstName = data.get("first_name");
  const lastName = data.get("last_name");
  const phone = data.get("phone");
  const email = data.get("email");

  // Validate the data
  if (!firstName || !lastName || !phone || !email) {
    return new Response(
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400 }
    );
  }

  const formData = {
    first_name: firstName,
    last_name: lastName,
    phone,
    email
  };

  const endpoint1 = 'https://example.com/endpoint1';
  const endpoint2 = 'https://example.com/endpoint2';

  try {
    const response1 = await axios.post(endpoint1, {
      ...formData,
      ...params,
    });

    const response2 = await axios.post(endpoint2, {
      ...formData,
      ...params,
    });

    return new Response(
      JSON.stringify({ success: true, responses: [response1.data, response2.data] }),
      { status: 200 }
    );
  } catch (error:any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};
