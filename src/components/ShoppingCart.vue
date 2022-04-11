<script setup lang="ts">
import { watch, ref } from 'vue';
import { getCartProducts } from '../store';
import { findIndex } from 'lodash';

const products = ref(getCartProducts());
const change = (product, isAdd) => {
    if (isAdd) product.quantity++;
    else product.quantity--;

    if (!product.quantity) {
        const id = findIndex(products.value, ['id', product.id]);
        products.value.splice(id, 1);
    }

    localStorage.setItem('cartProducts', JSON.stringify(products.value));
};
const totalQuantity = ref(0);
const totalPrice = ref(0);

const calculateTotals = () => {
    totalQuantity.value = products.value.reduce((prev, current) => prev + current.quantity, 0);
    totalPrice.value = products.value.reduce((prev, current) => prev + current.quantity * current.price, 0);
};

calculateTotals();
watch(products.value, () => calculateTotals());
</script>

<template>
    <div class="bg-white rounded-xl p-6 shadow">
        <table>
            <thead>
                <tr class="text-gray-500">
                    <th class="pr-2">ID</th>
                    <th class="pr-6">NOMBRE</th>
                    <th class="pr-6">PRECIO</th>
                    <th class="pr-6">CANTIDAD</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="product in products" :key="product.id">
                    <td class="pr-2 font-bold">{{ product.id }}</td>
                    <td class="pr-6">{{ product.name }}</td>
                    <td class="pr-6">{{ product.price }}</td>
                    <td class="pr-6">
                        <div
                            class="flex justify-between border border-gray-400 rounded-lg items-center shadow overflow-hidden"
                        >
                            <button
                                @click="change(product, false)"
                                class="font-bold bg-gray-300 py-1 px-2 w-7 hover:bg-gray-500 hover:text-white"
                            >
                                -
                            </button>
                            <span class="w-12 text-center">{{ product.quantity }}</span>
                            <button
                                @click="change(product, true)"
                                class="font-bold bg-gray-300 py-1 px-2 w-7 hover:bg-gray-500 hover:text-white"
                            >
                                +
                            </button>
                        </div>
                    </td>
                    <td>{{ product.price * product.quantity }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">&nbsp;</td>
                    <td class="text-center pr-6 font-semibold">{{ totalQuantity }}</td>
                    <td class="text-center font-semibold">{{ totalPrice }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
