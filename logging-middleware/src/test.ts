import { Log } from "./index";

async function main() {

 
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzYTUxMzQ3QHNydS5lZHUuaW4iLCJleHAiOjE3ODE3NzEzMjgsImlhdCI6MTc4MTc3MDQyOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQ0ODU4MzE4LWZhNjAtNDYwYy1iMDA1LTg5N2U2MDFhNjRmMyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZhaXNobmF2aSBiYWlyYWdvbmkiLCJzdWIiOiJhZjRjNGYwMC01NjhlLTQ1MmQtOTE3ZS1kYTczZDNiM2I0MmYifSwiZW1haWwiOiIyMzAzYTUxMzQ3QHNydS5lZHUuaW4iLCJuYW1lIjoidmFpc2huYXZpIGJhaXJhZ29uaSIsInJvbGxObyI6IjIzMDNhNTEzNDciLCJhY2Nlc3NDb2RlIjoiYkRyZUFxIiwiY2xpZW50SUQiOiJhZjRjNGYwMC01NjhlLTQ1MmQtOTE3ZS1kYTczZDNiM2I0MmYiLCJjbGllbnRTZWNyZXQiOiJndW5DcFBhS1FDVHVZVkdkIn0.T6xnFodfL5hGsF_9tYsZWJhPPDnghSkg490VXf7Qlhk";

  const response = await Log(
    "backend",
    "info",
    "handler",
    "Logging Middleware Test",
    accessToken
  );

  console.log(response);
}

main();