import type { APIRoute } from "astro";
import axios from "axios";

export const POST: APIRoute = async ({ request }) => {
  // Ensure you capture and log errors properly
  let formData2: any;
  try {
    const data = await request.formData();
    const firstName = data.get("first_name");
    const lastName = data.get("last_name");
    const phone = data.get("phone");
    const email = data.get("email");
    const afp = data.get("afp");
    const uai = data.get("uai");
    const ci = data.get("ci");
    const ani = data.get("ani");
    const ip = data.get("user_ip");

    // Validate the data
    if (!firstName || !lastName || !phone || !email) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const formData = {
      name1: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      afp: afp,
      uai: uai,
      ci: ci,
      ani: ani,
      interest: "Coupons Copy",
      source: afp,
      ip: ip,
    };
    const formData2 = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      afp: afp,
      uai: uai,
      ci: 14,
      ani: ani,
      interest: "Coupons Copy",
      source: afp,
      ip: ip,
      usa_citizen: false,
      password: "@Flagedu2024",
    };
    // Make API requests
    const endpoint1 =
      "https://alltargeting.com/api/method/heero.api.flagedu_lead";
    const endpoint2 =
      "https://api.flagedu.com/api/v1/affiliate/public/exness/signup/";
    //console log formdata2
    console.log(`Endpoint 2: ${endpoint2}`);
    console.log("FormData2:", formData2);
    const response1 = await axios.post(endpoint2, {
      ...formData2,
    });

    return new Response(
      JSON.stringify({
        success: true,
        responses: [response1.data],
        formData2: formData2,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    // Log formData2 and error in case of an error
    console.error("Error occurred:", error.message);
    console.error("FormData2:", formData2);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        formData2: formData2,
      }),
      { status: 500 }
    );
  }
};
