function calculateVO2Max() {
    const distance = document.getElementById('distance').value;
    const timeMinutes = document.getElementById('time').value;
    const timeSeconds = document.getElementById('seconds').value;

    if (distance && timeMinutes && timeSeconds) {
        const timeInMinutes = parseInt(timeMinutes) + (parseInt(timeSeconds) / 60);
        const velocity = distance / timeInMinutes;
        const vo2max = (velocity * 0.2) + 3.5;

        const resultDiv = document.getElementById('results');
        const resultText = `Estimated VO2Max: ${vo2max.toFixed(2)} ml/kg/min`;
        resultDiv.textContent = resultText;
    } else {
        alert('Please fill out all fields');
    }
}
