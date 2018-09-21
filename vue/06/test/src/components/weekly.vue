<template>
    <div class="weekly">
        <mt-tab-container :active.sync="active">
            <mt-tab-container-item id="tab-container1">
                <mt-cell v-for="n in 10" :title="'tab-container1 ' + $index" :key="n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                <mt-cell v-for="n in 5" :title="'tab-container2 ' + $index" :key="n"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
