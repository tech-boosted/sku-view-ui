export const chartOptions = {
  chart: {
    type: "bar",
    height: 440,
    stacked: true,
  },
  colors: ["#008FFB", "#FF4560"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "50%",
      dataLabels: {
        position: "top",
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#000"],
      },
      offsetX: 10,
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },

  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    title: {
      // text: 'Age',
    },
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val;
      },
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "%";
      },
    },
  },
  //   title: {
  //     text: "Mauritius population pyramid 2011",
  //   },
  xaxis: {
    categories: [
      "85+",
      "80-84",
      "75-79",
      "70-74",
      "65-69",
      "60-64",
      "55-59",
      "50-54",
      "45-49",
      "40-44",
      "35-39",
      "30-34",
      "25-29",
      "20-24",
      "15-19",
      "10-14",
      "5-9",
      "0-4",
    ],
    title: {
      text: "Percent",
    },
    labels: {
      formatter: function (val) {
        return Math.abs(Math.round(val)) + "%";
      },
    },
  },
};
