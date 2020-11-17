<script>
export default {
  name: 'vnode-to-html',
  props: [ "vnode" ],
  render(createElement) {
    return createElement(
      "template",
      [this.vnode]
    );
  },
  mounted() {
    this.$emit(
      "html",
      [...this.$el.childNodes].map((n) => n.outerHTML).join("\n\n")
    );
  },
};
</script>