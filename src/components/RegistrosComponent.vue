<template>
    <div class="table-container">
        <Button @click="irSoli">Ir a solicitidues</Button>
 <DataTable v-model:filters="filters" :value="inscripciones" 
 stripedRows paginator :rows="10" :rowsPerPageOptions="[10, 20, 50, 100]"  
 tableStyle="min-width: 50rem"
 :loading="isLoading">
    <template #header>
    <div class="header-table">
        <h4>REGISTROS DEL FORMULARIO PARA LA VT WORLD CUP 2</h4>
        <InputText v-model="filters['global'].value" placeholder="Palabra clave" />
    </div>
</template>
    <Column field="Id" header="Id" sortable style="width: 25%"></Column>
    <Column field="Fecha" header="Fecha" sortable style="width: 25%"></Column>
    <Column field="NickName" header="NickName" sortable style="width: 25%"></Column>
    <Column field="Canal" header="Canal" sortable style="width: 25%"></Column>
    <Column field="Pais.name" header="País" sortable style="width: 25%"></Column> <!-- Pais es un mapa, así que accedes al campo 'name' -->
    <Column field="Capitan" header="Capitán" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="Competitivo" header="Competitivo" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="Comprometido" header="Comprometido" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="Comunicacion" header="Comunicación" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="ConoceVT1" header="Conoce VT1" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="Plataforma" header="Plataforma" sortable style="width: 25%"></Column>
    <Column field="ReglasAccept" header="Reglas Aceptadas" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="TiempoEvento" header="Tiempo en Evento" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="TiempoJuego" header="Tiempo de Juego" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="TiempoMarketing" header="Tiempo de Marketing" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="TieneVR" header="Tiene VR" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="Toxico" header="Tóxico" class="yes-no" sortable style="width: 25%"></Column>
    <Column field="Twitter" header="Twitter" sortable style="width: 25%"></Column>
</DataTable>

    </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'; 
import { query, orderBy, getDocs, collection, onSnapshot  } from 'firebase/firestore'
import { db } from '../assets/js/firebaseconect'
import { FilterMatchMode } from '@primevue/core/api';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const inscripciones = ref();
const isLoading = ref(true);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

onMounted( async () => {
    try {
        const q = query(
            collection(db, "inscripciones"),
            orderBy("Id", "asc") // Puedes cambiar "asc" a "desc" si quieres en orden descendente
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            // Actualizar inscripciones con los datos en tiempo real
            inscripciones.value = snapshot.docs.map(doc => ({
                id: doc.id, // ID del documento
                ...doc.data() // Datos del documento
            }));

            console.log(inscripciones.value)

        });

        isLoading.value = false;


        onUnmounted(() => {
            unsubscribe();
        })
    }catch (e){
        console.error(e);
    }
   
})

const irSoli = () => {
    router.push('/Solicitudes')
}

// optional
</script>

<style scoped>



</style>