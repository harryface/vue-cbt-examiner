<template>
    <div class="centerall">
        <div class="columns">
            <div class="column">
                <div class="box">
                    <form @submit.prevent="login">
                        <div class="has-text-centered has-text-weight-light is-family-primary pb-5">
                            <p class="is-size-2">Login Form</p>
                            <p class="is-size-4">For Examiners</p>
                        </div>

                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-medium" type="email" placeholder="Email" v-model="email" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input is-medium" type="password" placeholder="Password" v-model="password" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-link is-medium is-fullwidth">Login</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <b-loading :is-full-page="true" v-model="loading" :can-cancel="true"></b-loading>

    </div>
</template>



<script>
import axios from "axios"
import Swal from "sweetalert2"

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            loading: false
        };
    },
    methods: {
        async login() {
            if (!this.email && !this.password) {
                Swal.fire("Input Error", "Field cannot be empty", "error");
            } else {
                
                this.loading = true;
                
                try {
                    await axios.post("login", {
                        email: this.email,
                        password: this.password,
                    });
                    
                    this.loading = false;

                    await this.$router.push("/");
                } catch (e) {
                    
                    this.loading = false;
                    this.warning()
                    // Swal.fire("Unauthorized", "Is your email/password correct?", "error");
                }
            }
        },
        warning() {
            this.$buefy.snackbar.open({
                message: 'Unauthorized: Is your email/password correct?',
                type: 'is-warning',
                position: 'is-top',
                actionText: 'Retry',
                indefinite: true
            })
        },
    },
};
</script>

<style scoped>
.centerall {
    height: 100vh;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
</style>
