import bus from '../../bus';

export default {
  name: 'head-bar',
  components: {},
  props: {},
  data() {
    return {};
  },
  directives: {},
  computed: {},
  created() {
    bus.$on('project-status-updated', this.setStatus);
  },
  methods: {
    setStatus(value) {
      this.$refs.status.style.setProperty('--completed', `${value * 100}%`);
    },
  },
};
