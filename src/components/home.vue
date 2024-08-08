<template>
    <div class="icon"><i class="fa-light fa-house-heart"></i></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import logoURL from '../components/icons/NY.png'
import imgURL from '../components/icons/logo pagina.gif'

const imageSrc1 = ref(logoURL);  // URL de la imagen frontal
const imageSrc2 = ref(imgURL);  // URL de la imagen trasera
const isFlipped = ref(false);

function toggleFlip() {
    isFlipped.value = !isFlipped.value;
}
</script>

<style scoped>
.card {
    width: 300px;
    height: 200px;
    perspective: 1000px;
    cursor: pointer;
}

.card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
}

.card-inner.flipped {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
}

.card-front {
    z-index: 2;
    transform: rotateY(0deg);
}

.card-back {
    transform: rotateY(180deg);
}
</style>