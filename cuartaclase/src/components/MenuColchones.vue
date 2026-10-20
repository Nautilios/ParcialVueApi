<template>
    <header class="cabecera">
        <div class="container-logo">
            <h1 class="logo">Colchones</h1>
        </div>
        <nav class="menu">
            <li class="item-menu" @click="irA('catalogo')">CATALOGO</li>
            <li class="item-menu" @click="irA('comprar')">COMPRAR</li>
            <li class="item-menu" @click="irA('miscompras')">MIS COMPRAS</li>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MenuColchones',
    methods: {
        irA: function (id) {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView()
            }
        }
    }
}
</script>

<style scoped>
.cabecera {
    width: 100%;
    display: flex;
    background-color: #000;
    color: #FFF;
    height: 80px;
    border-bottom: #FFF 1px solid;
}
.container-logo {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo {
    font-size: 2rem;
}
.menu {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.item-menu {
    list-style: none;
    background-color: gray;
    color: #000;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-menu:hover {
    background-color: #FFF;
    cursor: pointer;
    font-weight: 700;
}
</style>
