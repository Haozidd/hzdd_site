import {App, Directive} from "vue";

export default function testDirective(app:App){

    const testDirective:Directive = {
        mounted(el,binding){

        },
    }

    app.directive('test',testDirective)
}