"use strict";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7050/fieldHub")
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



// starting the app
const startApp = async () => {
    await start();
    await joinUser();
    await receiveMessage();
}

startApp();