	function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['objetos', 'vendas'],
          ['Eletronics',     6],
          ['Furniture',      10],
          ['Toys',  4]
        ]);

        var options = {
          title: '',
          legend: 'top',
          pieHole: 0.3,
          slices: {
            0: { color: 'rgb(0,185,170)' },
            1: { color: 'rgb(242,200,68)' },
            2: { color: 'rgb(255,95,98)'}
          },

        chartArea:{
       		top:"15%",
       		width:"100%",
       		height:"100%",
       	}

        };



        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
