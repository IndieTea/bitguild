		
   
var countDownDate = new Date("April 5, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="count-down-date"
    document.getElementById("count-down-date").innerHTML = days + " days" + "<br /> "+ hours + "<span style='font-size:1.00em'> hours </span>" + "<br /> "
   + minutes + "<span style='font-size:1.00em'> minutes </span>" + "<br /> " + seconds + "<span style='font-size:1.00em'> seconds </span>" + "<br />";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count-down-date").innerHTML = "EXPIRED";
    }
}, 1000) 
    
    
    
    AmCharts.makeChart("chartdiv",
				{
					"type": "pie",
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> </span>",
          "innerRadius": "55%",
    			//"gradientRatio": [-0.2, -0.2, -0.2, -0.2, -0.2, -0.2, 0, 0.1, 0.2, 0.1, 0, -0.1, -0.1],
					"outlineThickness": 0,
					"titleField": "type",
					"valueField": "amount",
          "colorField": "color",
          "labelColorField": "color",
					"fontFamily": "lato",
					"fontSize": 16,
          
					"theme": "light",
 
					"allLabels": [
						{
							"align": "center",
							"alpha": 0.93,
              "color": "#B6D7E3",
							"id": "Label-2",
							"size": 12,
							"text": "Token Sale Goal",
							"y": "44%"
						},
						{
							"align": "center",
              "color": "#B6D7E3",
							"id": "Label-4",
							"size": 34,
							"text": "45,000 ",
							"y": "47%"
						},
						{
							"align": "center",
              "color": "#B6D7E3",
							"id": "Label-5",
							"size": 14,
							"text": "ETH",
							"y": "55%"
						}
					],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"type": "Private Sale",
							"amount": "30397",
              "color": "#00d195",
						},
						{
							"type": "Hard Cap",
							"amount": "14062",
              "color": "#69b1d5"
						},
						{
							"type": "Soft Cap",
							"amount": "5000",
              "color": "#6a94ff"
						}
					]
				}
			);
