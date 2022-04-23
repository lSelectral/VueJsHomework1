const app = Vue.createApp({
    data() {
        return {
            NAME: "Recep",
            AGE: "23",
            randomNumber: 0,
        }
    },
    methods: {
        generateRandomNumber() {
            this.randomNumber = Math.random();
        },
        changeName(e){
            this.NAME = e.target.value;
        }
    },
}).mount("#exercise")