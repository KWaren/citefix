const reports = JSON.parse(localStorage.getItem('signalements') || '[]');
const tbody = document.getElementById('report-list');

// ... les fonctions renderReports(), changeStatus() ...

renderReports();

document.getElementById("filter-status").addEventListener("change", function () {
  renderReports(this.value);
});
