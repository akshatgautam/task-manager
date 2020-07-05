import utils from '../../utils';
import { priority, status } from '../../enums';
import bus from '../../bus';
import tag from './../tag/tag.vue';

export default {
  name: 'todo',
  components: {
    tag,
  },
  props: {
    todoDetails: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      status,
    };
  },
  directives: {},
  computed: {
    isDoneTodo() {
      return this.todoDetails.status === status.DONE;
    },
    timeTag() {
      return {
        bgColor: this.isDoneTodo ? '#4bd3a7' : '',
        textColor: this.isDoneTodo ? '#ffffff' : '',
        text: this.todoDetails.dateCreated,
      };
    },
    attachmentsTag() {
      return {
        text: 1,
      };
    },
  },
  mounted() {
    this.$refs.todo.addEventListener('dragstart', this.dragstartHandler);
    this.setPriority();
  },
  methods: {
    dragstartHandler(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
      e.dataTransfer.dropEffect = 'move';
    },
    getPriorityIndicator(p) {
      switch (p) {
        case priority.TOP:
          return '#fd6666';
        case priority.MEDIUM:
          return '#fbc14e';
        case priority.LOW:
          return '#b7bdc8';
        default:
          return '';
      }
    },
    setPriority() {
      this.$refs.todo.style.setProperty(
        '--priority',
        this.getPriorityIndicator(this.todoDetails.priority),
      );
    },
    deleteTask() {
      const todos = JSON.parse(utils.getLocalStorage('todos'));
      const todoId = this.todoDetails.id;

      if (todos.length === 1) {
        utils.clearLocalStorage('todos');
      } else {
        for (let i = 0; i < todos.length; i++) {
          if (todos[i].id === todoId) {
            todos.splice(i, 1);
            break;
          }
        }
        utils.setLocalStorage('todos', todos);
      }
      bus.$emit('update-todos');
    },
  },
};
