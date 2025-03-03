<template>
    <div id="indorace-services-grid"
        class="mt-4 md:mt-8 p-4 md:p-8 border-3xl rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-2 md:p-4 max-w-md md:max-w-lg items-center text-center">
            <div class="flex justify-center items-center bg-primary rounded-full w-16 h-16 mx-auto text-white">
                <Timer class="p-3 size-full" />
            </div>
            <h3 class="my-4 font-bold text-lg md:text-2xl">Timing</h3>
            <p class="text-zinc-500">Race timing using the best timing solution MYLAPS and prominent timing system from Australia.</p>
        </div>

        <div class="p-2 md:p-4 max-w-md md:max-w-lg items-center text-center">
            <div class="flex justify-center items-center bg-primary rounded-full w-16 h-16 mx-auto text-white">
                <Package class="p-3 size-full" />
            </div>
            <h3 class="my-4 font-bold text-lg md:text-2xl">Racepack Collection</h3>
            <p class="text-zinc-500">We will provide the racepacks. Including medals and jerseys.</p>
        </div>

        <div class="p-2 md:p-4 max-w-md md:max-w-lg items-center text-center">
            <div class="flex justify-center items-center bg-primary rounded-full w-16 h-16 mx-auto text-white">
                <UserRoundCog class="p-3 size-full" />
            </div>
            <h3 class="my-4 font-bold text-lg md:text-2xl">Race Management</h3>
            <p class="text-zinc-500">We will help manage the track, and accommodate you.</p>
        </div>

        <div class="p-2 md:p-4 max-w-md md:max-w-lg items-center text-center">
            <div class="flex justify-center items-center bg-primary rounded-full w-16 h-16 mx-auto text-white">
                <NotebookPen class="p-3 size-full" />
            </div>
            <h3 class="my-4 font-bold text-lg md:text-2xl">Registration</h3>
            <span class="text-zinc-500">Our events are integrated with registration services, if you so choose to use <a class="text-sky-300 font-bold underline" href="https://racewoxx.com" target="_blank" ref="noopener noreferrer">them</a>. </span>
        </div>
    </div>
</template>

<script setup>

import { Timer, Package, UserRoundCog, NotebookPen } from 'lucide-vue-next';

</script>

<style scoped></style>