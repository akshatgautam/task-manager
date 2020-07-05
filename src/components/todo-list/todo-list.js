import todo from './../todo/todo.vue';
import bus from '../../bus';

export default {
  name: 'todo-list',
  components: {
    todo,
  },
  props: {
    listTitle: {
      type: String,
      required: true,
    },
    listData: {
      type: Array,
      required: true,
    },
    listType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  directives: {},
  computed: {},
  mounted() {},
  methods: {
    dragoverHandler(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    },
    dropHandler(e) {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      this.$refs.list.appendChild(document.getElementById(id));
      bus.$emit('todo-status-updated', {id, status: this.listType});
    },
  },
};
