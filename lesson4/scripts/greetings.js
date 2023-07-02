//const display = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
const message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

if (now.getDay() > 0 && now.getDay() < 3){
    document.getElementById("display").innerHTML = message;
}

