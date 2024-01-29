console.log('Vue ok', Vue);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        emails: []
      
    }),
    created(){
        for(let i=0; i < 10; i++){

            axios.get(endpoint).then((res) => {
                const mail = res.data.response;
                this.emails.push(mail)
            })
        }
    }
})

app.mount('#root')