var ctx = document.getElementById('myDoughnutChart').getContext('2d')
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
    }]
  },
  options: {
  }
})
