function desenharGraficoArea(){

 var tabela = new google.visualization.DataTable();

 	tabela.addColumn('string', 'anos');
	tabela.addColumn('number', 'Laptops');
	tabela.addColumn('number', 'Headsets');
	tabela.addColumn('number', 'Monitors');
	tabela.addColumn('number', 'Phones');


	tabela.addRows([
 	['2016',20,75,15,100],
	['2017',221,500,380,50],
	['2018',33,10,200,100],
	['2019',442,100,387,25],
	['2020',10,40,200,15]
	]);

	var opcoes = {
		isStacked: false,
		title: '',
		titleTextStyle: {
							color: '#5e5851',
							fontSize: 20,
							fontType: 'Arial'
		},
		series: {
			0: {color:'rgb(255,95,98)',},
			1: {color:'rgb(242,200,68)'}, 
			2: {color:'rgb(94,107,109)'},
			3: {color:'rgb(0,185,170)'}, 
		},
		vAxis: {
					minValue: 0},
		legend: 'top',
		lineWidth: 0,
        chartArea:{left:10,top:20,width:"100%",height:"100%",}


	}

	var grafico = new google.visualization.AreaChart(
		document.getElementById('graficoArea'));
		grafico.draw(tabela, opcoes);



}
