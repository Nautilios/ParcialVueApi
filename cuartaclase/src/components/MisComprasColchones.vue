<template>
    <section id="miscompras" class="seccion">
        <h2 class="titulo">Colchones comprados</h2>

        <div class="buscar">
            <input type="text" v-model="documento_cliente" placeholder="Documento del cliente">
            <button @click="getCompras">Buscar</button>
        </div>

        <p v-if="cargando" class="vacio">Cargando...</p>

        <div v-else class="contenedor">
            <div class="card" v-for="c in compras" :key="c.id_compra">
                <img class="card-imagen" :src="c.imagen" alt="">
                <div class="card-nombre">{{ c.nombre }}</div>
                <div class="card-detalle">Medidas: {{ c.medidas }}</div>
                <div class="card-precio">$ {{ c.precio }}</div>
            </div>
            <p v-if="compras.length == 0" class="vacio">No se encontraron compras</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MisComprasColchones',
    data() {
        return {
            documento_cliente: '',
            compras: [],
            cargando: false
        }
    },
    methods: {
        getCompras: function () {
            if (this.documento_cliente.trim() == '') {
                alert('Ingrese el documento del cliente')
                return
            }
            this.cargando = true;
            this.axios
                .get('http://192.168.1.254:3000/getcolchonescomprados?documento_cliente=' + this.documento_cliente)
                .then(response => {
                    this.compras = response.data;
                    console.log(this.compras);
                })
                .finally(() => {
                    this.cargando = false;
                });
        }
    }
}
</script>

<style scoped>
.seccion {
    width: 90%;
    margin: 2rem auto;
}
.titulo {
    color: #FFF;
    margin-bottom: 1.5rem;
}
.buscar {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}
.buscar input {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}
.buscar button {
    padding: 0.6rem 1.2rem;
    border: none;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
    border-radius: 0.5rem;
}
.contenedor {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
.card {
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
}
.card-imagen {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
}
.card-nombre {
    background-color: #000;
    color: #FFF;
    padding: 0.8rem;
    text-align: center;
}
.card-detalle {
    padding: 0.5rem 1rem 0;
}
.card-precio {
    padding: 0.5rem 1rem;
    font-weight: bold;
}
.vacio {
    color: #FFF;
}
</style>
