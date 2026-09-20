
const SLA = 98.4;
const STORAGE_KEY = "scan2TrailerDashboardData";

let editingKey = null;


const dashboardData = {

    "10 September 2026|AM": {

        date: "10 September 2026",
        shift: "AM",

        hours: [
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00"
        ],

        sites: [

            { name:"Alfreton", parcels:5880, scanned:5746, percentage:98.72, hourly:[0,0,4,23,22,5,10,7,4,0] },
            { name:"Aylesham", parcels:3200, scanned:3149, percentage:98.63, hourly:[0,0,6,9,14,7,8,0,0,0] },
            { name:"Basildon", parcels:4759, scanned:4730, percentage:99.81, hourly:[0,0,2,4,0,2,0,0,1,0] },
            { name:"Borehamwood", parcels:4370, scanned:4348, percentage:99.75, hourly:[0,0,3,4,0,0,2,2,0,0] },
            { name:"Bow", parcels:1251, scanned:1224, percentage:98.64, hourly:[0,0,0,9,3,3,0,2,0,0] },
            { name:"Bristol", parcels:4600, scanned:4536, percentage:98.80, hourly:[0,0,3,19,11,3,8,7,4,0] },
            { name:"Carlisle", parcels:1547, scanned:1525, percentage:99.22, hourly:[0,0,0,0,2,1,1,6,2,0] },
            { name:"Coventry", parcels:6958, scanned:6865, percentage:99.34, hourly:[0,0,16,11,6,6,0,3,4,0] },
            { name:"Cullompton", parcels:808, scanned:752, percentage:99.01, hourly:[0,0,1,2,0,0,4,1,0,0] },
            { name:"Farnborough", parcels:3183, scanned:3131, percentage:99.72, hourly:[0,0,3,3,0,1,0,2,0,0] },
            { name:"Gateshead", parcels:6126, scanned:5933, percentage:99.15, hourly:[0,0,6,14,8,4,0,6,8,6] },
            { name:"Gatwick", parcels:4326, scanned:4276, percentage:99.35, hourly:[0,0,8,4,8,0,5,0,3,0] },
            { name:"Glasgow", parcels:6511, scanned:6332, percentage:98.10, hourly:[0,0,2,15,19,19,33,8,28,0] },
            { name:"Gloucester", parcels:2395, scanned:2318, percentage:98.54, hourly:[0,0,6,9,6,0,4,5,5,0] },
            { name:"Hayes", parcels:2392, scanned:2356, percentage:99.67, hourly:[0,0,0,0,0,0,0,2,4,2] },
            { name:"Heathrow", parcels:2550, scanned:2477, percentage:99.37, hourly:[0,0,1,0,1,2,5,1,6,0] },
            { name:"Huyton", parcels:6589, scanned:6554, percentage:99.88, hourly:[0,0,0,2,2,0,1,1,2,0] },
            { name:"Ipswich", parcels:3725, scanned:3681, percentage:99.57, hourly:[0,0,1,5,2,2,0,3,3,0] },
            { name:"Leeds", parcels:7435, scanned:7197, percentage:99.52, hourly:[0,0,5,13,9,6,0,3,0,0] },
            { name:"Lichfield", parcels:8069, scanned:7947, percentage:99.21, hourly:[0,0,2,25,13,3,5,5,11,0] },
            { name:"Lincoln", parcels:3492, scanned:3382, percentage:98.54, hourly:[0,0,7,7,5,6,11,8,6,1] },
            { name:"Linwood", parcels:1524, scanned:1415, percentage:94.55, hourly:[0,0,3,5,10,3,32,4,26,0] },
            { name:"Livingston", parcels:2844, scanned:2811, percentage:99.37, hourly:[0,0,3,3,5,5,0,1,0,1] },
            { name:"Maidstone", parcels:3147, scanned:3133, percentage:99.71, hourly:[0,0,0,1,5,0,3,0,0,0] },
            { name:"Middleton", parcels:6328, scanned:6156, percentage:99.18, hourly:[0,0,4,5,8,10,3,8,14,0] },
            { name:"Mitcham", parcels:2922, scanned:2843, percentage:98.87, hourly:[0,0,6,5,6,2,6,6,2,0] },
            { name:"Nant Garw", parcels:6908, scanned:6760, percentage:99.06, hourly:[0,0,6,8,22,8,11,6,3,1] },
            { name:"Newton Abbot", parcels:3002, scanned:2876, percentage:99.10, hourly:[0,0,2,3,1,3,9,6,2,1] },
            { name:"Northampton", parcels:7749, scanned:7636, percentage:99.63, hourly:[0,0,1,17,5,0,1,0,3,2] },
            { name:"Norwich", parcels:2909, scanned:2854, percentage:99.24, hourly:[0,0,3,2,3,0,7,3,4,0] },
            { name:"Perth", parcels:1708, scanned:1658, percentage:98.59, hourly:[0,0,3,3,2,1,7,2,6,0] },
            { name:"Peterborough", parcels:3108, scanned:3094, percentage:99.81, hourly:[0,0,2,1,1,1,0,1,0,0] },
            { name:"Preston South", parcels:5156, scanned:5035, percentage:99.15, hourly:[0,0,4,9,4,7,9,3,7,1] },
            { name:"Reading", parcels:3351, scanned:3300, percentage:99.46, hourly:[0,0,0,2,6,0,3,4,3,0] },
            { name:"Sandwell", parcels:6645, scanned:6546, percentage:99.88, hourly:[0,0,0,2,1,1,0,2,2,0] },
            { name:"SEL", parcels:3985, scanned:3803, percentage:99.32, hourly:[0,0,0,12,7,2,1,0,4,1] },
            { name:"Selby", parcels:4226, scanned:4199, percentage:99.93, hourly:[0,0,0,1,0,1,1,0,0,0] },
            { name:"Southampton", parcels:5562, scanned:5503, percentage:99.53, hourly:[0,0,2,7,2,7,6,2,0,0] },
            { name:"Stockton", parcels:4925, scanned:4833, percentage:99.13, hourly:[0,0,5,8,15,5,4,1,5,0] },
            { name:"Stoke", parcels:3885, scanned:3858, percentage:99.64, hourly:[0,0,2,4,1,3,1,0,2,1] },
            { name:"Swansea", parcels:3057, scanned:2929, percentage:97.78, hourly:[0,0,4,4,8,2,11,28,10,1] },
            { name:"Swindon", parcels:1418, scanned:1319, percentage:99.15, hourly:[0,0,0,1,1,1,3,4,2,0] },
            { name:"Truro", parcels:649, scanned:637, percentage:99.38, hourly:[0,0,0,2,1,0,0,1,0,0] },
            { name:"Waltham Cross", parcels:7283, scanned:7172, percentage:99.78, hourly:[0,0,1,6,3,1,3,0,2,0] },
            { name:"Warrington", parcels:3059, scanned:2984, percentage:98.73, hourly:[0,0,5,10,1,0,6,10,6,1] },
            { name:"Wrexham", parcels:2546, scanned:2510, percentage:99.41, hourly:[0,0,1,5,2,0,0,6,0,1] },
            { name:"Yeovil", parcels:1698, scanned:1644, percentage:99.29, hourly:[0,0,2,5,0,0,2,1,1,1] }

        ]
    }

};

function formatNumber(number) {
    return Number(number || 0).toLocaleString("en-GB");
}


function calculateMissed(site) {
    return (site.hourly || []).reduce(
        (total, value) => total + Number(value || 0),
        0
    );
}


function getCurrentData() {

    const dateElement =
        document.getElementById("dateSelect");

    const shiftElement =
        document.getElementById("shiftSelect");

    if (!dateElement || !shiftElement) {
        return null;
    }

    return dashboardData[
        `${dateElement.value}|${shiftElement.value}`
    ];
}


function calculateHourlyTotals(sites) {

    if (!sites.length) {
        return [];
    }

    const maxLength =
        Math.max(
            ...sites.map(
                site => (site.hourly || []).length
            ),
            1
        );

    const totals =
        new Array(maxLength).fill(0);

    sites.forEach(site => {

        (site.hourly || []).forEach(
            (value, index) => {

                totals[index] += Number(value || 0);

            }
        );

    });

    return totals;
}


function saveDashboardData() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(dashboardData)
        );

    } catch (error) {

        console.error(
            "Could not save dashboard data.",
            error
        );

    }
}


function loadDashboardData() {

    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return;
    }

    try {

        const parsed =
            JSON.parse(saved);

        Object.keys(parsed).forEach(key => {

            dashboardData[key] =
                parsed[key];

        });

    } catch (error) {

        console.error(
            "Could not load saved dashboard data.",
            error
        );

    }
}


function refreshDateSelector() {

    const select =
        document.getElementById("dateSelect");

    if (!select) {
        return;
    }

    const previous =
        select.value;

    const dates = [
        ...new Set(
            Object.values(dashboardData)
                .map(data => data.date)
        )
    ];

    dates.sort(
        (a, b) =>
            new Date(a) - new Date(b)
    );

    select.innerHTML = "";

    dates.forEach(date => {

        const option =
            document.createElement("option");

        option.value = date;
        option.textContent = date;

        select.appendChild(option);

    });

    if (dates.includes(previous)) {

        select.value =
            previous;

    } else if (dates.length) {

        select.value =
            dates[dates.length - 1];

    }
}


function refreshShiftSelector() {

    const dateSelect =
        document.getElementById("dateSelect");

    const shiftSelect =
        document.getElementById("shiftSelect");

    if (!dateSelect || !shiftSelect) {
        return;
    }

    const date =
        dateSelect.value;

    const previous =
        shiftSelect.value;

    const shifts = [
        ...new Set(
            Object.values(dashboardData)
                .filter(
                    data => data.date === date
                )
                .map(
                    data => data.shift
                )
        )
    ];

    shiftSelect.innerHTML = "";

    shifts.forEach(shift => {

        const option =
            document.createElement("option");

        option.value = shift;
        option.textContent = shift;

        shiftSelect.appendChild(option);

    });

    if (shifts.includes(previous)) {

        shiftSelect.value =
            previous;

    } else if (shifts.length) {

        shiftSelect.value =
            shifts[0];

    }
}


function updateDashboard() {

    const data =
        getCurrentData();

    if (!data) {
        return;
    }

    const sites =
        data.sites || [];

    const totalParcels =
        sites.reduce(
            (total, site) =>
                total + Number(site.parcels || 0),
            0
        );

    const totalScanned =
        sites.reduce(
            (total, site) =>
                total + Number(site.scanned || 0),
            0
        );

    const totalMissed =
        sites.reduce(
            (total, site) =>
                total + calculateMissed(site),
            0
        );

    const overallPercentage =
        totalParcels > 0
            ? totalScanned / totalParcels * 100
            : 0;

    const belowSlaSites =
        sites.filter(
            site =>
                Number(site.percentage) < SLA
        );

    const hourlyTotals =
        calculateHourlyTotals(sites);

    let peakHourIndex = 0;

    hourlyTotals.forEach(
        (value, index) => {

            if (
                value >
                hourlyTotals[peakHourIndex]
            ) {

                peakHourIndex =
                    index;

            }

        }
    );


    const subtitle =
        document.getElementById(
            "dashboardSubtitle"
        );

    if (subtitle) {

        subtitle.textContent =
            `${data.date} · ${data.shift} Shift · ${sites.length} routing services · SLA ${SLA}%`;

    }


    const overall =
        document.getElementById(
            "overallPercentage"
        );

    if (overall) {

        overall.textContent =
            `${overallPercentage.toFixed(2)}%`;

    }


    const parcels =
        document.getElementById(
            "totalParcels"
        );

    if (parcels) {

        parcels.textContent =
            formatNumber(totalParcels);

    }


    const scanned =
        document.getElementById(
            "totalScanned"
        );

    if (scanned) {

        scanned.textContent =
            formatNumber(totalScanned);

    }


    const missed =
        document.getElementById(
            "totalMissed"
        );

    if (missed) {

        missed.textContent =
            formatNumber(totalMissed);

    }


    const below =
        document.getElementById(
            "belowSla"
        );

    if (below) {

        below.textContent =
            `${belowSlaSites.length} / ${sites.length}`;

    }


    const peak =
        document.getElementById(
            "peakHour"
        );

    if (peak) {

        peak.textContent =
            data.hours &&
            data.hours[peakHourIndex]
                ? data.hours[peakHourIndex]
                : "--";

    }


    renderPerformanceChart(sites);

    renderHourlyChart(
        data,
        hourlyTotals
    );

    renderTable(sites);
}


function renderPerformanceChart(sites) {

    const container =
        document.getElementById(
            "performanceChart"
        );

    if (!container) {
        return;
    }

    const sorted =
        [...sites].sort(
            (a, b) =>
                Number(a.percentage) -
                Number(b.percentage)
        );

    if (!sorted.length) {

        container.innerHTML =
            "No data available.";

        return;
    }

    container.innerHTML = "";

    sorted.forEach(site => {

        const row =
            document.createElement("div");

        row.className =
            "chart-row";

        const percentage =
            Number(site.percentage || 0);

        let barClass = "";

        if (percentage < 95) {

            barClass =
                "critical";

        } else if (percentage < SLA) {

            barClass =
                "warning";

        }

        const width =
            Math.max(
                2,
                Math.min(
                    100,
                    percentage
                )
            );


        const label =
            document.createElement("div");

        label.className =
            "chart-label";

        label.title =
            site.name;

        label.textContent =
            site.name;


        const track =
            document.createElement("div");

        track.className =
            "chart-track";


        const bar =
            document.createElement("div");

        bar.className =
            `chart-bar ${barClass}`;

        bar.style.width =
            `${width}%`;


        const value =
            document.createElement("div");

        value.className =
            "chart-value";

        value.textContent =
            `${percentage.toFixed(2)}%`;


        track.appendChild(bar);

        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(value);

        container.appendChild(row);

    });
}

function renderHourlyChart(
    data,
    totals
) {

    const container =
        document.getElementById(
            "hourChart"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (!totals.length) {

        container.textContent =
            "No data available.";

        return;
    }

    const chart =
        document.createElement("div");

    chart.className =
        "hour-chart";

    const max =
        Math.max(
            ...totals,
            1
        );

    let peakIndex = 0;

    totals.forEach(
        (value, index) => {

            if (
                value >
                totals[peakIndex]
            ) {

                peakIndex =
                    index;

            }

        }
    );


    totals.forEach(
        (value, index) => {

            const column =
                document.createElement("div");

            column.className =
                "hour-column";

            const percentage =
                value / max * 100;

            const isPeak =
                index === peakIndex;


            const valueElement =
                document.createElement("div");

            valueElement.className =
                "hour-value";

            valueElement.textContent =
                formatNumber(value);


            const barArea =
                document.createElement("div");

            barArea.className =
                "hour-bar-area";


            const bar =
                document.createElement("div");

            bar.className =
                `hour-bar ${isPeak ? "peak" : ""}`;

            bar.style.height =
                `${Math.max(percentage, 1)}%`;


            const label =
                document.createElement("div");

            label.className =
                "hour-label";

            label.textContent =
                data.hours &&
                data.hours[index]
                    ? data.hours[index]
                    : `Hour ${index + 1}`;


            barArea.appendChild(bar);

            column.appendChild(valueElement);
            column.appendChild(barArea);
            column.appendChild(label);

            chart.appendChild(column);

        }
    );

    container.appendChild(chart);
}


function renderTable(sites) {

    const table =
        document.getElementById(
            "siteTableBody"
        );

    if (!table) {
        return;
    }

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const belowInput =
        document.getElementById(
            "belowSlaOnly"
        );

    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    const belowOnly =
        belowInput
            ? belowInput.checked
            : false;


    const filtered =
        sites
            .filter(site => {

                const matchesSearch =
                    String(site.name)
                        .toLowerCase()
                        .includes(search);

                const matchesSla =
                    !belowOnly ||
                    Number(site.percentage) < SLA;

                return (
                    matchesSearch &&
                    matchesSla
                );

            })
            .sort(
                (a, b) =>
                    Number(a.percentage) -
                    Number(b.percentage)
            );


    table.innerHTML = "";


    filtered.forEach(site => {

        const percentage =
            Number(site.percentage || 0);

        const missed =
            calculateMissed(site);


        let statusClass =
            "status-pass";

        let statusText =
            "PASS";


        if (percentage < 95) {

            statusClass =
                "status-critical";

            statusText =
                "CRITICAL";

        } else if (percentage < SLA) {

            statusClass =
                "status-warning";

            statusText =
                "BELOW SLA";

        }


        const row =
            document.createElement("tr");


        const nameCell =
            document.createElement("td");

        nameCell.textContent =
            site.name;


        const parcelsCell =
            document.createElement("td");

        parcelsCell.textContent =
            formatNumber(site.parcels);


        const scannedCell =
            document.createElement("td");

        scannedCell.textContent =
            formatNumber(site.scanned);


        const percentageCell =
            document.createElement("td");

        percentageCell.textContent =
            `${percentage.toFixed(2)}%`;


        const statusCell =
            document.createElement("td");


        const status =
            document.createElement("span");

        status.className =
            `status ${statusClass}`;

        status.textContent =
            statusText;


        statusCell.appendChild(status);


        const missedCell =
            document.createElement("td");

        missedCell.textContent =
            formatNumber(missed);


        row.appendChild(nameCell);
        row.appendChild(parcelsCell);
        row.appendChild(scannedCell);
        row.appendChild(percentageCell);
        row.appendChild(statusCell);
        row.appendChild(missedCell);


        table.appendChild(row);

    });


    const siteCount =
        document.getElementById(
            "siteCount"
        );

    if (siteCount) {

        siteCount.textContent =
            `${filtered.length} of ${sites.length} sites`;

    }
}


function openDataModal() {

    editingKey = null;

    const modal =
        document.getElementById(
            "addDataModal"
        );

    if (!modal) {
        return;
    }

    const dateInput =
        document.getElementById(
            "newDate"
        );

    const dataInput =
        document.getElementById(
            "newDataInput"
        );

    const errorBox =
        document.getElementById(
            "importError"
        );


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    if (dateInput) {

        dateInput.value =
            today;

    }


    if (dataInput) {

        dataInput.value =
            "";

    }


    if (errorBox) {

        errorBox.textContent =
            "";

    }


    modal.classList.add("show");
}


function closeDataModal() {

    const modal =
        document.getElementById(
            "addDataModal"
        );

    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

    editingKey = null;
}



function formatDateForDashboard(
    dateString
) {

    const date =
        new Date(
            `${dateString}T00:00:00`
        );

    return date.toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}


function dashboardDateToInput(
    dateString
) {

    const date =
        new Date(
            `${dateString}T00:00:00`
        );

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(
            2,
            "0"
        );

    const day =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );

    return `${year}-${month}-${day}`;
}


function parsePastedSiteLine(line) {

    let parts;


    /*
       FIRST: Excel TAB format
    */

    if (line.includes("\t")) {

        parts =
            line.split("\t");

    }


    else if (line.includes("|")) {

        parts =
            line.split("|");

    }


    else {

        const match =
            line.match(
                /(?:^|\s)(-?\d[\d,]*(?:\.\d+)?)(?:\s|$)/
            );


        if (
            !match ||
            match.index == null
        ) {

            parts = [
                line
            ];

        } else {

            const firstNumberStart =
                match.index +
                (
                    match[0].length -
                    match[0].trimStart().length
                );


            const before =
                line
                    .slice(
                        0,
                        firstNumberStart
                    )
                    .trim();


            const after =
                line
                    .slice(
                        firstNumberStart
                    )
                    .trim();


            parts = [
                before,
                ...after.split(/\s+/)
            ];

        }

    }


    return parts
        .map(
            value =>
                String(value)
                    .trim()
        )
        .filter(
            value =>
                value !== ""
        );
}


function cleanNumber(value) {

    return Number(
        String(value)
            .replace(/,/g, "")
            .replace(/\s/g, "")
    );
}


function buildHours(count) {

    const hours = [];

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const hour =
            (7 + i) % 24;

        hours.push(
            `${String(hour).padStart(2, "0")}:00`
        );

    }

    return hours;
}



function saveNewData() {

    const dateElement =
        document.getElementById(
            "newDate"
        );

    const shiftElement =
        document.getElementById(
            "newShift"
        );

    const inputElement =
        document.getElementById(
            "newDataInput"
        );

    const errorBox =
        document.getElementById(
            "importError"
        );


    if (
        !dateElement ||
        !shiftElement ||
        !inputElement ||
        !errorBox
    ) {

        return;

    }


    const dateInput =
        dateElement.value;

    const shift =
        shiftElement.value;

    const rawData =
        inputElement.value.trim();


    errorBox.textContent =
        "";


    if (!dateInput) {

        errorBox.textContent =
            "Please select a date.";

        return;
    }


    if (!rawData) {

        errorBox.textContent =
            "Please paste your site data.";

        return;
    }


    const lines =
        rawData
            .split(/\r?\n/)
            .map(
                line =>
                    line.trim()
            )
            .filter(Boolean);


    const parsedRows = [];


    try {

        lines.forEach(
            (line, index) => {

                const parts =
                    parsePastedSiteLine(
                        line
                    );


                /*
                   Minimum:

                   Site
                   Parcels
                   Scanned
                */

                if (
                    parts.length < 3
                ) {

                    throw new Error(
                        `Line ${index + 1}: needs at least Site, Parcels and Scanned.`
                    );

                }


                const name =
                    parts[0].trim();


                const parcels =
                    cleanNumber(
                        parts[1]
                    );


                const scanned =
                    cleanNumber(
                        parts[2]
                    );


                if (
                    !name ||
                    !Number.isFinite(parcels) ||
                    !Number.isFinite(scanned) ||
                    parcels < 0 ||
                    scanned < 0
                ) {

                    throw new Error(
                        `Line ${index + 1}: invalid site, parcels or scanned value.`
                    );

                }



                const hourly =
                    parts
                        .slice(3)
                        .map(
                            cleanNumber
                        );


                
                if (
                    parts.length > 20
                ) {

                    throw new Error(
                        `Line ${index + 1}: too many values. Maximum is 20 values total (Site + Parcels + Scanned + up to 17 hourly values).`
                    );

                }


                

                if (
                    hourly.some(
                        value =>
                            !Number.isFinite(value) ||
                            value < 0
                    )
                ) {

                    throw new Error(
                        `Line ${index + 1}: hourly values must be zero or positive numbers.`
                    );

                }


                parsedRows.push({

                    name,
                    parcels,
                    scanned,
                    hourly

                });

            }
        );


    } catch (error) {

        errorBox.textContent =
            error.message;

        return;

    }



    const hourlyCount =
        Math.max(
            1,
            ...parsedRows.map(
                row =>
                    row.hourly.length
            )
        );


    const sites =
        parsedRows.map(
            row => {

                const hourly =
                    [
                        ...row.hourly
                    ];


                /*
                   Fill missing hourly
                   values with zero.
                */

                while (
                    hourly.length <
                    hourlyCount
                ) {

                    hourly.push(0);

                }


                const percentage =
                    row.parcels > 0
                        ? (
                            row.scanned /
                            row.parcels *
                            100
                        )
                        : 0;


                return {

                    name:
                        row.name,

                    parcels:
                        row.parcels,

                    scanned:
                        row.scanned,

                    percentage,

                    hourly

                };

            }
        );


    const dashboardDate =
        formatDateForDashboard(
            dateInput
        );


    const key =
        `${dashboardDate}|${shift}`;



    if (
        editingKey &&
        editingKey !== key
    ) {

        delete dashboardData[
            editingKey
        ];

    }


    dashboardData[key] = {

        date:
            dashboardDate,

        shift,

        hours:
            buildHours(
                hourlyCount
            ),

        sites

    };


    saveDashboardData();


   

    refreshDateSelector();


    const dateSelect =
        document.getElementById(
            "dateSelect"
        );

    if (dateSelect) {

        dateSelect.value =
            dashboardDate;

    }


    refreshShiftSelector();


    const shiftSelect =
        document.getElementById(
            "shiftSelect"
        );

    if (shiftSelect) {

        shiftSelect.value =
            shift;

    }


    updateDashboard();

    refreshManagementButtons();

    closeDataModal();
}


function siteDataToText(sites) {

    return sites
        .map(
            site => {

                const hourly =
                    (
                        site.hourly ||
                        []
                    )
                    .map(
                        value =>
                            Number(value || 0)
                    );


                
                while (
                    hourly.length < 17
                ) {

                    hourly.push(0);

                }


                return [

                    site.name,

                    site.parcels,

                    site.scanned,

                    ...hourly.slice(
                        0,
                        17
                    )

                ].join(
                    " | "
                );

            }
        )
        .join("\n");
}



function editCurrentData() {

    const data =
        getCurrentData();


    if (!data) {

        alert(
            "There is no data for the selected date and shift."
        );

        return;

    }


    editingKey =
        `${data.date}|${data.shift}`;


    const dateInput =
        document.getElementById(
            "newDate"
        );

    const shiftInput =
        document.getElementById(
            "newShift"
        );

    const dataInput =
        document.getElementById(
            "newDataInput"
        );

    const errorBox =
        document.getElementById(
            "importError"
        );

    const modal =
        document.getElementById(
            "addDataModal"
        );


    if (dateInput) {

        dateInput.value =
            dashboardDateToInput(
                data.date
            );

    }


    if (shiftInput) {

        shiftInput.value =
            data.shift;

    }


    if (dataInput) {

        dataInput.value =
            siteDataToText(
                data.sites || []
            );

    }


    if (errorBox) {

        errorBox.textContent =
            "Editing existing data. Save Data to replace this date/shift.";

    }


    if (modal) {

        modal.classList.add(
            "show"
        );

    }
}




function refreshManagementButtons() {

    const addButton =
        document.getElementById(
            "addDataButton"
        );


    if (!addButton) {
        return;
    }


    let editButton =
        document.getElementById(
            "editDataButton"
        );


   
    if (!editButton) {

        editButton =
            document.createElement(
                "button"
            );

        editButton.id =
            "editDataButton";

        editButton.type =
            "button";

       

        editButton.className =
            "primary-button";

        editButton.textContent =
            "Edit Data";


        editButton.addEventListener(
            "click",
            editCurrentData
        );


        addButton.parentElement.insertBefore(
            editButton,
            addButton.nextSibling
        );

    }


    

    const hasData =
        Boolean(
            getCurrentData()
        );


    editButton.disabled =
        !hasData;
}




function initialiseDashboard() {

    const addButton =
        document.getElementById(
            "addDataButton"
        );

    const closeButton =
        document.getElementById(
            "closeModalButton"
        );

    const cancelButton =
        document.getElementById(
            "cancelDataButton"
        );

    const saveButton =
        document.getElementById(
            "saveDataButton"
        );

    const dateSelect =
        document.getElementById(
            "dateSelect"
        );

    const shiftSelect =
        document.getElementById(
            "shiftSelect"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const belowSlaOnly =
        document.getElementById(
            "belowSlaOnly"
        );

    const modal =
        document.getElementById(
            "addDataModal"
        );



    if (addButton) {

        addButton.addEventListener(
            "click",
            openDataModal
        );

    }



    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeDataModal
        );

    }


    if (cancelButton) {

        cancelButton.addEventListener(
            "click",
            closeDataModal
        );

    }



    if (saveButton) {

        saveButton.addEventListener(
            "click",
            saveNewData
        );

    }



    if (dateSelect) {

        dateSelect.addEventListener(
            "change",
            () => {

                refreshShiftSelector();

                updateDashboard();

                refreshManagementButtons();

            }
        );

    }



    if (shiftSelect) {

        shiftSelect.addEventListener(
            "change",
            () => {

                updateDashboard();

                refreshManagementButtons();

            }
        );

    }




    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const data =
                    getCurrentData();


                if (data) {

                    renderTable(
                        data.sites
                    );

                }

            }
        );

    }


    

    if (belowSlaOnly) {

        belowSlaOnly.addEventListener(
            "change",
            () => {

                const data =
                    getCurrentData();


                if (data) {

                    renderTable(
                        data.sites
                    );

                }

            }
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    modal
                ) {

                    closeDataModal();

                }

            }
        );

    }




    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeDataModal();

            }

        }
    );


  

    loadDashboardData();

    refreshDateSelector();

    refreshShiftSelector();

    updateDashboard();

    refreshManagementButtons();

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseDashboard
    );

} else {

    initialiseDashboard();

}