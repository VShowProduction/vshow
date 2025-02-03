<template>
    <div class="votos-container">
      <h1>Resultados de las Votaciones</h1>
      <div class="chart-container">
        <div v-for="(chartData, index) in chartsData" :key="index" class="chart">
            <h3>{{ chartData.title }}</h3>
            <Chart type="bar" :data="chartData.data" :options="chartOptions" />
      </div>
      </div>
     
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '../assets/js/firebaseconect';
  import Chart from 'primevue/chart';
  import questions from '../assets/js/questions';
  
  const colorPalette = [
  "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800",
  "#9C27B0", "#2196F3", "#F44336", "#3F51B5", "#009688"
];

  // Configuración de Chart.js
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw} votos`
        }
      }
    }
  };
  
  // Array reactivo para almacenar los datos de cada gráfico
  const chartsData = ref<any[]>([]);
  
  const fetchVotosTotales = async () => {
    try {
      const votosTotalesRef = collection(db, "votosTotales");
      const snapshot = await getDocs(votosTotalesRef);
  
      const votosTotales: Record<string, Record<string, number>> = {};
  
      snapshot.forEach((doc) => {
        votosTotales[doc.id] = doc.data();
      });
  
      // Mapear resultados para cada categoría
      questions.forEach((question) => {
        const categoria = question.text.replace(":", "").trim(); // Eliminar ":"
        const votosPorCategoria = votosTotales[categoria] || {};
        
        const labels: string[] = [];
        const data: number[] = [];
  
        question.answers.forEach((answer) => {
          labels.push(answer.name);
          data.push(votosPorCategoria[answer.id] || 0);
        });
  
        chartsData.value.push({
          title: categoria,
          data: {
            labels,
            datasets: [{
              label: 'Votos',
              backgroundColor:labels.map((_, i) => colorPalette[i % colorPalette.length]),
              data
            }]
          }
        });
      });
    } catch (error) {
      console.error("Error al obtener los votos:", error);
    }
  };
  
  onMounted(() => {
    fetchVotosTotales();
  });
  </script>
  
  <style scoped>
  </style>