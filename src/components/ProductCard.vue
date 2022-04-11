<script setup lang="ts">
import { actions } from '../store';
defineProps({
    product: Object,
});
</script>

<template>
    <div class="flex flex-col p-4 rounded-xl justify-center bg-white shadow gap-3">
        <h1 class="text-2xl text-center font-semibold">{{ product.name }}</h1>
        <img :src="`https://picsum.photos/id/${product.id + 50}/200/300`" alt="" />
        <button
            @click="actions.addProductToCart(product)"
            class="bg-green-500 text-white rounded py-1 px-2 font-medium hover:bg-green-600"
        >
            Agregar al carrito
        </button>
    </div>
</template>
