import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';
import utils from '../../utils';
import { status } from '../../enums';
import bus from '../../bus';
import todoList from './../todo-list/todo-list.vue';
import tag from './../tag/tag.vue';

Vue.use(ToggleButton);

export default {
  name: 'project',
  components: {
    todoList,
    tag,
  },
  props: {},
  data() {
    return {
      todos: null,
      pendingTodos: [],
      inProgressTodos: [],
      inReviewTodos: [],
      completedTodos: [],
      status,
    };
  },
  directives: {},
  computed: {
    peopleTag() {
      return {
        text: '6 people',
      };
    },
    timeTag() {
      return {
        bgColor: '#ffeac0',
        textColor: '#ffb75e',
        text: '2 days left',
      };
    },
  },
  created() {
    bus.$on('update-todos', this.getTodos.bind(this, true));
    bus.$on('todo-status-updated', this.updateTodoStatus);
    this.getTodos();
  },
  mounted() {},
  methods: {
    getTodos(reset) {
      if (reset) {
        this.todos = null;
        this.pendingTodos = [];
        this.inProgressTodos = [];
        this.inReviewTodos = [];
        this.completedTodos = [];
      }
      this.todos = utils.getLocalStorage('todos')
        ? JSON.parse(utils.getLocalStorage('todos'))
        : null;
      if (this.todos) {
        this.segregateTodosBasedOnType();
        bus.$emit(
          'project-status-updated',
          this.completedTodos.length / this.todos.length,
        );
      }
    },
    segregateTodosBasedOnType() {
      this.todos.forEach(element => {
        const status = element.status;
        this[this.getNodeBasedOnTodoType(status)].push(element);
      });
    },
    getNodeBasedOnTodoType(s) {
      switch (s) {
        case status.DONE:
          return 'completedTodos';
        case status.IN_PROGRESS:
          return 'inProgressTodos';
        case status.IN_REVIEW:
          return 'inReviewTodos';
        case status.TODO:
          return 'pendingTodos';
        default:
          return '';
      }
    },
    updateTodoStatus(data) {
      const todoId = data.id;
      const todoStatus = data.status;

      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === todoId) {
          this.todos[i].status = todoStatus;
          break;
        }
      }

      utils.setLocalStorage('todos', this.todos);

      this.getTodos(true);
    },
  },
};
