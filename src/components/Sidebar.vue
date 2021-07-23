<template>
    <aside class="column nav is-2-mobile is-narrow pr-6" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="menu" :class="{'expanded': hover}">
            <ul class="menu-list">
                <li> <a href="#" class="menu-item"><i class="fas fa-tachometer-alt fa-3x"></i><span
                            class="nav-text">Dashboard</span></a> </li>
                <li> <a href="#" class="menu-item"><i class="fas fa-shopping-cart fa-3x"></i><span
                            class="nav-text">Products</span></a> </li>
                <li> <a href="#" class="menu-item"><i class="fas fa-layer-group fa-3x"></i><span
                            class="nav-text">Forms</span></a> </li>
                <li> <a href="#" class="menu-item"><i class="fas fa-users fa-3x"></i><span
                            class="nav-text">Members</span></a> </li>
                <li> <a href="#" class="menu-item"><i class="fas fa-history fa-3x"></i><span
                            class="nav-text">History</span></a> </li>
                <li> <a href="#" class="menu-item"><i class="fas fa-user fa-3x"></i><span
                            class="nav-text">Profile</span></a> </li>
                <li> <a href="#" class="menu-item"><i class="fas fa-cog fa-3x"></i><span
                            class="nav-text">Settings</span></a> </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import axios from "axios"

export default {
    name: "Sidebar",
    data() {
        return {
            hover: false,
        }
    },
    methods: {
        async logout() {
            await axios.post('logout');
            // redirect to login
            await this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

    .fa-3x {
        font-size: 3em;
    }

    .fas {
        position: relative;
        display: table-cell;
        width: 60px;
        height: 36px;
        text-align: center;
        vertical-align: middle;
        font-size: 20px;
    }


    .menu.expanded {
        width: 250px;
        overflow: visible;
    }


    .menu li:hover>a,
    .nav.menu li.active>a,
    .dropdown-menu>li>a:hover,
    .dropdown-menu>li>a:focus,
    .dropdown-menu>.active>a,
    .dropdown-menu>.active>a:hover,
    .dropdown-menu>.active>a:focus,
    .no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
    .dashboard-page nav.dashboard-menu ul li.active a {
        color: #fff;
        background-color: #5fa2db;
    }

    .menu {
        background: #212121;
        border-right: 1px solid #e5e5e5;
        position: absolute;
        top: 58px;
        bottom: 0;
        height: 100%;
        left: 0;
        width: 60px;
        overflow: hidden;
        -webkit-transition: width .05s linear;
        transition: width .05s linear;
        z-index: 1000;
    }

    .menu>ul {
        margin: 7px 0;
    }

    .menu li {
        position: relative;
        display: block;
        width: 250px;
    }

    .menu li>a {
        position: relative;
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
        color: #999;
        font-family: arial;
        font-size: 14px;
        text-decoration: none;
        -webkit-transition: all .1s linear;
        transition: all .1s linear;

    }

    .menu .nav-text {
        position: relative;
        display: table-cell;
        vertical-align: middle;
        width: 190px;
        font-family: 'Titillium Web', sans-serif;
    }

    

    .nav {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .nav ul,
    .nav li {
        outline: 0;
        margin: 0;
        padding-bottom: 5px;
    }

    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 300;
        src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
    }
</style>
