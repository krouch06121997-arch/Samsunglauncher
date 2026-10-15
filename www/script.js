// Function to update live clock and date
function updateClock() {
    const now = new Date();
    
    // Format Time (HH:MM)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = `${hours}:${minutes}`;
    
    // Update elements
    document.getElementById('current-time').innerText = timeString;
    document.getElementById('clock-number').innerText = timeString;

    // Format Date (Day, Month Date)
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date-text').innerText = dateString;
}

// Run every second
setInterval(updateClock, 1000);

// Initial call
updateClock();

// App click event simulation
document.querySelectorAll('.app-item').forEach(item => {
    item.addEventListener('click', () => {
        const appName = item.querySelector('span').innerText;
        alert(`Opening ${appName}... (Custom App Action)`);
    });
});

