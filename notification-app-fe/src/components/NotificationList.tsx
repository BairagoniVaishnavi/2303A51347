import { Notification } from "../types/notification";
import NotificationCard from "./NotificationCard";

interface Props {
  notifications: Notification[];
}

function NotificationList({ notifications }: Props) {
  return (
    <>
      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}
    </>
  );
}

export default NotificationList;