function toggleDropdown(id, btn) {
    var content = document.getElementById(id);
    var arrow = btn.querySelector('.arrow');
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove('rotated');
    } else {
        content.style.display = "block";
        arrow.classList.add('rotated');
    }
}

// Tema 1: Modelo Discreto

function loadCivilStatusDiagram() {
    var diagram = `digraph civil_status {
        rankdir=LR;
        size="6,4";

        // Estado de aceptación
        node [shape = doublecircle]; Muerto;

        // Estados normales
        node [shape = circle];
        Soltero;
        Casado;
        Divorciado;
        Viudo;

        // Transiciones
        Soltero -> Casado [label="Cs"];
        Casado -> Divorciado [label="Dv"];
        Casado -> Viudo [label="Ev"];
        Soltero -> Muerto [label="Mr"];
        Casado -> Muerto [label="Mr"];
        Divorciado -> Muerto [label="Mr"];
        Viudo -> Muerto [label="Mr"];
        Divorciado -> Casado [label="Cs"];
        Viudo -> Casado [label="Cs"];
    }`;

    // Crear instancia de Viz.js
    var viz = new Viz();

    // Renderizar el diagrama
    viz.renderSVGElement(diagram)
        .then(function(element) {
            var container = document.getElementById("diagramModelDis");
            container.innerHTML = "";
            container.appendChild(element);
        })
        .catch(error => {
            console.error("Error al generar el diagrama:", error);
        });
}

// Tema 2: AF y AFD
function loadDiagramAF() {
    var diagram = `digraph finite_state_machine {
        rankdir=LR;
        size="6,4";
        
        node [shape = doublecircle]; q1;  // Estado de aceptación
        node [shape = circle]; q0;

        // Transiciones
        q0 -> q0 [label = "0"];
        q0 -> q1 [label = "1"];
        q1 -> q0 [label = "0"];
        q1 -> q1 [label = "1"];

        // Estado inicial
        q0 [label="q0 (Inicio)"];
        q1 [label="q1 (Aceptación)"];
    }`;

    var viz = new Viz();
    viz.renderSVGElement(diagram)
        .then(function(element) {
            var container = document.getElementById("diagramAF");
            container.innerHTML = "";
            container.appendChild(element);
        })
        .catch(error => {
            console.error(error);
        });
}

function loadAFD() {
    var diagram = `digraph finite_state_machine {
        rankdir=LR;
        size="6,4";
        
        node [shape = doublecircle]; q0;  // Estado de aceptación (par de ceros)
        node [shape = circle]; q1;

        // Transiciones
        q0 -> q1 [label = "0"];
        q0 -> q0 [label = "1"];
        q1 -> q0 [label = "0"];
        q1 -> q1 [label = "1"];

        // Estado inicial
        q0 [label="q0 (Par de ceros)"];
        q1 [label="q1 (Impar de ceros)"];
    }`;

    var viz = new Viz();
    viz.renderSVGElement(diagram)
        .then(function(element) {
            var container = document.getElementById("diagramAFD");
            container.innerHTML = "";
            container.appendChild(element);
        })
        .catch(error => {
            console.error(error);
        });
}

// Tema 4: Tabla de Transiciones

function loadParOnesDiagram() {
    // Definición del autómata
    var diagram = `digraph ParOnes {
        rankdir=LR;
        size="6,4";
        
        node [shape = doublecircle]; q0;
        node [shape = circle];
        
        q0 -> q1 [label = "1"];
        q0 -> q0 [label = "0"];
        
        q1 -> q0 [label = "1"];
        q1 -> q1 [label = "0"];
    }`;

    // Renderizado con Viz.js
    var viz = new Viz();
    viz.renderSVGElement(diagram)
        .then(function(element) {
            var container = document.getElementById("diagramParOnes");
            container.innerHTML = "";
            container.appendChild(element);
        })
        .catch(error => {
            console.error(error);
        });
}

//Tema 5 y 6: Funcion de Transicion y Transicion Extendida

function loadImparAsDiagram() {
    // Definición del autómata
    var diagram = `digraph ImparAs {
        rankdir=LR;
        size="6,4";
        
        node [shape = doublecircle]; q1;
        node [shape = circle];

        q0 [label="q0 (par)"];
        q1 [label="q1 (impar)"];

        q0 -> q1 [label = "a"];
        q0 -> q0 [label = "b"];

        q1 -> q0 [label = "a"];
        q1 -> q1 [label = "b"];
    }`;

    // Renderizado con Viz.js
    var viz = new Viz();
    viz.renderSVGElement(diagram)
        .then(function(element) {
            var container = document.getElementById("diagramImparAs");
            container.innerHTML = "";
            container.appendChild(element);
        })
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadCivilStatusDiagram();
    loadDiagramAF();
    loadAFD();
    loadParOnesDiagram();
    loadImparAsDiagram();
});