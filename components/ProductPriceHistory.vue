<script setup lang="ts">
import { Chart, LineController, LineElement, LinearScale, CategoryScale, PointElement, ChartOptions, ChartData, Filler } from "chart.js";
import { LineChart } from "vue-chart-3";
Chart.register(LineController, LineElement, LinearScale, CategoryScale, PointElement, Filler);

const testData: ChartData<"line"> = {
    labels: ["15/9", "16/9", "17/9", "18/9", "19/9", "20/9", "21/9", "22/9", "23/9", "24/9", "25/9", "26/9", "27/9", "28/9", "29/9", "30/9"],
    datasets: [
        {
            data: [0.75, 0.95, 1.1, 0.9, 0.875, 1.75, 1.6, 1.25, 1.55, 2.2, 1.85, 1.92, 0.9, 0.9, 1.4, 0.95],
            borderColor: "#347AE2",
            fill: {
                target: "origin",
                above: "rgba(5, 78, 186, 0.1)",
            },
        },
    ],
};

const chartOptions: ChartOptions = {
    plugins: {
        filler: {
            propagate: false,
        },
    },
    elements: {
        line: {
            tension: 0.4,
        },
        point: {
            radius: 0,
            hoverRadius: 0,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            display: true,
            suggestedMin: 0,
            suggestedMax: 2.5,
            grid: {
                color: "#343744",
            },
            ticks: {
                padding: 10,
                crossAlign: "far",
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                padding: 10,
                align: "start",
            },
        },
    },
    interaction: {
        intersect: false,
    },
};
</script>

<template>
    <div class="price-history">
        <h6 class="heading-6-bold price-history__heading text-white">All Time Avg. Price</h6>
        <LineChart :chartData="testData" :options="chartOptions" />
    </div>
</template>

<style lang="scss" scoped>
.price-history {
    background: #0f182e;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 2.4rem;

    &__heading {
        margin-bottom: 4.8rem;
    }
}
</style>

