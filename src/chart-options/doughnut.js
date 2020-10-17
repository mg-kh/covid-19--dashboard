const data = {
  labels: ["စုစုပေါင်း", "ပိုးတွေ့", "ပြန်လည်သက်သာ", "သေဆုံး"],
  datasets: [
    {
      // data: [2445, 1806, 625, 350],
      backgroundColor: [
        "rgba(3, 155, 229, 1)",
        "rgb(244 ,67, 54 , 1)",
        "rgba(76, 175, 80, 1)",
        "rgba(69, 90, 100, 1)",
      ],
      borderColor: ["rgba(255, 255, 255, 0)"],
      borderWidth: 0,
    },
  ],
};

const opts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  title: {
    display: true,
    text: "Statistic Datas",
    fontSize: 25,
    padding: 20,
  },
  legend: {
    position: "bottom",
    labels: {
      padding: 30,
      usePointStyle: true,
      // align: "",
    },
  },
};

export { opts, data };
