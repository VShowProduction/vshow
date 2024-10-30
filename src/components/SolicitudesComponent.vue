<template>
    <div class="table-container">
 <DataTable v-model:filters="filters" :value="solicitudes" 
 stripedRows paginator :rows="10" :rowsPerPageOptions="[10, 20, 50, 100]"  
 tableStyle="min-width: 50rem"
 :loading="isLoading">
    <template #header>
    <div class="header-table">
        <h4>SOLICITUDES DE TRABAJO</h4>
        <InputText v-model="filters['global'].value" placeholder="Palabra clave" />
    </div>
</template>
    <Column field="Id" header="Id" sortable style="width: 25%"></Column>
    <Column field="Fecha" header="Fecha" sortable style="width: 25%"></Column>
    <Column field="Nick" header="Nick" sortable style="width: 25%"></Column>
    <Column field="Experiencia" header="Experiencia" sortable style="width: 25%">
        <template #body="slotProps">
          <div v-if="slotProps.data.Experiencia.length > 100">
            <span v-html="formatText(slotProps.data.Experiencia.slice(0, 100))"></span>...
            <a @click.prevent="openModal(slotProps.data.Experiencia)">Ver más</a>
          </div>
          <div v-else>
            <span v-html="formatText(slotProps.data.Experiencia)"></span>
          </div>
        </template>
      </Column>

    <Column field="Habilidades" header="Habilidades" sortable style="width: 25%">
    <template #body="slotProps">
        <ul>
            <li v-for="(hab, index) in slotProps.data.Habilidades" :key="index">
                {{ hab }}
            </li>
        </ul>
    </template>
</Column>   
 <Column field="Discord" header="Discord" sortable style="width: 25%"></Column>
    <Column field="WhyWork" header="¿Por qué quiere trabajar con nosotros?" sortable style="width: 25%"></Column>
</DataTable>

<Modal :showModal="showModal" :message="experienciaCompleta" @cerrarModal="cerrarModal" :isTextOnly="true" :isHtml="true"/>

    </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import InputText from 'primevue/inputtext'; 
import { query, orderBy, getDocs, collection, onSnapshot  } from 'firebase/firestore'
import { db } from '../assets/js/firebaseconect'
import { FilterMatchMode } from '@primevue/core/api';
import { ref, onMounted, onUnmounted } from 'vue';

import Modal from './auxiliar/Modal.vue';


const solicitudes = ref();
const isLoading = ref(true);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

onMounted( async () => {
    try {
        const q = query(
            collection(db, "solicitudes"),
            orderBy("Id", "asc") // Puedes cambiar "asc" a "desc" si quieres en orden descendente
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            // Actualizar inscripciones con los datos en tiempo real
            solicitudes.value = snapshot.docs.map(doc => ({
                id: doc.id, // ID del documento
                ...doc.data() // Datos del documento
            }));

            console.log(solicitudes.value)

        });

        isLoading.value = false;


        onUnmounted(() => {
            unsubscribe();
        })
    }catch (e){
        console.error(e);
    }
   
})


const showModal = ref(false);
const experienciaCompleta = ref('');

// Función para abrir el modal con el texto completo de experiencia
function openModal(text: string) {
    experienciaCompleta.value = formatText(text);
    showModal.value = true;
}

// Cierra el modal
function cerrarModal() {
    showModal.value = false;
}

// Función para formatear el texto con enlaces
function formatText(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
}
// optional
</script>

<style scoped>



</style>