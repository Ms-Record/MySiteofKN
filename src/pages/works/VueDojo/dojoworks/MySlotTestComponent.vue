
<template>
    <div>
        <slot></slot>
        <v-dialog width="500">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="みすてむずのLTL"> </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Welcome to みすてむず！">
                    <v-card-text>
                        安心と信頼のみすてむずのLTLをのぞいてみよう！
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="みすてむずはこちら"
                               a href="https://misskey.systems" target="_blank" rel="noopener">みすてむず</v-btn>
                    </v-card-actions>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="とじる"
                               @click="isActive.value = false"></v-btn>

                    </v-card-actions>
                </v-card>
            </template>
            
        </v-dialog>
    </div>
    
</template>