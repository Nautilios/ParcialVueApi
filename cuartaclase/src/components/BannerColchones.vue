<template>
    <img v-if="banner" class="banner" :src="banner" alt="">
</template>

<script>
export default {
    name: 'BannerColchones',
    data() {
        return {
            banner: ''
        }
    },
    methods: {
        getBanner: function () {
            this.axios
                .get('http://192.168.1.254:3000/getallcolchones')
                .then(response => {
                    if (response.data.length > 0) {
                        this.banner = response.data[0].imagen;
                    }
                })
        }
    },
    created() {
        this.getBanner();
    }
}
</script>

<style scoped>
.banner {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center center;
}
</style>
