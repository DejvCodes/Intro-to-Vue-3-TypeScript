import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventDetails from "@/views/EventDetails.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: '/',
    name: 'event-list-page',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-details-page',
    props: true,
    component: EventDetails
  },
  {
    path: '/about',
    name: 'about-page',
    component: About
  }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})