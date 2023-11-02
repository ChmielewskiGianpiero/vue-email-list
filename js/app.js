const { createApp } = Vue;

createApp({
    data() {
        return {
           mails: []
        }
    },
    methods: {
        fetchMail(){
            for (let i = 0; i <  10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const mailRes = res.data.response
                    this.mails.push(mailRes)             
                    console.log(mailRes)           
                })   
            }
        }
    },
    created() {
		this.fetchMail()
	}
}).mount('#app');