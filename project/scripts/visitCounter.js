// visitCounter.js

const visitCount = document.querySelector("#visit-num");
let visitNum = GetVisitNum();

// Incrementa o número de visitas se estiver na página inicial
if (document.title === "Journey to Japan") {
    visitNum++;
    DisplayVisitNum(visitNum);
    SetVisitNum();
}

// Função para obter o número de visitas do localStorage
function GetVisitNum() {
    return JSON.parse(localStorage.getItem("numVisits")) || 0;
}

// Função para exibir o número de visitas
function DisplayVisitNum(visits) {
    visitCount.textContent = visits;
}

// Função para definir o número de visitas no localStorage
function SetVisitNum() {
    localStorage.setItem("numVisits", JSON.stringify(visitNum));
}
