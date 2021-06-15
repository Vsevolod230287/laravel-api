let app = new Vue({
  el: '#root',
  data: {
    sports: [],
    api_token: 'khLZzxshlRmEnpXyJFDNAGnjTnhnNGKTtrP1m19VTmou1VvEnBX6bxVajry6GQXT1zJttOV8C30ZmFXg'
  },
  created() {
    axios.get('http://localhost:8000/api/sports', {
      params: {
        api_key: this.api_token
      }
    }).then((response) => {
      this.sports = response.data.data;
      console.log(this.sports);
    })
  }
});
