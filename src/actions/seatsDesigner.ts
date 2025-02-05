import axios from "axios";

export const archiveChart = async (chartKey: string) => {
  try {
    const response = await axios.post(
      `https://api-eu.seatsio.net/charts/${chartKey}/actions/move-to-archive`,
      {},
      {
        headers: {
          Authorization:
            "Basic MWMwYzUwZTEtOTRkYi00NzQ0LWE3NjMtZDFmZDE3ODAyZjVkOg==",
          "Content-Type": "application/json",
          "X-Client-Lib": "js",
        },
      }
    );
    return;
  } catch (error) {
    throw error;
  }
};
