{
    var Shp, Shp1, Cab1, Cab2, Cab3, Cab4, Conn, dJSON, dJSON1, dJSONc1, dJSONc2, dJSONc3, dJSONc4, dJSONc5, text, obj;

    Shp = {
        shipname: "Giant_Mk1",
        status: "DOCKED",
        velocity: 0,
        unit: "km/s"
    };
    Shp1 = {
        name: "altitude ",
        value: "0.0",
        unit: "km"
    };
    Cab1 = {
        local: "cabin",
        name: "oxygen ",
        value: "21.00",
        unit: "mmHg "
    };
    Cab2 = {
        local: "cabin",
        name: "temperature ",
        value: "21",
        unit: "C° "
    };
    Cab3 = {
        local: "cabin",
        name: "pressure ",
        value: "14.7",
        unit: "PSIA "
    };
    Cab4 = {
        local: "cabin",
        name: "Co2",
        value: "0.02",
        unit: "mmHg "
    };
    Conn = {
        connect: "connections",
        airlock: (true),
        wing: (true),
        rig: (true)
    };


    dJSON = JSON.stringify(Shp);
    dJSON1 = JSON.stringify(Shp1);
    dJSONc1 = JSON.stringify(Cab1);
    dJSONc2 = JSON.stringify(Cab2);
    dJSONc3 = JSON.stringify(Cab3);
    dJSONc4 = JSON.stringify(Cab4);
    dJSONc5 = JSON.stringify(Conn);


    localStorage.setItem("pJSON", dJSON);
    localStorage.setItem("pJSON1", dJSON1);
    localStorage.setItem("pJSONc1", dJSONc1);
    localStorage.setItem("pJSONc2", dJSONc2);
    localStorage.setItem("pJSONc3", dJSONc3);
    localStorage.setItem("pJSONc4", dJSONc4);
    localStorage.setItem("pJSONc5", dJSONc5);

    text = localStorage.getItem("pJSON");
    obj = JSON.parse(text);
    text = localStorage.getItem("pJSON1");
    obj1 = JSON.parse(text);
    text = localStorage.getItem("pJSONc1");
    obj2 = JSON.parse(text);
    text = localStorage.getItem("pJSONc2");
    obj3 = JSON.parse(text);
    text = localStorage.getItem("pJSONc3");
    obj4 = JSON.parse(text);
    text = localStorage.getItem("pJSONc4");
    obj5 = JSON.parse(text);
    text = localStorage.getItem("pJSONc5");
    conn = JSON.parse(text);

    document.getElementById("sh").innerHTML = obj.shipname;
    document.getElementById("sh1").innerHTML = obj.status;
    document.getElementById("sh2").innerHTML = obj.velocity;
    document.getElementById("sh3").innerHTML = obj.unit;

    document.getElementById("al").innerHTML = obj1.name;
    document.getElementById("al1").innerHTML = obj1.value;
    document.getElementById("al2").innerHTML = obj1.unit;

    document.getElementById("oxy").innerHTML = obj2.name;
    document.getElementById("oxy1").innerHTML = obj2.value;
    document.getElementById("oxy2").innerHTML = obj2.unit;

    document.getElementById("temp").innerHTML = obj3.name;
    document.getElementById("temp1").innerHTML = obj3.value;
    document.getElementById("temp2").innerHTML = obj3.unit;

    document.getElementById("prez").innerHTML = obj4.name;
    document.getElementById("prez1").innerHTML = obj4.value;
    document.getElementById("prez2").innerHTML = obj4.unit;

    document.getElementById("co").innerHTML = obj5.name;
    document.getElementById("co1").innerHTML = obj5.value;
    document.getElementById("co2").innerHTML = obj5.unit;
    document.getElementById("con").innerHTML = "Airlock sealed : " + conn.airlock;
    document.getElementById("con1").innerHTML = "Wing deployed :  " + conn.wing;
    document.getElementById("con2").innerHTML = "Rig locked : " + conn.rig;
};