<template>
    <section id="comprar" class="seccion">
        <h2 class="titulo">Comprar un colchon</h2>

        <form class="formulario" @submit.prevent="enviarCompra">
            <label>Colchon</label>
            <select v-model="id_colchon">
                <option value="">Seleccione un colchon</option>
                <option v-for="item in colchones" :key="item.id" :value="item.id">{{ item.nombre }}</option>
            </select>

            <label>Documento del cliente</label>
            <input type="text" v-model="documento_cliente" placeholder="Ej: 1083444555">

            <button type="submit" :disabled="enviando">{{ enviando ? 'Enviando...' : 'Comprar' }}</button>
        </form>

        <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
    </section>
</template>

<script>
export default {
    name: 'ComprarColchon',
    data() {
        return {
            colchones: [],
            id_colchon: '',
            documento_cliente: '',
            mensaje: '',
            enviando: false
        }
    },
    methods: {
        getColchones: function () {
            this.axios
                .get('http://192.168.1.254:3000/getallcolchones')
                .then(response => {
                    this.colchones = response.data;
                })
        },
        enviarCompra: function () {
            if (this.id_colchon == '') {
                this.mensaje = 'Seleccione un colchon'
                return
            }
            if (this.documento_cliente.trim() == '') {
                this.mensaje = 'Ingrese el documento del cliente'
                return
            }
            if (!/^\d+$/.test(this.documento_cliente.trim())) {
                this.mensaje = 'El documento debe ser numerico'
                return
            }
            this.enviando = true;
            this.axios
                .post('http://192.168.1.254:3000/buycolchon', {
                    id_colchon: this.id_colchon,
                    documento_cliente: this.documento_cliente
                })
                .then(response => {
                    this.mensaje = response.data.message
                    this.id_colchon = ''
                    this.documento_cliente = ''
                })
                .catch(e => {
                    console.error('Error al comprar', e)
                    this.mensaje = 'No se pudo registrar la compra'
                })
                .finally(() => {
                    this.enviando = false
                });
        }
    },
    created() {
        this.getColchones();
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
.formulario {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #FFF;
    color: #000;
    padding: 1.5rem;
    border-radius: 1rem;
}
.formulario label {
    font-weight: bold;
}
.formulario input,
.formulario select {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}
.formulario button {
    padding: 0.7rem;
    border: none;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
    border-radius: 0.5rem;
}
.mensaje {
    color: #FFF;
    margin-top: 1rem;
}
</style>
