import { ChartOptions } from 'chart.js';

const medal = new Image(20, 20);
medal.src = 'assets/medal.png';
export const chartOptionsConfig: ChartOptions = {
  responsive: true,
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
