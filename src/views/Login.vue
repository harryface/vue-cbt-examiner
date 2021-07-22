<template>
    <main class="form-signin">
        <form @submit.prevent="login">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input v-model="email" type="email" class="form-control" placeholder="name@example.com" />
                <label>Email address</label>
            </div>

            <div class="form-floating">
                <input v-model="password" type="password" class="form-control" placeholder="Password" />
                <label>Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
        </form>
    </main>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            if (!this.email && !this.password) {
                Swal.fire("Input Error", "Field cannot be empty", "error");
            } else {
                try{
                    await axios.post("login", {
                        email: this.email,
                        password: this.password,
                    });
                    await this.$router.push("/");
                }catch(e){
                    Swal.fire("Unauthorized", "Is your email/password correct?", "error")
                }
            }
        },
    },
};
</script>

