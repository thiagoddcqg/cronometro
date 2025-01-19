function calculateTimeRemaining(endDate) {
    const now = new Date();
    const end = new Date(endDate);
    const totalSeconds = Math.floor((end - now) / 1000);

    if (totalSeconds < 0) {
        return "Data já passou!";
    }

    const totalDays = Math.floor(totalSeconds / (3600 * 24));
    const totalMonths = Math.floor(totalDays / 30.44);
    const remainingDays = totalDays % 30.44;
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Calculate business days
    let businessDays = 0;
    const currentDate = new Date(now);
    while (currentDate <= end) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            businessDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return `${totalMonths} meses, ${remainingDays.toFixed()} dias (${businessDays} úteis), ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

function updateCountdowns() {
    document.getElementById('countdown1').textContent = calculateTimeRemaining('2025-05-02');
    document.getElementById('countdown2').textContent = calculateTimeRemaining('2025-11-04');
}

// Update countdown every second
setInterval(updateCountdowns, 1000);
updateCountdowns();