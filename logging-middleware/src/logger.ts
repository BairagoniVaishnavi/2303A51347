import axios from "axios";
import { Stack, Level, Package, LogResponse } from "./types";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (
  stack: Stack,
  level: Level,
  packageName: Package,
  message: string,
  accessToken: string
): Promise<LogResponse | undefined> => {
  try {
    const response = await axios.post<LogResponse>(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(
      error.response?.data || error.message
    );
    return undefined;
  }
};