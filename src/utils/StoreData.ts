// src/utils/brokerUtils.ts
interface Broker {
  id: number;
  name: string;
  result: any;
}

const API_URL =
  "https://alltargeting.com/api/method/heero.flagedu.doctype.brokers.brokers.get_brokers_data";

// Cache mechanism
let cachedData: {
  data: Broker[] | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

// Cache duration (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

export async function getBrokers() {
  // Check if cache is valid
  if (cachedData.data && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    return {
      data: cachedData.data,
      error: null,
      isLoading: false,
    };
  }

  let data: Broker[] = [];
  let error = null;
  let isLoading = true;

  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: " token 2cbd2ea5bec2a9d:b96c0c190c9097e",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const result = await response.json();
    data = result.message || [];

    // Update cache
    cachedData = {
      data,
      timestamp: Date.now(),
    };
  } catch (err) {
    error = err;
    console.error("Error fetching broker data:", err);
  } finally {
    isLoading = false;
  }

  return { data, error, isLoading };
}
