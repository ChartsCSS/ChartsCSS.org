<template>
  <div class="code-example">

    <!-- Display the code -->
    <component :is="'style'" :name="codeExampleId"><slot name="css-code"></slot></component>
    <slot name="html-code"></slot>

    <!-- Open the code in... -->
    <div class="open-in" v-if="share">
      <span>Open in:</span>
      <form method="post" target="check" action="https://codepen.io/pen/define">
        <input type="hidden" name="data" :value="codePenData">
        <input type="submit" value="" class="codepen" aria-label="Open in CodePen" title="Open in CodePen">
      </form>
      <form method="post" target="check" action="https://jsfiddle.net/api/post/library/pure/">
        <Vnode :vnode="this.$slots['html-code']" @html="html = $event"></Vnode>
        <input type="hidden" name="title" value="Charts.css Example">
        <input type="hidden" name="resources" value="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
        <textarea name="html">{{html}}</textarea>
        <textarea name="css">{{css}}</textarea>
        <input type="submit" value="" class="jsfiddle" aria-label="Open in jsFiddle" title="Open in jsFiddle">
      </form>
    </div>

  </div>
</template>

<script>
import Vnode from "./vnode-to-html";

const extra_css =
`body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
`;

/*
 * Open In
 * ~~~~~~~
 * CodePen:  https://blog.codepen.io/documentation/prefill/
 * jsFiddle: https://docs.jsfiddle.net/api/display-a-fiddle-from-post
 */
export default {
  name: 'CodeExample',
  components: {
    Vnode
  },
  data() {
    return {
      html: '',
    };
  },
  props: {
    codeExampleId: String,
    share: {
      type: Boolean,
      default: true,
    },
    extras: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    css() {
      return this.extras
        ? extra_css + this.$slots['css-code'][0].text
        : this.$slots['css-code'][0].text;
    },
    codePenData() {
      let data = {
        "title": "Charts.css Example",
        "tags": ["charts.css", "charts", "chart"],
        "css_external": "https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css",
        "editors": "110",
        "html": this.html,
        "css": this.css,
        "turn_off_js": "true"
      };
      return JSON.stringify(data);
    }
  }
}
</script>

<style>
.code-example {
  margin: 0 auto;
  padding-top: 2rem;
  flex: 1 1 0;
}
.code-example:focus > .open-in,
.code-example:hover > .open-in {
  opacity: 1;
}
.open-in {
  transition-duration: 0.6s;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1em auto;
  font-size: 0.8rem;
}
.open-in span {
  font-weight: bold;
  opacity: 0.5;
}
.open-in input[type="submit"] {
  display: inline-block;
  width: 1.5rem;
  border: 0;
  appearance: none;
  cursor: pointer;
  background-color: initial;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  transition-duration: 0.3s;
  opacity: 0.5;
}
.open-in input[type="submit"]:focus,
.open-in input[type="submit"]:hover {
  transform: scale(1.25);
  outline: none;
  opacity: 1;
}
.open-in input.codepen {
  background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMCAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuMTg0IDYuMzg3bC0uMDE1LS4wNjctLjAxNC0uMDQtLjAyLS4wNmMtLjAwNy0uMDEyLS4wMTItLjAyNS0uMDItLjAzOGwtLjAyNy0uMDU0Yy0uMDEtLjAxMi0uMDE3LS4wMjQtLjAyNS0uMDM3LS4wMS0uMDE2LS4wMjMtLjAzLS4wMzQtLjA0N2wtLjAyOC0uMDM1LS4wNC0uMDQ0LS4wMzQtLjAzYy0uMDE0LS4wMTUtLjAzLS4wMjctLjA0Ni0uMDQtLjAxMi0uMDEtLjAyNS0uMDItLjAzNy0uMDI3bC0uMDE0LS4wMS04Ljc3My01LjcyYy0uMjc4LS4xODItLjYzOC0uMTgyLS45MTUgMEwuMzY3IDUuODU2bC0uMDE0LjAwOC0uMDM3LjAyOGMtLjAxNi4wMS0uMDMyLjAyNS0uMDQ3LjAzOC0uMDEyLjAxLS4wMjMuMDIyLS4wMzMuMDMyLS4wMTUuMDE0LS4wMjguMDMtLjA0Mi4wNDUtLjAxLjAxLS4wMi4wMjMtLjAyOC4wMzRsLS4wMzUuMDUtLjAyMy4wMzctLjAzLjA1M2MtLjAwNi4wMTQtLjAxLjAyNy0uMDE4LjA0LS4wMDguMDItLjAxNC4wNC0uMDIuMDYtLjAwNS4wMTItLjAxLjAyNi0uMDEzLjA0LS4wMDcuMDItLjAxLjA0NC0uMDE2LjA2NmwtLjAwNi4wMzVDLjAwMyA2LjQ1NyAwIDYuNDkgMCA2LjUyN3Y1LjcyMmMwIC4wMzQuMDAzLjA3LjAwOC4xMDUgMCAuMDEuMDA0LjAyMy4wMDYuMDM0bC4wMTUuMDY3Yy4wMDIuMDE0LjAwNy4wMjYuMDEuMDRsLjAyMi4wNi4wMi4wNC4wMjcuMDUzLjAyMi4wMzcuMDM1LjA1Yy4wMS4wMS4wMi4wMjIuMDI4LjAzM2wuMDQyLjA0NS4wMzIuMDNjLjAxNC4wMTQuMDMuMDI3LjA0Ni4wNGwuMDM3LjAyNi4wMTQuMDEgOC43NzQgNS43MmMuMTQuMDkyLjMuMTM3LjQ1OC4xMzcuMTYgMCAuMzItLjA0NS40NTgtLjEzNmw4Ljc3NC01LjcyMi4wMTQtLjAxYy4wMTItLjAxLjAyNS0uMDE4LjAzNy0uMDI3LjAxNy0uMDEuMDMzLS4wMjQuMDQ3LS4wMzdsLjAzNC0uMDNjLjAxNC0uMDE2LjAyOC0uMDMuMDQtLjA0NmwuMDMtLjAzNGMuMDEyLS4wMTcuMDI0LS4wMzIuMDM0LS4wNS4wMS0uMDEuMDE2LS4wMjQuMDI0LS4wMzYuMDEtLjAxOC4wMi0uMDM2LjAyOC0uMDU0bC4wMi0uMDQuMDItLjA2Yy4wMDQtLjAxMy4wMS0uMDI1LjAxMi0uMDQuMDA2LS4wMi4wMS0uMDQzLjAxNS0uMDY2bC4wMDctLjAzNGMuMDA0LS4wMzUuMDA3LS4wNy4wMDctLjEwNXYtNS43MmMwLS4wMzctLjAwMy0uMDcyLS4wMDctLjEwN2wtLjAwNi0uMDMzem0tOS41ODYgNC45MUw2LjY4IDkuMzkgOS42IDcuNDhsMi45MTggMS45MS0yLjkxOCAxLjkwN3ptLS44MjQtNS4yMmwtMy41NzcgMi4zNEwyLjMxIDYuNTNsNi40NjQtNC4yMTZ2My43NjR6TTMuNzE0IDkuMzlsLTIuMDY1IDEuMzQ4di0yLjdsMi4wNjMgMS4zNXptMS40ODMuOTdsMy41NzcgMi4zMzh2My43NjRMMi4zMSAxMi4yNDdsMi44ODctMS44ODh6bTUuMjI2IDIuMzM4TDE0IDEwLjM1OGwyLjg4NyAxLjg5LTYuNDY0IDQuMjE0di0zLjc2NHptNS4wNi0zLjMxbDIuMDY1LTEuMzV2Mi43bC0yLjA2NC0xLjM1ek0xNCA4LjQybC0zLjU3Ny0yLjM0VjIuMzE1bDYuNDY0IDQuMjE0TDE0IDguNDE2eiIgZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
}
.open-in input.jsfiddle {
  background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyNCAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy4zNTIgMy42NWMuMTc1LS4yNy4zMy0uNTQ2LjUyLS44QzkuMDg4IDEuMjM3IDEwLjc0My4yOSAxMi44NC4wNWMzLjA3NC0uMzU0IDYuMDM3IDEuMjMgNy4yNTQgMy44NjIuNDA4Ljg4LjYgMS44MDIuNTQyIDIuNzYzLS4wMDcuMTEuMDMuMTU0LjEzNC4xOTggMS43Ny43MzggMi44NDcgMi40MiAyLjY5OCA0LjIwNi0uMTU0IDEuODQtMS42MyAzLjQxMi0zLjU4MiAzLjgxMi0uNDIuMDg2LS44NDYuMTMtMS4yNzguMDk3LS4wNjMtLjAwNi0uMTI2LS4wMDMtLjE5LS4wMDMtNC41MjQgMC05LjA1LS4wMDItMTMuNTc1IDAtLjgxNSAwLTEuNTktLjE1LTIuMzE1LS41Qy0uNjcgMTIuOTQtLjg3OCA4LjgwNCAyLjE1NiA2Ljk4OGMuMTIyLS4wNzQuMTUzLS4xMy4xMTUtLjI2NC0uNDctMS42NzIuNzgzLTMuNDEzIDIuNjE1LTMuNjQ3Ljg3NS0uMTEzIDEuNjc2LjA1NSAyLjQuNTMuMDIzLjAxNi4wNDguMDMuMDY3LjA0em0zLjA2NSA2LjY0M2MtLjExLjA4OC0uMjAyLjE2Ni0uMy4yNC0uNTE4LjM4LTEuMDk4LjUzNi0xLjc1LjQxLS41OS0uMTE0LTEuMDQzLS41NzgtMS4xMDQtMS4xMTQtLjA2My0uNTUyLjI1LTEuMDcyLjc5Ny0xLjMxLjM4LS4xNjMuNzc1LS4xNzMgMS4xNzMtLjA3LjY5LjE3NyAxLjIwNC41ODQgMS42NSAxLjA4Ny40ODQuNTQ1Ljk2IDEuMDk2IDEuNDcyIDEuNjE2IDEuMTMgMS4xNSAyLjUzIDEuNiA0LjE2MyAxLjIxOCAxLjE1My0uMjY4IDEuOTUtLjk1NiAyLjE5My0yLjA3LjI1LTEuMTMzLS4wOS0yLjEwNS0xLjExLTIuODItLjU3OC0uNDEtMS4yNDYtLjU3LTEuOTYtLjYtMS4wOTItLjA0Ny0yLjA1OC4yMjgtMi44Ni45NDUtLjAzNC4wMy0uMDg4LjA0LS4xMy4wNTdsLjU2LjYxNS41MTYuNTY2Yy4wMjMtLjAwNi4wMy0uMDA2LjAzMi0uMDA4bC4xODctLjE1Yy40OTItLjM4NSAxLjA1LS41NzUgMS43LS41LjY0NS4wNzQgMS4xNy41NjYgMS4yNDIgMS4xNzQuMDY4LjU3OC0uMzMyIDEuMTQtLjk1NCAxLjMzLS4zOTUuMTItLjc5LjEtMS4xNzgtLjAzMi0uNjQ4LS4yMi0xLjEyNi0uNjQtMS41NTYtMS4xMjgtLjQ5Ny0uNTY0LS45ODgtMS4xMzUtMS41MzQtMS42NTUtMS4wOC0xLjAyNy0yLjM5Mi0xLjQzMi0zLjkyLTEuMTItMS4xNi4yMzYtMi4zODIgMS4xNTUtMi4zOCAyLjY2MiAwIDEuMDUyLjQ2NCAxLjg1OCAxLjQyNyAyLjQwNi40Ny4yNjcuOTkuMzk0IDEuNTM2LjQzMi44MS4wNTcgMS41ODctLjA0MyAyLjI5OC0uNDQyLjMwMi0uMTcuNTc4LS4zNjcuODMtLjYwNWwtMS4wNC0xLjEzNXoiIGZpbGw9IiM0NDQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
}
.open-in textarea {
  display: none;
}
</style>
