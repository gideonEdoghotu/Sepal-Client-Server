"use strict";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7050/notification")
    .configureLogging(signalR.LogLevel.Information)
    .build();

const start = async () => {
    try {
        await connection.start();
        console.log("Connected to signal r hub");
    } catch (error) {
        console.log(error);
    }
}

const InvokeUsers = async (message) => {
    try {
        const message = "User Updated";
        await connection.invoke('SendUserNotification', message)
        alert(message);
    } catch (error) {
        console.log(error);
    }
}

const InvokeFields = async (message) => {
    try {
        const message = "Field Updated";
        await connection.invoke('SendFieldNotification', message)
        alert(message);
    } catch (error) {
        console.log(error);
    }
}

const InvokeWells = async (message) => {
    try {
        const message = "Well Updated";
        await connection.invoke('SendWellNotification', message)
        alert(message);
    } catch (error) {
        console.log(error);
    }
}

const InvokeReservoirs = async (message) => {
    try {
        const message = "Reservoir Updated";
        await connection.invoke('SendReservoirNotification', message)
        alert(message);
    } catch (error) {
        console.log(error);
    }
}


// starting the app
const startApp = async () => {
    await start();
    InvokeUsers();
    InvokeFields();
    InvokeWells();
    InvokeReservoirs();
}

startApp();