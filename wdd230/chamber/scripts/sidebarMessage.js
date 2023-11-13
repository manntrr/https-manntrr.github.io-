function setLastVisit(lastVisitDate) {
    localStorage.setItem("lastVisit", lastVisitDate);
}

function getLastVisit() {
    return localStorage.getItem("lastVisit");
}

const messageElement = document.querySelector('#sidebarMessage');
const dateToday = new Date();
const lastVisitValue = getLastVisit();

var message = "";
if(lastVisitValue == null) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = new Date(lastVisitValue);
    /* https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript */
    const dateDifference = new Date(dateToday.getTime() - lastVisitDate.getTime());
    const daysDifference = dateDifference.getUTCDate() - 1;
    if(daysDifference < 1) {
        message = "Back so soon! Awesome!";
    } else {
        if (daysDifference > 1) {
            message = "You last visited " + daysDifference + " days ago.";
        } else {
            message = "You last visited " + daysDifference + " day ago.";
        }
    }
}

messageElement.textContent = message;
setLastVisit(dateToday);