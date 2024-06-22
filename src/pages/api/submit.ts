import type { APIRoute } from "astro";
import axios from 'axios';

export const POST: APIRoute = async ({ request }) => {
  let formData: any;
  try {
    console.log("Request received");

    const data = await request.formData();
    const firstName = data.get("first_name");
    const lastName = data.get("last_name");
    const phone = data.get("phone");
    const email = data.get("email");
    const afp = data.get("afp");
    const uai = data.get("uai");
    const ci = data.get("ci");
    const ani = data.get("ani");
    const user_ip = data.get("user_ip");

    if (!firstName || !lastName || !phone || !email) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    formData = {
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
      user_ip: user_ip,
      usa_citizen: false,
      password: "@Flagedu2024",
    };

    console.log("formData prepared:", formData);

    const endpoint1 = 'https://alltargeting.com/api/method/heero.api.flagedu_lead';
    const endpoint2 = 'https://api.flagedu.com/api/v1/affiliate/public/exness/signup/';

    let loginUrl;
    try {
      const response1 = await axios.post(endpoint2, formData);
      loginUrl = response1.data.login_url[0];
      console.log("Response from endpoint2:", response1.data);
    } catch (error: any) {
      console.error('Error occurred with endpoint2:', error.message);
    }

    try {
      const response2 = await axios.post(endpoint1, formData);
      console.log("Response from endpoint1:", response2.data);
    } catch (error: any) {
      console.error('Error occurred with endpoint1:', error.message);
    }

    if (loginUrl) {
      return new Response(
        JSON.stringify({ success: true, loginUrl: loginUrl, formData: formData }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "No login URL found", formData: formData }),
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error occurred:', error.message);
    console.error('formData:', formData);

    return new Response(
      JSON.stringify({ success: false, error: error.message, formData: formData }),
      { status: 500 }
    );
  }
};
