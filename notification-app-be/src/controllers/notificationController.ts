import { Request, Response } from "express";

import {

    getAllNotifications,

    createNotification

} from "../services/notificationService";

export const getNotifications = (

    req: Request,

    res: Response

) => {

    res.json(getAllNotifications());

};

export const addNotification = (

    req: Request,

    res: Response

) => {

    const {

        title,

        message

    } = req.body;

    const notification = createNotification(

        title,

        message

    );

    res.status(201).json(notification);

};