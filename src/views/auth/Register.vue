<script>
    import axios from "axios"

    export default {
        data: function () {
            return {
                username: '',
                profilName: '',
                password: ''
            }
        },
        methods: {
            register: async function () {
                await axios.post("http://159.223.57.121:8090/auth/register", {
                        username: this.username,
                        profilName: this.profilName,
                        password: this.password,
                    })
                    .then(async (response) => {
                        const data = await response.data;

                        if (data.status === 'OK') {
                            alert('sukses register');
                        }

                        this.$router.push('/login');
                        this.username = "";
                        this.profilName = "";
                        this.password = "";
                    });
            },
            action() {
                alert("Register Berhasil");
            }
        }


    }
</script>