import Vue from "vue";
import Vuex from "vuex";
import moment from "vue-moment";
import VueCookies from "vue-cookies";
Vue.use(Vuex);
Vue.use(moment);
export const store = new Vuex.Store({
  state: {
    totalCounts: 0,
    id: "",
    name: "",
    task: [],
    bookContent: {
      chapter: "",
      h1title: "",
      h3title: "",
      content: ""
    }
  },
  getters: {
    getID: state => {
      return state.id;
    },
    getName: state => {
      return state.name;
    },
    getTask: state => {
      return state.task;
    },
    getNowCounts: state => {
      return state.totalCounts;
    },
    getBookContent: state => {
      return state.bookContent;
    },
  },
  mutations: {
    addTotalCounts(state) {
      state.totalCounts++;
    },
    setBook(state, payload) {
      state.bookContent.chapter = payload.chapter;
      state.bookContent.h1title = payload.h1title;
      state.bookContent.h3title = payload.h3title;
      state.bookContent.content = payload.content;
    },
    memberInfo(state, payload) {
      state.id = payload.id;
      state.name = payload.name;
      // task: [{
      //   childTask: [false, false, false]
      // }]
      // task: [{
      //   time: [],
      //   counters: []
      // }]

      // Cookies.set(payload.id, state.member);
    },
    taskDefault(state, payload) {
      state.task[payload] = {
        time: [],
        counts: []
      };
    },
    setTask(state, index) {
      let counts = state.totalCounts;
      let time = Vue.moment();
      state.task[index].time.push(time);
      state.task[index].counts.push(counts);
    },
    FinsihToCookie(state) {
      let Obj = {
        name: state.name,
        task: state.task
      };
      VueCookies.set(state.id, Obj);
    }
  }
});