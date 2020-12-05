<template>
  <div class="graph-box-report">
    homeeeeee
    <Graph :Gdata="Gdata" />
  </div>
</template>
<script>
import Plotly from "plotly.js-basic-dist";
import { mapGetters } from "vuex";
import Graph from "./About";
export default {
  name: "Home",
  components: {
    Graph
  },
  data() {
    return {
      Gdata : []
    };
  },
  mounted() {
    setInterval(() => {
      console.log("request");
      this.Gdata = [2]
    }, 1000);
  },
  created() {},
  methods: {},
  watch: {},
  computed: {},
  props: [],
  destroyed: function() {},
  beforeUpdate() {}
};
</script>
<style  scoped>
.first-row {
  padding-top: 20px;
  padding-left: 26px;
  display: flex;
  justify-content: space-between;
}
</style>