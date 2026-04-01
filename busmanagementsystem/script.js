// Predefined Routes
const routes = [
    "LNCT → Bhopal Railway Station",
    "LNCT → ISBT Bus Stand",
    "LNCT → Kolar Road",
    "LNCT → Ayodhya Nagar",
    "LNCT → MP Nagar",
    "LNCT → Lalghati",
    "LNCT → Garba Night Special Route"
];

// Load existing buses
let buses = JSON.parse(localStorage.getItem("buses")) || [];

// Generate Random Bus Number
function generateBusNumber() {
    return "BUS-" + Math.floor(1000 + Math.random() * 9000);
}

// Load routes in dropdown
if (document.getElementById("route")) {
    let routeSelect = document.getElementById("route");

    routes.forEach(r => {
        let option = document.createElement("option");
        option.value = r;
        option.textContent = r;
        routeSelect.appendChild(option);
    });
}

// Add Bus
function addBus(event) {
    event.preventDefault();

    let driver = document.getElementById("driver").value;
    let route = document.getElementById("route").value;

    let bus = {
        busNo: generateBusNumber(), // auto-generated
        driver: driver,
        route: route
    };

    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));

    alert("Bus Added with Number: " + bus.busNo);
    window.location.href = "view-bus.html";
}

// Display Bus List
if (document.getElementById("busTable")) {
    let table = document.getElementById("busTable");

    buses.forEach(bus => {
        let row = `<tr>
            <td>${bus.busNo}</td>
            <td>${bus.driver}</td>
            <td>${bus.route}</td>
        </tr>`;

        table.innerHTML += row;
    });
}