import { Notification } from "../models/notification";
import { v4 as uuid } from "uuid";

const notifications: Notification[] = [];

export const getAllNotifications = () => {

    return notifications;

};

export const createNotification = (

    title: string,

    message: string

) => {

    const notification: Notification = {

        id: uuid(),

        title,

        message,

        read: false,

        createdAt: new Date().toISOString()

    };

    notifications.push(notification);

    return notification;

};