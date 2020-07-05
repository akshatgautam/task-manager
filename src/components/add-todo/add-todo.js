import uniqid from 'uniqid';
import utils from '../../utils';
import { priority, months } from '../../enums';
import bus from '../../bus';

export default {
  name: 'add-todo',
  components: {},
  props: {},
  data() {
    return {
      modalOpen: false,
      title: '',
      user: '',
      description: '',
    };
  },
  directives: {},
  computed: {},
  mounted() {},
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    openAddTodoModal() {
      this.modalOpen = true;
    },
    closeAddTodoModal() {
      this.modalOpen = false;
    },
    generateRandomPriority() {
      const priorities = Object.keys(priority);
      const idx = this.getRandomInt(priorities.length);
      return priorities[idx];
    },
    formatImage() {
      const img = this.$refs.pictures.files[0];
      const reader = new FileReader();
      const self = this;
      reader.addEventListener(
        'load',
        function() {
        //   self.imageData = this.result.replace(/data:.*\/.*;base64,/, '');
        self.imageData = this.result;
        },
        false,
      );
      if (img) {
        reader.readAsDataURL(img);
      }
    },
    createTodo() {
      const date = new Date();

      const todo = {
        title: this.title,
        description: this.description,
        user: this.user,
        status: 'TODO',
        priority: this.generateRandomPriority(),
        id: uniqid(),
        image: this.imageData,
        dateCreated: `${months[date.getMonth()]} ${date.getDate()}`,
      };
      if (utils.getLocalStorage('todos')) {
        utils.updateLocalStorage('todos', todo);
      } else {
        utils.setLocalStorage('todos', todo);
      }
      bus.$emit('update-todos');
      this.resetForm();
      this.closeAddTodoModal();
    },
    
    resetForm() {
      this.title = '';
      this.description = '';
      this.user = '';
      this.imageData = '';
    },
  },
};
