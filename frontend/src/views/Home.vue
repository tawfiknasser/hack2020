<template>
  <div class="graph-box-report">
    CYou
    <Graph :Gdata="Gdata" />
    <div>
      Students Alerts
      
    </div>
  </div>
</template>
<script>
import Plotly from "plotly.js-basic-dist";
import { mapGetters } from "vuex";
import axios from "axios";
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
      axios.get(`/api/getGraph`)
      .then(response=>{
        console.log(response.data.graphValues,"ree");
        if(response?.data?.graphValues)
        this.Gdata = [...response.data.graphValues]

      })
    }, 2000);
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
.graph-box-report{
  display : flex;
  flex-direction: column;
}
</style>