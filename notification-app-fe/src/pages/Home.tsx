import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Notification } from "../types/notification";
import NotificationList from "../components/NotificationList";

function Home() {
  const [notifications, setNotifications] = useState<
    Notification[]
  >([]);

  useEffect(() => {
    api
      .get("/notifications")
      .then((res) => {
        setNotifications(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Notifications</h1>

      <NotificationList
        notifications={notifications}
      />
    </div>
  );
}

export default Home;