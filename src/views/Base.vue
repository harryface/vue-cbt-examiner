<template>
    <div>
        <Nav :authenticated="authenticated" :user="user" />


        <section class="hero is-fullheight">
        <div class="columns is-mobile">

            <Sidebar />

            <main class="column pl-4">
                <router-view />
            </main>

        </div>
    </section>

        <!-- We will put a router-view so that the children would export it, more like block content in jinja -->
        
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
import { User } from "@/models/user";

export default {
    name: "Base",
    components: { Sidebar, Nav },
    data() {
        return {
            user: new User(),
            authenticated: false,
        };
    },
    async mounted() {
        try {
            const { data } = await axios.get("user");
            this.user = data;
            this.authenticated = true;
        } catch (e) {
            await this.$router.push("/login");
        }
    },
};
</script>
