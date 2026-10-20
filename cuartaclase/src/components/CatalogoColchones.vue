<template>
    <section id="catalogo" class="seccion">
        <h2 class="titulo">Catalogo de colchones</h2>

        <article v-show="cargando == true" class="contenedor">
            <SkeletonPrime height="14rem"></SkeletonPrime>
            <SkeletonPrime height="14rem"></SkeletonPrime>
            <SkeletonPrime height="14rem"></SkeletonPrime>
        </article>

        <article v-show="cargando == false" class="contenedor">
            <div class="card" v-for="item in items" :key="item.id">
                <img class="card-imagen" :src="item.imagen" alt="">
                <div class="card-nombre">{{ item.nombre }}</div>
                <div class="card-detalle">Medidas: {{ item.medidas }}</div>
                <div class="card-precio">$ {{ item.precio }}</div>
                <button @click="irAComprar">Comprar</button>
            </div>
        </article>

        <p v-if="items.length == 0 && cargando == false" class="vacio">No hay colchones registrados</p>
    </section>
</template>

<script>
export default {
    name: 'CatalogoColchones',
    data() {
        return {
            items: [],
            cargando: false
        }
    },
    methods: {
        getAllColchones: function () {
            this.cargando = true;
            this.axios
                .get('http://192.168.1.254:3000/getallcolchones')
                .then(response => {
                    this.items = response.data;
                    console.log(this.items);
                })
                .finally(() => {
                    setTimeout(() => {
                        this.cargando = false;
                    }, 2000)
                });
        },
        irAComprar: function () {
            const el = document.getElementById('comprar')
            if (el) {
                el.scrollIntoView()
            }
        }
    },
    created() {
        this.getAllColchones();
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
.card button {
    margin: 0 1rem 1rem;
    padding: 0.6rem;
    border: none;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
}
.vacio {
    color: #FFF;
}
</style>
