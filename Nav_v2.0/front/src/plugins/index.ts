import { App } from "vue";
import { setup as tailwind } from "./tailwind";
import { setup as router } from "./router";
import { setup as element } from "./elementPlus";
import { setup as vueAudio } from "./vue-audio";

const modules = [tailwind, router, element, vueAudio];
export default function register(app: App) {
  modules.map((setup) => setup(app));
}
