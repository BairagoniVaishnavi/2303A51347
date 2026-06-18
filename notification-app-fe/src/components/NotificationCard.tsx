import { Notification } from "../types/notification";

interface Props {
  notification: Notification;
}

function NotificationCard({ notification }: Props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>{notification.title}</h3>

      <p>{notification.message}</p>

      <small>{notification.createdAt}</small>
    </div>
  );
}

export default NotificationCard;