<template>
    <div class="centerall">
        <div class="columns">
            <div class="column">
                <div class="box">
                    <form @submit.prevent="register">
                        <div class="has-text-centered has-text-weight-light is-family-primary pb-5">
                            <p class="is-size-2">Registration Form</p>
                            <p class="is-size-4">For Examiners</p>
                        </div>

                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-medium" type="text" placeholder="first Name" v-model="first_name" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-medium" type="text" placeholder="Last Name" v-model="last_name" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
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
                            <p class="control has-icons-left">
                                <input class="input is-medium" type="password" placeholder="Confirm Password" v-model="password_confirm" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-link is-medium is-fullwidth">Register</button>
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
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: "Register",
    data() {
        return {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirm: "",
            loading: false,
        };
    },
    methods: {
        async register() {
            if (this.password !== this.password_confirm && this.email) {
                Swal.fire("Input Error", "Email Needed/Password Must Match", "error");
            } else {

                this.loading = true;

                try {
                    await axios.post("register", {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        password: this.password,
                        password_confirm: this.password_confirm,
                    });

                    this.loading = false;
                    await this.$router.push("/login");

                } catch (e) {

                    this.loading = false;
                    this.warning()
                }
            }
        },
        warning() {
            this.$buefy.snackbar.open({
                message: 'Something went wrong',
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