import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Base from '../views/Base.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Takers from '../views/taker/Takers.vue'
import TakerResult from '../views/taker/TakerResult.vue'
import CreateExam from '../views/exam/CreateExam.vue'
import ExamResult from '../views/exam/ExamResult.vue'
import RegisterExam from '../views/exam/RegisterExam.vue'
import ViewExam from '../views/exam/ViewExam.vue'
import ListExam from '../views/exam/ListExam.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '',
        component: Base,
        children: [
            { path: '', redirect: '/exams' },
            { path: '/students', component: Takers },
            { path: '/exam/:id/detail', component: ViewExam },
            { path: '/exams', component: ListExam },
            { path: '/create/exam', component: CreateExam },
            { path: '/register/:id/exam', component: RegisterExam },
            { path: '/results/:id/exam', component: ExamResult },
            { path: '/taker/:id/result', component: TakerResult },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
