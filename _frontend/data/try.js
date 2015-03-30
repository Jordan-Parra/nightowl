var d1 = [[1, 300], [2, 600], [3, 550], [4, 400], [5, 300]];
$(window).resize(function() {
    // erase the flot graph, allowing the div to shrink correctly
    $('#midWestHold').text(''); 

    // redraw the graph in the correctly sized div
    $.plot($('#midWestHold'), [d1]);
});

 
$(document).ready(function () {$.plot($("#midWestHold"), [d1]);});


var dataSet = [
    {label: "Under 3 Minutes", data: 98.7, color: "#005CDE" },
    {data: 2.3, color: "red" },
   
];



var options = {
    series: {
        pie: {
			startAngle: 1,
            show: true,
            radius: 3/4,
            label: {
                show: true,
				threshold: .03,
                radius: 1,
                formatter: labelFormatter,
            }
        }
    },
    legend: {
        show: false
    }
};

var d1 = [[1, 300], [2, 600], [3, 550], [4, 400], [5, 300]];

$(document).ready(function () {

    $(function () {

    var data = [[0, 5],[1, 10],[2, 15],[3, 20],[4, 25],[5, 30]];
    var dataset = [{ label: "2012 Average Temperature", data: data, color: "#5482FF" }];
    var ticks = [[0, "London"], [1, "New York"], [2, "New Delhi"], [3, "Taipei"],[4, "Beijing"], [5, "Sydney"]];

    var options = {
        series: {
            bars: {
                show: true
            }
        },
        bars: {
            align: "center",
            barWidth: 0.5
        },
        xaxis: {
            axisLabel: "World Cities",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10,
            ticks: ticks
        },

        legend: {
            noColumns: 0,
            labelBoxBorderColor: "#000000",
            position: "nw"
        },
        grid: {
            hoverable: true,
            borderWidth: 2,
            backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
        }
    };

        $.plot($("#midWestPie"), dataset, options);
		$.plot($("#catovline"), dataset, options);
    });

});