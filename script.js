document.getElementById('reportForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
  const experienceText = document.getElementById('experience').value.trim();
  const severityLevel = document.getElementById('severity').value;

  if (!experienceText || !severityLevel) {
    alert('Please fill out all fields.');
    return;
  }

  // Add report to the list
  const reportsList = document.getElementById('reportsList');
  const newReport = document.createElement('li');
  newReport.innerHTML = `
    <p><strong>Сериозност на проблем:</strong> ${'⚠️'.repeat(severityLevel)} (${severityLevel}/5)</p>
    <p>${experienceText}</p>
  `;
  reportsList.appendChild(newReport);

  // Clear form fields
  document.getElementById('reportForm').reset();
});
