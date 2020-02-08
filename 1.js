var value = {
    name: "Mahfud Gunawan",
    age: 25,
    location: "Bandar Lampung",
    married: false,
    hobbies: ["Lari", "Membaca manga onepiece"],

};
var result = JSON.stringify(value);
document.write("value of result = " + result + "<br>");
document.write("type of result = " + typeof result);