import type {App} from "vue";
import testDirective from "@/directive/test";
import dialogDrag from "@/directive/dialogDrag";

export default function directive(app: App) {
    testDirective(app)
    dialogDrag(app)

}