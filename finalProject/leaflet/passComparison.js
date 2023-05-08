function createTable() {

    var epicCount, ikonCount, indyCount, independentCount;
    
    var tableData = [
        { //INDEX 0 = EPIC, 
            passName: "Epic Pass",
            skiableAcres: 0,
            avgSnowfall: 0,
            lifts: 0,
            runs:0,
            count: 0
        },
        { //INDEX  1=IKON, 
            passName: "Ikon Pass",
            skiableAcres: 0,
            avgSnowfall: 0,
            lifts: 0,
            runs:0,
            count: 0
        },
        { //INDEX  2=INDY, 
            passName: "Indy Pass",
            skiableAcres: 0,
            avgSnowfall: 0,
            lifts: 0,
            runs:0,
            count: 0
        },
        { //INDEX  3=INDEPENDENT
            passName: "Independent Mountains",
            skiableAcres: 0,
            avgSnowfall: 0,
            lifts: 0,
            runs:0,
            count: 0
        }
        
    ];
    //CALCULATING TOTALS
    for(var i = 0; i < 30; i++) {
        if (resortData.features[i].properties.passType == "Epic") {
            tableData[0].skiableAcres = tableData[0].skiableAcres + resortData.features[i].properties.skiableAcres;
            tableData[0].avgSnowfall = tableData[0].avgSnowfall + resortData.features[i].properties.avgSnowfall;
            tableData[0].lifts = tableData[0].lifts + resortData.features[i].properties.lifts;
            tableData[0].runs = tableData[0].runs + resortData.features[i].properties.runs;
            tableData[0].count ++;
            console.log("epic");
        }

        else if (resortData.features[i].properties.passType == "Ikon") {
            tableData[1].skiableAcres = tableData[1].skiableAcres + resortData.features[i].properties.skiableAcres;
            tableData[1].avgSnowfall = tableData[1].avgSnowfall + resortData.features[i].properties.avgSnowfall;
            tableData[1].lifts = tableData[1].lifts + resortData.features[i].properties.lifts;
            tableData[1].runs = tableData[1].runs + resortData.features[i].properties.runs;
            tableData[1].count ++;
            console.log("ikon");
        }

        else if (resortData.features[i].properties.passType == "Indy Pass") {
            tableData[2].skiableAcres = tableData[2].skiableAcres + resortData.features[i].properties.skiableAcres;
            tableData[2].avgSnowfall = tableData[2].avgSnowfall + resortData.features[i].properties.avgSnowfall;
            tableData[2].lifts = tableData[2].lifts + resortData.features[i].properties.lifts;
            tableData[2].runs = tableData[2].runs + resortData.features[i].properties.runs;
            tableData[2].count ++;
            console.log('indy');
        }

        else {
            tableData[3].skiableAcres = tableData[3].skiableAcres + resortData.features[i].properties.skiableAcres;
            tableData[3].avgSnowfall = tableData[3].avgSnowfall + resortData.features[i].properties.avgSnowfall;
            tableData[3].lifts = tableData[3].lifts + resortData.features[i].properties.lifts;
            tableData[3].runs = tableData[3].runs + resortData.features[i].properties.runs;
            tableData[3].count ++;
            console.log(tableData[3].runs);
        }
    }


    var headers = ["Pass Type","Number of Resorts","Skiable Acres", "Average Snowfall (in)", "Number of Lifts", "Number of Runs"];
    var table = document.createElement("table");  //makes a table element for the page
        
    for(var s = 0; s < tableData.length; s++) {
        var row = table.insertRow(s);
        console.log("hello");
        row.insertCell(0).innerHTML = tableData[s].passName
        row.insertCell(1).innerHTML = tableData[s].count;
        row.insertCell(2).innerHTML = tableData[s].skiableAcres;
        row.insertCell(3).innerHTML = parseInt(tableData[s].avgSnowfall / tableData[s].count);
        row.insertCell(4).innerHTML = tableData[s].lifts;
        row.insertCell(5).innerHTML = tableData[s].runs;
        
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
        headerRow.style.fontWeight = "bold";
    }
    document.body.append(table);

}
