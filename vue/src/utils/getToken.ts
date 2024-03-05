export function setToken(tokenKey:string,tokenValue:string){
    return localStorage.setItem(tokenKey,tokenValue)
}
export function getToken(tokenKey:string){
    return localStorage.getItem(tokenKey)
}
export function removeToken(tokenKey:string){
    return localStorage.removeItem(tokenKey)
}