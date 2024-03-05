
import router from "@/router";

//路由跳转
export function jumpDefault() {
    router.push('/').then()
}
export function jumpResume(){
    router.push('/resume').then()
}
export function jumpResumeOri(){
    router.push('/resumeOri').then()
}
export function jumpTestPage(){
    router.push('/testPage').then()
}
export function jumpSignIn(){
    router.push('/signIn').then()
}
export function jumpBackground(){
    router.push('/background').then()
}
export function jumpSignUp(){
    router.push('/signUp').then()
}
export function jumpTool(){
    router.push('/tool').then()
}

