(function($) {
	document.querySelector('#bannerClose').addEventListener('click',function() {
		document.querySelector('#proBanner').classList.add('d-none');
	});
	'use strict';
	$(function() {
		if ($(".dashboard-progress-1").length) {
			$('.dashboard-progress-1').circleProgress({
				value: 0.70,
				size: 125,
				thickness: 7,
				startAngle: 80,
				fill: {
					gradient: ["#7922e5", "#1579ff"]
				}
			});
		}
		if ($(".dashboard-progress-1-dark").length) {
			$('.dashboard-progress-1-dark').circleProgress({
				value: 0.70,
				size: 125,
				thickness: 7,
				startAngle: 10,
				emptyFill: '#eef0fa',
				fill: {
					gradient: ["#7922e5", "#1579ff"]
				}
			});
		}

		if ($(".dashboard-progress-2").length) {
			$('.dashboard-progress-2').circleProgress({
				value: 0.60,
				size: 125,
				thickness: 7,
				startAngle: 10,
				fill: {
					gradient: ["#429321", "#b4ec51"]
				}
			});
		}
		if ($(".dashboard-progress-2-dark").length) {
			$('.dashboard-progress-2-dark').circleProgress({
				value: 0.60,
				size: 125,
				thickness: 7,
				startAngle: 10,
				emptyFill: '#eef0fa',
				fill: {
					gradient: ["#429321", "#b4ec51"]
				}
			});
		}

		if ($(".dashboard-progress-3").length) {
			$('.dashboard-progress-3').circleProgress({
				value: 0.90,
				size: 125,
				thickness: 7,
				startAngle: 10,
				fill: {
					gradient: ["#f76b1c", "#fad961"]
				}
			});
		}
		if ($(".dashboard-progress-3-dark").length) {
			$('.dashboard-progress-3-dark').circleProgress({
				value: 0.90,
				size: 125,
				thickness: 7,
				startAngle: 10,
				emptyFill: '#eef0fa',
				fill: {
					gradient: ["#f76b1c", "#fad961"]
				}
			});
		}

		if ($(".dashboard-progress-4").length) {
			$('.dashboard-progress-4').circleProgress({
				value: 0.45,
				size: 125,
				thickness: 7,
				startAngle: 10,
				fill: {
					gradient: ["#9f041b", "#f5515f"]
				}
			});
		}
		if ($(".dashboard-progress-4-dark").length) {
			$('.dashboard-progress-4-dark').circleProgress({
				value: 0.45,
				size: 125,
				thickness: 7,
				startAngle: 10,
				emptyFill: '#eef0fa',
				fill: {
					gradient: ["#9f041b", "#f5515f"]
				}
			});
    }
    
		if ($("#total-profit").length) {
			var totalProfitData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
				datasets: [{
					label: 'Margin',
					data: [5, 4, 6, 4.5, 5.5, 4, 5, 4.2, 5.5],
					backgroundColor: [
						'#cfe1ff',
					],
					borderColor: [
						'#0062ff'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var totalProfitOptions = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#total-profit").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: totalProfitData,
				options: totalProfitOptions,
			});
    }
    
		if ($("#total-profit-dark").length) {
			var graphGradient = document.getElementById("total-profit-dark").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(15, 0, 15, 190);
			saleGradientBg.addColorStop(0, 'rgba(0, 98, 255, .3)');
			saleGradientBg.addColorStop(1, 'rgba(0, 0, 0, .2)');
			var totalProfitDarkData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
				datasets: [{
					label: 'Margin',
					data: [5, 4, 6, 4.5, 5.5, 4, 5, 4.2, 5.5],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#0062ff'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var totalProfitDarkOptions = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false,
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10,
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false,
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10,
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#total-profit-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: totalProfitDarkData,
				options: totalProfitDarkOptions,
			});
		}

		if ($("#total-expences").length) {
			var totalExpencesData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
				datasets: [{
					label: 'Margin',
					data: [4, 5, 6, 5, 4, 5, 4, 6, 5],
					backgroundColor: [
						'#e1fff3',
					],
					borderColor: [
						'#3dd597'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var totalExpencesOptions = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#total-expences").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: totalExpencesData,
				options: totalExpencesOptions,
			});
    }
    
		if ($("#total-expences-dark").length) {
			var graphGradient = document.getElementById("total-expences-dark").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(15, 0, 15, 190);
			saleGradientBg.addColorStop(0, 'rgba(61, 213, 151, .3)');
			saleGradientBg.addColorStop(1, 'rgba(0, 0, 0, .2)');
			var totalExpencesDarkData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
				datasets: [{
					label: 'Margin',
					data: [4, 5, 6, 5, 4, 5, 4, 6, 5],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#3dd597'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var totalExpencesDarkOptions = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#total-expences-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: totalExpencesDarkData,
				options: totalExpencesDarkOptions,
			});
		}

		if ($("#device-sales").length) {
			var deviceSalesData = {
				labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
				datasets: [{
						label: 'Demand',
						data: [450, 500, 300, 350, 200, 320, 310, 700],
						backgroundColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'Supply',
						data: [250, 100, 310, 75, 290, 100, 500, 260],
						backgroundColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderWidth: 1,
						fill: false
					}
				]
			};
			var deviceSalesOptions = {
				scales: {
					xAxes: [{
						stacked: false,
						barPercentage: .5,
						categoryPercentage: 0.4,
						position: 'bottom',
						display: true,
						gridLines: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: true, //this will remove only the label
							stepSize: 500,
							fontColor: "#a7afb7",
							fontSize: 14,
							padding: 10,
						}
					}],
					yAxes: [{
						stacked: false,
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							color: "#eef0fa",
							drawTicks: false,
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							display: true,
							beginAtZero: true,
							stepSize: 200,
							fontColor: "#a7afb7",
							fontSize: 14,
							callback: function(value, index, values) {
								return value + 'k';
							},
						},
					}]
				},
				legend: {
					display: false
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].backgroundColor[i] + ';"></span><span class="legend-label text-dark">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				tooltips: {
					backgroundColor: 'rgba(0, 0, 0, 1)',
				},
				plugins: {
					datalabels: {
						display: false,
						align: 'center',
						anchor: 'center'
					}
				}
			};
			var barChartCanvas = $("#device-sales").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: deviceSalesData,
				options: deviceSalesOptions
			});
			document.getElementById('device-sales-legend').innerHTML = barChart.generateLegend();
    }
    
		if ($("#device-sales-dark").length) {
			var deviceSalesDarkData = {
				labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
				datasets: [{
						label: 'Demand',
						data: [450, 500, 300, 350, 200, 320, 310, 700],
						backgroundColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'Supply',
						data: [250, 100, 310, 75, 290, 100, 500, 260],
						backgroundColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderWidth: 1,
						fill: false
					}
				]
			};
			var deviceSalesDarkOptions = {
				scales: {
					xAxes: [{
						stacked: false,
						barPercentage: .5,
						categoryPercentage: 0.4,
						position: 'bottom',
						display: true,
						gridLines: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: true, //this will remove only the label
							stepSize: 500,
							fontColor: "#3a3a43",
							fontSize: 14,
							padding: 10,
						}
					}],
					yAxes: [{
						stacked: false,
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							color: "#3a3a43",
							drawTicks: false,
							zeroLineColor: '#3a3a43',
						},
						ticks: {
							display: true,
							beginAtZero: true,
							stepSize: 200,
							fontColor: "#3a3a43",
							fontSize: 14,
							callback: function(value, index, values) {
								return value + 'k';
							},
						},
					}]
				},
				legend: {
					display: false
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].backgroundColor[i] + ';"></span><span class="legend-label text-muted">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				tooltips: {
					backgroundColor: 'rgba(0, 0, 0, 1)',
				},
				plugins: {
					datalabels: {
						display: false,
						align: 'center',
						anchor: 'center'
					}
				}
			};
			var barChartCanvas = $("#device-sales-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: deviceSalesDarkData,
				options: deviceSalesDarkOptions
			});
			document.getElementById('device-sales-legend').innerHTML = barChart.generateLegend();
		}

		if ($("#device-sales-dark-rtl").length) {
			var deviceSalesDarkData = {
				labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
				datasets: [{
					label: 'الطلب',
						data: [450, 500, 300, 350, 200, 320, 310, 700],
						backgroundColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'يتبرع',
						data: [250, 100, 310, 75, 290, 100, 500, 260],
						backgroundColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderWidth: 1,
						fill: false
					}
				]
			};
			var deviceSalesDarkOptions = {
				scales: {
					xAxes: [{
						stacked: false,
						barPercentage: .5,
						categoryPercentage: 0.4,
						position: 'bottom',
						display: true,
						gridLines: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: true, //this will remove only the label
							stepSize: 500,
							fontColor: "#3a3a43",
							fontSize: 14,
							padding: 10,
						}
					}],
					yAxes: [{
						stacked: false,
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							color: "#3a3a43",
							drawTicks: false,
							zeroLineColor: '#3a3a43',
						},
						ticks: {
							display: true,
							beginAtZero: true,
							stepSize: 200,
							fontColor: "#3a3a43",
							fontSize: 14,
							callback: function(value, index, values) {
								return value + 'k';
							},
						},
					}]
				},
				legend: {
					display: false
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].backgroundColor[i] + ';"></span><span class="legend-label text-muted">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				tooltips: {
					backgroundColor: 'rgba(0, 0, 0, 1)',
				},
				plugins: {
					datalabels: {
						display: false,
						align: 'center',
						anchor: 'center'
					}
				}
			};
			var barChartCanvas = $("#device-sales-dark-rtl").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: deviceSalesDarkData,
				options: deviceSalesDarkOptions
			});
			document.getElementById('device-sales-legend').innerHTML = barChart.generateLegend();
		}
		if ($("#device-sales-rtl").length) {
			var deviceSalesData = {
				labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
				datasets: [{
						label: 'الطلب',
						data: [450, 500, 300, 350, 200, 320, 310, 700],
						backgroundColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderColor: [
							'#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'يتبرع',
						data: [250, 100, 310, 75, 290, 100, 500, 260],
						backgroundColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderColor: [
							'#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
						],
						borderWidth: 1,
						fill: false
					}
				]
			};
			var deviceSalesOptions = {
				scales: {
					xAxes: [{
						stacked: false,
						barPercentage: .5,
						categoryPercentage: 0.4,
						position: 'bottom',
						display: true,
						gridLines: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: true, //this will remove only the label
							stepSize: 500,
							fontColor: "#a7afb7",
							fontSize: 14,
							padding: 10,
						}
					}],
					yAxes: [{
						stacked: false,
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							color: "#eef0fa",
							drawTicks: false,
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							display: true,
							beginAtZero: true,
							stepSize: 200,
							fontColor: "#a7afb7",
							fontSize: 14,
							callback: function(value, index, values) {
								return value + 'k';
							},
						},
					}]
				},
				legend: {
					display: false
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].backgroundColor[i] + ';"></span><span class="legend-label text-dark">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				tooltips: {
					backgroundColor: 'rgba(0, 0, 0, 1)',
				},
				plugins: {
					datalabels: {
						display: false,
						align: 'center',
						anchor: 'center'
					}
				}
			};
			var barChartCanvas = $("#device-sales-rtl").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: deviceSalesData,
				options: deviceSalesOptions
			});
			document.getElementById('device-sales-legend').innerHTML = barChart.generateLegend();
    }

		if ($("#account-retension").length) {
			var accountRetensionData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May"],
				datasets: [{
						label: 'Demand',
						data: [33, 48, 39, 36, 36],
						backgroundColor: [
							'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
						],
						borderColor: [
							'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'Demand',
						data: [94, 28, 49, 25, 20],
						backgroundColor: [
							'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
						],
						borderColor: [
							'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'Demand',
						data: [66, 33, 25, 36, 69],
						backgroundColor: [
							'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
						],
						borderColor: [
							'#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
						],
						borderWidth: 1,
						fill: false
					}
				]
			};
			var accountRetensionOptions = {
				scales: {
					xAxes: [{
						stacked: false,
						position: 'bottom',
						display: true,
						barPercentage: .7,
						categoryPercentage: 1,
						gridLines: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: true, //this will remove only the label
							stepSize: 500,
							fontColor: "#a7afb7",
							fontSize: 14,
							padding: 10,
						}
					}],
					yAxes: [{
						stacked: false,
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							color: "#c31a56",
							drawTicks: false,
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							display: false,
							beginAtZero: true,
							stepSize: 40,
							fontColor: "#a7afb7",
							fontSize: 14,
							callback: function(value, index, values) {
								return value + 'k';
							},

						},
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					backgroundColor: 'rgba(0, 0, 0, 1)',
				},
				plugins: {
					datalabels: {
						display: false,
						align: 'center',
						anchor: 'center'
					}
				}
			};
			var barChartCanvas = $("#account-retension").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: accountRetensionData,
				options: accountRetensionOptions
			});
		}

		if ($("#page-view-analytic").length) {
			var pageiVewAnalyticData = {
				labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
				datasets: [{
						label: 'This week',
						data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
						backgroundColor: [
							'rgba(216,247,234, 0.19)',
						],
						borderColor: [
							'#3dd597'
						],
						borderWidth: 2,
						fill: true,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#3dd597",
						pointBorderWidth: 2,
						pointRadius: 4,
					},
					{
						label: 'Current week',
						data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
						backgroundColor: [
							'rgba(216,247,234, 0.19)',
						],
						borderColor: [
							'#3dd597'
						],
						borderWidth: 2,
						fill: false,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#0162ff",
						pointBorderWidth: 2,
						pointRadius: 4,
					}
				],
			};
			var pageiVewAnalyticOptions = {
				scales: {
					yAxes: [{
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							drawTicks: false,
							color: '#eef0fa',
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							beginAtZero: true,
							stepSize: 50,
							display: true,
							padding: 10,
						}
					}],
					xAxes: [{
						display: true,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false,
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10,
							fontColor: "#a7afb7",
							padding: 10,
						}
					}],
				},
				legend: {
					display: false,
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				elements: {
					point: {
						radius: 1
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#page-view-analytic").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: pageiVewAnalyticData,
				options: pageiVewAnalyticOptions,
			});
			document.getElementById('pageViewAnalyticLengend').innerHTML = barChart.generateLegend();
		}
		
		if ($("#page-view-analytic-rtl").length) {
			var pageiVewAnalyticData = {
				labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
				datasets: [{
						label: 'هذا الشهر',
						data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
						backgroundColor: [
							'rgba(216,247,234, 0.19)',
						],
						borderColor: [
							'#3dd597'
						],
						borderWidth: 2,
						fill: true,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#3dd597",
						pointBorderWidth: 2,
						pointRadius: 4,
					},
					{
						label: 'الأسبوع الحالي',
						data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
						backgroundColor: [
							'rgba(216,247,234, 0.19)',
						],
						borderColor: [
							'#3dd597'
						],
						borderWidth: 2,
						fill: false,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#0162ff",
						pointBorderWidth: 2,
						pointRadius: 4,
					}
				],
			};
			var pageiVewAnalyticOptions = {
				scales: {
					yAxes: [{
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							drawTicks: false,
							color: '#eef0fa',
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							beginAtZero: true,
							stepSize: 50,
							display: true,
							padding: 10,
						}
					}],
					xAxes: [{
						display: true,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false,
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10,
							fontColor: "#a7afb7",
							padding: 10,
						}
					}],
				},
				legend: {
					display: false,
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				elements: {
					point: {
						radius: 1
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#page-view-analytic-rtl").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: pageiVewAnalyticData,
				options: pageiVewAnalyticOptions,
			});
			document.getElementById('pageViewAnalyticLengend').innerHTML = barChart.generateLegend();
    }
    
		if ($("#page-view-analytic-dark").length) {
			var graphGradient = document.getElementById("page-view-analytic-dark").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 420);
			saleGradientBg.addColorStop(0, 'rgba(55, 208, 181, 0.34)');
			saleGradientBg.addColorStop(1, 'rgba(254, 254, 254, 0)');
			var pageiVewAnalyticDarkData = {
				labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
				datasets: [{
						label: 'This week',
						data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
						backgroundColor: saleGradientBg,
						borderColor: [
							'#3dd597'
						],
						borderWidth: 2,
						fill: true,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#3dd597",
						pointBorderWidth: 2,
						pointRadius: 3,
					},
					{
						label: 'Current week',
						data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
						backgroundColor: [
							'rgba(216,247,234, 0.19)',
						],
						borderColor: [
							'#0162ff'
						],
						borderWidth: 2,
						fill: false,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#0162ff",
						pointBorderWidth: 2,
						pointRadius: 3,
					}
				],
			};
			var pageiVewAnalyticDarkOptions = {
				scales: {
					yAxes: [{
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							drawTicks: false,
							color: '#3a3a43',
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							beginAtZero: true,
							stepSize: 50,
							display: true,
							padding: 10,
							fontColor: '#3a3a43'
						}
					}],
					xAxes: [{
						display: true,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false,
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10,
							fontColor: "#3a3a43",
							padding: 10,
						}
					}],
				},
				legend: {
					display: false,
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-muted">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				elements: {
					point: {
						radius: 1
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#page-view-analytic-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: pageiVewAnalyticDarkData,
				options: pageiVewAnalyticDarkOptions,
			});
			document.getElementById('pageViewAnalyticLengend').innerHTML = barChart.generateLegend();
		}
		if ($("#page-view-analytic-dark-rtl").length) {
			var graphGradient = document.getElementById("page-view-analytic-dark-rtl").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 420);
			saleGradientBg.addColorStop(0, 'rgba(55, 208, 181, 0.34)');
			saleGradientBg.addColorStop(1, 'rgba(254, 254, 254, 0)');
			var pageiVewAnalyticDarkData = {
				labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
				datasets: [{
					label: 'هذا الشهر',
						data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
						backgroundColor: saleGradientBg,
						borderColor: [
							'#3dd597'
						],
						borderWidth: 2,
						fill: true,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#3dd597",
						pointBorderWidth: 2,
						pointRadius: 3,
					},
					{
						label: 'الأسبوع الحالي',
						data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
						backgroundColor: [
							'rgba(216,247,234, 0.19)',
						],
						borderColor: [
							'#0162ff'
						],
						borderWidth: 2,
						fill: false,
						pointBorderColor: "#fff",
						pointBackgroundColor: "#0162ff",
						pointBorderWidth: 2,
						pointRadius: 3,
					}
				],
			};
			var pageiVewAnalyticDarkOptions = {
				scales: {
					yAxes: [{
						display: true,
						gridLines: {
							drawBorder: false,
							display: true,
							drawTicks: false,
							color: '#3a3a43',
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							beginAtZero: true,
							stepSize: 50,
							display: true,
							padding: 10,
							fontColor: '#3a3a43'
						}
					}],
					xAxes: [{
						display: true,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false,
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10,
							fontColor: "#3a3a43",
							padding: 10,
						}
					}],
				},
				legend: {
					display: false,
				},
				legendCallback: function(chart) {
					var text = [];
					text.push('<ul class="' + chart.id + '-legend">');
					for (var i = 0; i < chart.data.datasets.length; i++) {
						text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-muted">');
						if (chart.data.datasets[i].label) {
							text.push(chart.data.datasets[i].label);
						}
						text.push('</span></li>');
					}
					text.push('</ul>');
					return text.join("");
				},
				elements: {
					point: {
						radius: 1
					},
					line: {
						tension: 0
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#page-view-analytic-dark-rtl").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: pageiVewAnalyticDarkData,
				options: pageiVewAnalyticDarkOptions,
			});
			document.getElementById('pageViewAnalyticLengend').innerHTML = barChart.generateLegend();
		}

		if ($("#my-balance").length) {
			var myBalanceData = {
				labels: ["Jan", "Feb", "Mar", "Apr"],
				datasets: [{
						label: 'Demand',
						data: [90, 85, 100, 105],
						backgroundColor: [
							'#0062ff', '#0062ff', '#0062ff', '#0062ff',
						],
						borderColor: [
							'#0062ff', '#0062ff', '#0062ff', '#0062ff',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'Supply',
						data: [200, 200, 200, 200],
						backgroundColor: [
							'#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
						],
						borderColor: [
							'#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
						],
						borderWidth: 1,
						fill: false
					}
				]
			};
			var myBalanceOptions = {
				scales: {
					xAxes: [{
						stacked: true,
						barPercentage: .7,
						position: 'bottom',
						display: true,
						gridLines: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: true, //this will remove only the label
							stepSize: 500,
							fontColor: "#111",
							fontSize: 12,
							padding: 10,
						}
					}],
					yAxes: [{
						stacked: false,
						display: false,
						gridLines: {
							drawBorder: true,
							display: false,
							color: "#eef0fa",
							drawTicks: false,
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							display: true,
							beginAtZero: true,
							stepSize: 200,
							fontColor: "#a7afb7",
							fontSize: 14,
							callback: function(value, index, values) {
								return value + 'k';
							},

						},
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					backgroundColor: 'rgba(0, 0, 0, 1)',
				},
				plugins: {
					datalabels: {
						display: false,
						align: 'center',
						anchor: 'center'
					}
				}
			};
			var barChartCanvas = $("#my-balance").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: myBalanceData,
				options: myBalanceOptions
			});
    }
    
		if ($("#my-balance-dark").length) {
			var myBalanceDarkData = {
				labels: ["Jan", "Feb", "Mar", "Apr"],
				datasets: [{
						label: 'Demand',
						data: [90, 85, 100, 105],
						backgroundColor: [
							'#0062ff', '#0062ff', '#0062ff', '#0062ff',
						],
						borderColor: [
							'#0062ff', '#0062ff', '#0062ff', '#0062ff',
						],
						borderWidth: 1,
						fill: false
					},
					{
						label: 'Supply',
						data: [200, 200, 200, 200],
						backgroundColor: [
							'#2b2b36', '#2b2b36', '#2b2b36', '#2b2b36',
						],
						borderColor: [
							'#2b2b36', '#2b2b36', '#2b2b36', '#2b2b36',
						],
						borderWidth: 1,
						fill: false
					}
				]
			};
			var myBalanceDarkOptions = {
				scales: {
					xAxes: [{
						stacked: true,
						barPercentage: .7,
						position: 'bottom',
						display: true,
						gridLines: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: true, //this will remove only the label
							stepSize: 500,
							fontColor: "#fff",
							fontSize: 12,
							padding: 10,
						}
					}],
					yAxes: [{
						stacked: false,
						display: false,
						gridLines: {
							drawBorder: true,
							display: false,
							color: "#eef0fa",
							drawTicks: false,
							zeroLineColor: 'rgba(90, 113, 208, 0)',
						},
						ticks: {
							display: true,
							beginAtZero: true,
							stepSize: 200,
							fontColor: "#a7afb7",
							fontSize: 14,
							callback: function(value, index, values) {
								return value + 'k';
							},

						},
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					backgroundColor: 'rgba(0, 0, 0, 1)',
				},
				plugins: {
					datalabels: {
						display: false,
						align: 'center',
						anchor: 'center'
					}
				}
			};
			var barChartCanvas = $("#my-balance-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'bar',
				data: myBalanceDarkData,
				options: myBalanceDarkOptions
			});
		}

		if ($("#prediction-1").length) {
			var graphGradient = document.getElementById("prediction-1").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 80);
			saleGradientBg.addColorStop(0, 'rgba(164,97,216, 1)');
			saleGradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.27)');
			var prediction1Data = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [5, 10, 6, 12, 7, 14, 16],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#a461d8'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction1Options = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},

			};

			var barChartCanvas = $("#prediction-1").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction1Data,
				options: prediction1Options,
			});
		}
		if ($("#prediction-1-dark").length) {
			var graphGradient = document.getElementById("prediction-1-dark").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 75);
			saleGradientBg.addColorStop(0, 'rgba(164,97,216, 1)');
			saleGradientBg.addColorStop(1, 'rgba(24, 24, 36, 0.27)');
			var prediction1DataDark = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [5, 10, 6, 12, 7, 14, 16],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#a461d8'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction1OptionsDark = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},

			};

			var barChartCanvas = $("#prediction-1-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction1DataDark,
				options: prediction1OptionsDark,
			});
    }
    
		if ($("#prediction-2").length) {
			var graphGradient = document.getElementById("prediction-2").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 80);
			saleGradientBg.addColorStop(0, 'rgba(164,97,216, 1)');
			saleGradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.27)');

			var prediction1Data = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [16, 14, 7, 12, 6, 10, 5],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#a461d8'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction1Options = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};

			var barChartCanvas = $("#prediction-2").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction1Data,
				options: prediction1Options,

			});
		}
		if ($("#prediction-2-dark").length) {
			var graphGradient = document.getElementById("prediction-2-dark").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 75);
			saleGradientBg.addColorStop(0, 'rgba(164,97,216, 1)');
			saleGradientBg.addColorStop(1, 'rgba(24, 24, 36, 0.27)');

			var prediction2DataDark = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [16, 14, 7, 12, 6, 10, 5],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#a461d8'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction2OptionsDark = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};

			var barChartCanvas = $("#prediction-2-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction2DataDark,
				options: prediction2OptionsDark,

			});
    }
    
		if ($("#prediction-3").length) {
			var graphGradient = document.getElementById("prediction-3").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 80);
			saleGradientBg.addColorStop(0, '#0062ff');
			saleGradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.27)');
			var prediction1Data = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [3, 4, 2, 3, 1, 2, 3],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#0062ff'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction1Options = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#prediction-3").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction1Data,
				options: prediction1Options,
			});
		}
		
		if ($("#prediction-3-dark").length) {
			var graphGradient = document.getElementById("prediction-3-dark").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 75);
			saleGradientBg.addColorStop(0, '#0062ff');
			saleGradientBg.addColorStop(1, 'rgba(24, 24, 36, 0.27)');
			var prediction3DataDark = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [3, 4, 2, 3, 1, 2, 3],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#0062ff'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction3OptionsDark = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#prediction-3-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction3DataDark,
				options: prediction3OptionsDark,
			});
    }
    
		if ($("#prediction-4").length) {
			var graphGradient = document.getElementById("prediction-4").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 110);
			saleGradientBg.addColorStop(0, '#0062ff');
			saleGradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.27)');
			var prediction1Data = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [3, 2, 1, 3, 2, 4, 3],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#0062ff'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction1Options = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#prediction-4").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction1Data,
				options: prediction1Options,
			});
		}
		if ($("#prediction-4-dark").length) {
			var graphGradient = document.getElementById("prediction-4-dark").getContext('2d');;
			var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 110);
			saleGradientBg.addColorStop(0, '#0062ff');
			saleGradientBg.addColorStop(1, 'rgba(24, 24, 36, 0.27)');
			var prediction4DataDark = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				datasets: [{
					label: 'Margin',
					data: [3, 2, 1, 3, 2, 4, 3],
					backgroundColor: saleGradientBg,
					borderColor: [
						'#0062ff'
					],
					borderWidth: 3,
					fill: true,
				}],
			};
			var prediction4OptionsDark = {
				scales: {
					yAxes: [{
						display: false,
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
					xAxes: [{
						display: false,
						position: 'bottom',
						gridLines: {
							drawBorder: false,
							display: false,
							drawTicks: false
						},
						ticks: {
							beginAtZero: true,
							stepSize: 10
						}
					}],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0
					},
					line: {
						tension: .4
					}
				},
				tooltips: {
					backgroundColor: 'rgba(2, 171, 254, 1)',
				},
			};
			var barChartCanvas = $("#prediction-4-dark").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var barChart = new Chart(barChartCanvas, {
				type: 'line',
				data: prediction4DataDark,
				options: prediction4OptionsDark,
			});
    }
    
	});
})(jQuery);