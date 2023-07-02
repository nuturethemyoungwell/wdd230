const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Fridays",
    "Saturday"
];

const date = new Date();
const dayName = daynames[date.getDay]
document.getElementById("getDay").textContent = dayName;

function geCurrentDate(dayNames){
    if (daynames === "Monday") {
    console.log("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.")
}
else if (dayNames === "Tuesday"){
    console.log("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.")
}
return
}