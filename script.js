document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get input values
    const heartRate = document.getElementById('heartRate').value;
    const bloodPressure = document.getElementById('bloodPressure').value;
    const sleepHours = document.getElementById('sleepHours').value;
  
    // Show the data on screen
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <p>❤️ Heart Rate: <strong>${heartRate} bpm</strong></p>
      <p>🩸 Blood Pressure: <strong>${bloodPressure}</strong></p>
      <p>😴 Sleep Hours: <strong>${sleepHours} hours</strong></p>
    `;
  
    // Optionally clear the form
    document.getElementById('healthForm').reset();
  });
