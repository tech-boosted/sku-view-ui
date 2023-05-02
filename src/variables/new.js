export const lineChartOptionsTotalSpent = {
  
  legend: {
    show: true,
  },

  theme: {
    mode: "light" || "dark",
  },
  chart: {
    type: "line",

    toolbar: {
      show: true,
         tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    theme: 'dark',
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: [  "26/04/2023",  "27/04/2023",  "28/04/2023",  "29/04/2023",  "30/04/2023",  "01/05/2023",  "02/05/2023",  "03/05/2023",  "04/05/2023",  "05/05/2023",  "06/05/2023",  "07/05/2023",  "08/05/2023",  "09/05/2023",  "10/05/2023",  "11/05/2023",  "12/05/2023",  "13/05/2023",  "14/05/2023",  "15/05/2023",  "16/05/2023",  "17/05/2023",  "18/05/2023",  "19/05/2023",  "20/05/2023",  "21/05/2023",  "22/05/2023",  "23/05/2023",  "24/05/2023",  "25/05/2023"]
    ,
  },

  yaxis: {
    show: true,
    tickAmount: 12,
    logBase: 10,
    min: 0,
    max: 120,
    forceNiceScale: true,
    floating: false,
    decimalsInFloat: undefined,
  },
};
