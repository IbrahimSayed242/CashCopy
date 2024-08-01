import type { APIRoute } from "astro";
import axios from 'axios';

const geoip_api = "30eb1316e4ce4c6dafb0af0a930ba6fe";

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

    let country = data.get("user_country");
    if (!country && user_ip) {
      try {
        const geoResponse = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${geoip_api}&ip=${user_ip}`);
        country = geoResponse.data.country_name;
      } catch (geoError) {
        console.error("Error fetching country from IP:", geoError.message);
      }
    }

    formData = {
      name1: firstName,
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
      country: country,
    };

    console.log("formData prepared:", formData);

    const endpoint1 = 'https://alltargeting.com/api/method/heero.api.leads.flagedu_lead';

    try {
      const response1 = await axios.post(endpoint1, formData);
      console.log("Response from endpoint1:", response1.data);
      return new Response(
        JSON.stringify({ success: true, responseData: response1.data, formData: formData }),
        { status: 200 }
      );
    } catch (error: any) {
      console.error('Error occurred with endpoint1:', error.message);
      return new Response(
        JSON.stringify({ success: false, message: error.message, formData: formData }),
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
