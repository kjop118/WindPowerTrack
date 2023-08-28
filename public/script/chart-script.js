var ctx = document.getElementById('weeklyProductionChart').getContext('2d');
var weeklyProductionChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly production',
      data: [2, 5, 1, 10, 8, 7, 4],
      fill: true,
      borderColor: 'rgb(89, 201, 208)',
      tension: 0.5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        // text: 'Chart.js Line Chart'
      }
    }
  }
});