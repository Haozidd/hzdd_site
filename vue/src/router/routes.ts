export const constantRoutes = [
    {
        path: "/tool",
        name: 'tool',
        children:[
            {
                path:'rent',
                name:'rent',
                component:()=>import('@/pages/Tool/components/Rent/Rent.vue')
            },
            {
                path: "",
                redirect: '/tool/rent'
            }
        ],
        component: () => import('@/pages/Tool/index.vue'),
    },
    {
        path: "/nav",
        name: 'nav',
        component: () => import('@/pages/Nav/index.vue'),
    },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/pages/Resume/index.vue')
    },
    {
        path: '/resumeOri',
        name: 'resumeOri',
        component: () => import('@/pages/ResumeOri/index.vue')
    },
    {
        path: '/testPage',
        name: 'testPage',
        component: () => import('@/pages/Test/index.vue')
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: () => import('@/pages/SignIn/index.vue')
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: () => import('@/pages/SignUp/index.vue')
    },
    {
        path: '/background',
        name: 'background',
        component: () => import('@/pages/background/index.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: '/nav'
    }
]