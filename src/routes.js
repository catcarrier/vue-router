import Home from './components/Home.vue';
import Header from './components/Header.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
    {
        path: '', 
        name: "home", 
        components: {
            default: Home,
            'header-top': Header,
            'header-bottom': Header
        }
    },
    {
        path: '/user', 
        name: 'user',
        components: {
            default: User,
            'header-bottom': Header
        }, 
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: "userEdit" }
        ]
    },
    {
        path: '/redirect-with-object', redirect: {name: 'user'},
        path: '/redirect-with-string', redirect: '/user'
    }
]