export default {
  name: 'tag',
  components: {},
  props: {
    tagData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  directives: {},
  computed: {},
  mounted() {
    this.$refs.tag.style.setProperty('--tag-bg', this.tagData.bgColor || '');
    this.$refs.tag.style.setProperty('--tag-text', this.tagData.textColor || '');
  },
  methods: {},
};
