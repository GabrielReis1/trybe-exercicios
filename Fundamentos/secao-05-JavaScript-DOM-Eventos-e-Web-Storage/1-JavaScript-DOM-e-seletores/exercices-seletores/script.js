const cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "rgb(42,176,105)";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = 'rgb(250,158,132)';

const emergencyTasksH = document.querySelectorAll(".emergency-tasks h3");
    for (let index = 0; index < emergencyTasksH.length; index += 1){
        emergencyTasksH[index].style.backgroundColor = "rgb(165,1,243)";
}

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = 'rgb(249,219,95)';

const noEmergencyTasksH = document.querySelectorAll('.no-emergency-tasks h3');
    for (let index = 0; index < noEmergencyTasksH.length; index += 1){
        noEmergencyTasksH[index].style.backgroundColor = "rgb(35,37,37)";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(7,53,51)";