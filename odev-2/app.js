const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods: {
    showAlert() {
      alert();
    },
    keyDownListener(e){
      //this.value = e.target.value; 2. adım
      if (e.key == "Enter"){ // 3. adım
        this.value = e.target.value;
      }
    }
  }
});
app.mount("#exercise");
