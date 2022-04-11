<script setup lang="ts">
import ProductCard from './components/ProductCard.vue';
import ShoppingCart from './components/ShoppingCart.vue';

const products = [
    { id: 1, name: 'Base cama', price: 12000 },
    { id: 2, name: 'Espaldar', price: 12000 },
    { id: 3, name: 'Mueble', price: 12000 },
];
</script>

<template>
    <div class="min-h-screen bg-gray-200 w-screen">
        <div class="flex gap-4 justify-center pt-20">
            <ProductCard :product="products[0]" />
            <ProductCard :product="products[1]" />
            <ProductCard :product="products[2]" />
        </div>
        <div class="flex justify-center mt-20">
            <ShoppingCart />
        </div>
    </div>
</template>
