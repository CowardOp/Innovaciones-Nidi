<template>
    <aside :class="`${expand ? 'expand' : ''}`"
        class="bg-[#B4D6CD] h-full absolute flex flex-col overflow-hidden top-0 p-4 min-h-screen z-10">
        <div class="mb-4 flex justify-center">
            <img v-if="show" :src="logoURL" alt="InnovacionesNidiLogo" class="bg-white rounded w-8"
                :class="`${turn ? 'turn' : ''}`" @click="turnIn">
            <img v-else :src="imgURL" alt="InnovacionesNidiLogo" class="w-[250px] bg-[#40534C] rounded">
        </div>
        <div class="flex flex-end mb-4 relative hola">
            <button @click="toggleMenu" class="menu-toggle ">
                <span v-if="show" class="icon"><i class="fa-solid fa-arrow-left-from-line text-[#1A3636]"></i></span>
                <span v-else class="icon "><i class="fa-solid fa-arrow-right-to-line text-[#1A3636]"></i></span>
            </button>
        </div>
        <h3 class="lovers text-[4rem] text-center">Menu</h3>
        <div class="menu my-0 mx-[-1rem]">
            <RouterLink to="/" class="button flex items-center py-[0.5rem] px-[1rem] gap-3 h-[70px]">
                <span class="icon"><i class="fa-solid fa-house-heart text-4xl text-[#1A3636]"></i></span>
                <span class="lovers text-[4rem]">Inicio</span>
            </RouterLink>
            <RouterLink to="/" class="button flex items-center py-[0.5rem] px-[1rem] gap-3 h-[70px]">
                <span class="icon"><i class="fa-solid fa-user-hair-buns text-4xl text-[#1A3636]"></i></span>
                <span class="text lovers text-[4rem]">Peinados</span>
            </RouterLink>
            <RouterLink to="/" class="button flex items-center py-[0.5rem] px-[1.4rem] gap-3 h-[70px]">
                <span class="icon"><i class="fa-solid fa-droplet text-4xl text-[#1A3636]"></i></span>
                <span class="text lovers text-[4rem]">Color</span>
            </RouterLink>
            <RouterLink to="/" class="button flex items-center py-[0.5rem] px-[1rem] gap-3 h-[70px]">
                <span class="icon"><i class="fa-solid fa-hand-holding-heart text-4xl text-[#1A3636]"></i></span>
                <span class="text lovers text-[4rem]">Manicure</span>
            </RouterLink>
            <RouterLink to="/" class="button flex items-center py-[0.5rem] px-[1rem] gap-3 h-[70px]">
                <span class="icon"><i class="fa-duotone fa-solid fa-mustache text-4xl text-[#1A3636]"></i></span>
                <span class="text lovers text-[4rem]">Barberia</span>
            </RouterLink>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import logoURL from '../components/icons/NY.png'
import imgURL from '../components/icons/logo pagina.gif'

const expand = ref<boolean>(localStorage.getItem('expand') === 'true')
const show = ref<boolean>(true)
const turn = ref<boolean>(localStorage.getItem('turn') === 'true')

const turnIn = (): void => {
    turn.value = !turn.value
    localStorage.setItem("turn", expand.value.toString())
}

const toggleMenu = (): void => {
    expand.value = !expand.value
    localStorage.setItem("expand", expand.value.toString())
    show.value = !show.value
}
</script>

<style scoped>
aside {
    right: 0;
    width: calc(2rem + 32px);
    transition: 0.2s ease-in-out;
}

aside.expand {
    width: 300px;

}

aside.expand h3,
aside.expand .button .text {
    opacity: 1;
}

aside.expand .button .icon {
    margin-right: 1rem;

}

aside.expand .menu .button:first-of-type .icon,
aside.expand .menu .button:nth-of-type(3) .icon,
aside.expand .menu .button:nth-of-type(5) .icon {
    animation: none;
}

aside.expand .menu .button:nth-of-type(2) .icon,
aside.expand .menu .button:nth-of-type(4) .icon {
    animation: none;
}

aside.expand .footer {
    opacity: 0;
}

img.turn {
    transform: rotateY(180deg);
}

.menu-toggle {
    width: 50px;
    transition: 0.2s ease-in;
}

.menu-toggle .icon {
    font-size: 2rem;
    transition: 0.2s ease-out;
}

.menu-toggle:hover .icon i {
    color: #57A6A1;
    transform: translateX(-0.5rem);
}

h3,
.text {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
}

.menu .button:first-of-type .icon:hover,
.menu .button:nth-of-type(3) .icon:hover,
.menu .button:nth-of-type(5) .icon:hover {
    animation: bounce 0.5s infinite alternate;
}

.menu .button:nth-of-type(2) .icon:hover,
.menu .button:nth-of-type(4) .icon:hover {
    animation: bounce 0.5s infinite reverse;
}

.button {
    transition: 0.2s ease-in-out;
}

/* .button .icon {

    animation: bounce 0.5s infinite alternate;
} */


@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
        /* Posición inicial y final (en el suelo) */
    }

    50% {
        transform: translateY(-3px);
        /* Punto más alto del brinco */
    }
}
</style>