document.getElementById("academicForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nota = parseFloat(document.getElementById("nota").value);
    const asistencia = parseInt(document.getElementById("asistencia").value);
    const plataforma = document.getElementById("plataforma").value;

    let riesgo = "";
    let clase = "";

    // Reglas lógicas simuladas (analítica predictiva)
    if (nota < 3.0 || asistencia < 70 || plataforma === "bajo") {
        riesgo = "Alto";
        clase = "text-danger";
    } else if (nota >= 3.0 && nota < 3.5) {
        riesgo = "Medio";
        clase = "text-warning";
    } else {
        riesgo = "Bajo";
        clase = "text-success";
    }

    const resultadoTexto = document.getElementById("resultadoTexto");
    resultadoTexto.textContent = `Nivel de riesgo de deserción: ${riesgo}`;
    resultadoTexto.className = clase;

    document.getElementById("resultadoCard").classList.remove("d-none");
});
