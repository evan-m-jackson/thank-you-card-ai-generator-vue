import { createRouter, createMemoryHistory } from "vue-router";

import PeopleDatabase from '../src/components/PeopleDatabase.vue'
import WelcomeMessage from '../src/components/WelcomeMessage.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: WelcomeMessage,
        },
        {
            path: "/people",
            name: "people",
            component: PeopleDatabase,
        }
    ],
})

export default router