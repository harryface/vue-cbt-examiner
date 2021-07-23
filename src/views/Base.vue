<template>
    <div>
        <Nav :authenticated="authenticated" :user="user" />

        <Sidebar />

        <section class="section">
            <h1 class="title">Section</h1>
            <h2 class="subtitle">A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>

            <router-view />
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
