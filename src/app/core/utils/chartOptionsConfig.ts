import { ChartOptions } from 'chart.js';

// medal
const medal = new Image(20, 20);
medal.src = 'assets/medal.svg';

/* chart config parameters from chart.js
 * https://www.chartjs.org/docs/latest/configuration/tooltip.html
 * config on : fonts, colors, tooltip
 */
export const chartOptionsConfig: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      backgroundColor: '#04838f',
      titleFont: {
        size: 20,
        family: 'Montserrat',
        weight: 400,
      },
      titleAlign: 'center',
      bodyFont: {
        size: 16,
        family: 'Montserrat',
      },
      bodyAlign: 'center',
      padding: 10,
      caretSize: 12,
      xAlign: 'center',
      yAlign: 'bottom',
      usePointStyle: true,
      callbacks: {
        labelPointStyle: () => {
          return {
            pointStyle: medal,
            rotation: 0,
          };
        },
      },
    },
  },
};

/* chart colors */
export const chartColors: string[] = [
  '#793D52',
  '#89A1DB',
  '#9780A1',
  '#BFE0F1',
  '#B8CBE7',
  '#956065',
];

export const scalesConfig: ChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
