<script>
    import axios from "axios"

    export default {
        data: function () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: async function () {
                await axios.post("http://159.223.57.121:8090/auth/login", {
                        username: this.username,
                        password: this.password,
                    })
                    .then(async (response) => {
                        localStorage.setItem("Token", response.data.data.token);
                        console.log(response);

                        this.$router.push('/barang');
                        this.username = "";
                        this.password = "";
                    });
            }
        }
    }
</script>