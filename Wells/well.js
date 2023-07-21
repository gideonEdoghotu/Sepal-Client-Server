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

function InvokeWells() {
    connection.invoke("SendWells").catch(function (err) {
        return console.error(err.toString());
    });
}

function BindWellsToGrid(wells) {
    const tblWell = document.getElementById('tblWell');
    const tbody = tblWell.querySelector('tbody');
    tbody.innerHTML = '';

    wells.forEach((well, index) => {
        const tr = document.createElement('tr');

        const indexCell = document.createElement('td');
        indexCell.textContent = index + 1;
        tr.appendChild(indexCell);

        const completionDateCell = document.createElement('td');
        nameCell.textContent = well.CompletionDate;
        tr.appendChild(completionDateCell);

        const spudDateCell = document.createElement('td');
        genderCell.textContent = well.SpudDate;
        tr.appendChild(spudDateCell);

        const wellNameCell = document.createElement('td');
        mobileCell.textContent = well.WellName;
        tr.appendChild(wellNameCell);

        const surfaceXCell = document.createElement('td');
        mobileCell.textContent = well.SurfaceX;
        tr.appendChild(surfaceXCell);

        const surfaceYCell = document.createElement('td');
        mobileCell.textContent = well.SurfaceYCell;
        tr.appendChild(surfaceYCell);

        const statusCell = document.createElement('td');
        mobileCell.textContent = well.Status;
        tr.appendChild(statusCell);

        tbody.appendChild(tr);
    });
}

const receiveMessage = async () => {
    try {
        connection.on("ReceivedWells", function (wells) {
            BindProductsToGrid(wells);
        })
    } catch (error) {
        console.log(error);
    }
}

// starting the app
const startApp = async () => {
    await start();
    InvokeWells();
    receiveMessage();
}

startApp();