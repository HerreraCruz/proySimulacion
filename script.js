document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const inputForm = document.getElementById('input-form');
    const simulateBtn = document.getElementById('simulate-btn');
    const simulationResults = document.getElementById('simulation-results');
    const restartBtn = document.getElementById('restart-btn');
    const closeBtn = document.getElementById('close-btn');

    // Function to update the displayed value for each range input
    const updateRangeValue = (inputId, valueId) => {
        const input = document.getElementById(inputId);
        const value = document.getElementById(valueId);
        value.textContent = input.value;
        input.addEventListener('input', () => {
            value.textContent = input.value;
        });
    };

    // Initialize range value updates
    updateRangeValue('predator-population', 'predator-population-value');
    updateRangeValue('predator-birth-rate', 'predator-birth-rate-value');
    updateRangeValue('predator-death-rate', 'predator-death-rate-value');
    updateRangeValue('prey-population', 'prey-population-value');
    updateRangeValue('prey-birth-rate', 'prey-birth-rate-value');
    updateRangeValue('prey-death-rate', 'prey-death-rate-value');

    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        inputForm.style.display = 'block';
    });

    simulateBtn.addEventListener('click', () => {
        const predatorPopulation = document.getElementById('predator-population').value;
        const predatorBirthRate = document.getElementById('predator-birth-rate').value;
        const predatorDeathRate = document.getElementById('predator-death-rate').value;
        const preyPopulation = document.getElementById('prey-population').value;
        const preyBirthRate = document.getElementById('prey-birth-rate').value;
        const preyDeathRate = document.getElementById('prey-death-rate').value;

        if (predatorPopulation && predatorBirthRate && predatorDeathRate && 
            preyPopulation && preyBirthRate && preyDeathRate) {
            inputForm.style.display = 'none';
            simulationResults.style.display = 'block';

            // Simple simulation logic (replace with actual simulation)
            const predatorResult = Math.floor(predatorPopulation * (1 + predatorBirthRate - predatorDeathRate));
            const preyResult = Math.floor(preyPopulation * (1 + preyBirthRate - preyDeathRate));

            document.getElementById('predator-result').textContent = `Población final de Depredadores: ${predatorResult}`;
            document.getElementById('prey-result').textContent = `Población final de Presas: ${preyResult}`;
        } else {
            alert('Por favor, ingrese todos los valores requeridos.');
        }
    });

    restartBtn.addEventListener('click', () => {
        simulationResults.style.display = 'none';
        startBtn.style.display = 'inline-block';
        document.getElementById('predator-population').value = '';
        document.getElementById('predator-birth-rate').value = '';
        document.getElementById('predator-death-rate').value = '';
        document.getElementById('prey-population').value = '';
        document.getElementById('prey-birth-rate').value = '';
        document.getElementById('prey-death-rate').value = '';
    });

    closeBtn.addEventListener('click', () => {
        if (confirm('¿Está seguro que desea cerrar la aplicación?')) {
            window.close();
        }
    });

    document.getElementById('start-btn').addEventListener('click', () => {
        window.location.href = 'formulario.html';
    });
});