<template>

    <body>
        <HeaderSinau />
        <article class="dashboardMain my-5">
            <div class="me-5">
                <div class="d-flex flex-column justify-content-center align-center text-center userCard">
                    <img src="../assets/user.png" alt="Profile" class="w-50 m-auto p-3">
                    <div class="userName">User</div>
                </div>
                <div class="my-3 menuCard">
                    <div class="userName ps-3">Menu</div>
                    <div class="d-flex flex-column">
                        <router-link to="/DashboardView" class="px-3 barangCard underline">
                            Barang
                        </router-link>
                        <router-link to="/ListSupplierView" class="px-3 underline">
                            Supplier
                        </router-link>
                    </div>
                </div>
                <div class="onlineCard">
                    <div class="userName ps-3">Online</div>
                    <div class="d-flex justify-content-between px-3">
                        <span>Hari Online</span>
                        <span>2022-10-06</span>
                    </div>
                    <div class="d-flex justify-content-between px-3">
                        <span>Waktu Online</span>
                        <span>11.46.49</span>
                    </div>
                </div>
            </div>
            <div class="DashboardForm">
                <div class="dashboardText py-2 ps-3">Dashboard</div>
                <div class="d-flex p-4 justify-content-between">
                    <div class="barang">Barang</div>
                    <div class="input-group mb-3 formSearch">
                        <div>
                            <input type="text" class="form-control" placeholder="Search ..." aria-label="Search"
                                aria-describedby="basic-addon2">
                        </div>
                        <div class="bg-light ms-2 rounded p-1">
                            <img src="../assets/search.png" alt="search">
                        </div>
                    </div>
                    <router-link to="/AddBarangView">
                        <button type="button" class="btn btn-primary">Tambah Barang</button>
                    </router-link>
                </div>
                <!-- <TableArray /> -->
                <table class="table table-bordered">
                    <tr>
                        <td>No</td>
                        <td>Nama Barang</td>
                        <td>Stock</td>
                        <td>Harga</td>
                        <td>Nama Suplier</td>
                        <td>Alamat Suplier</td>
                        <td>No Telp Supplier</td>
                        <td>
                            Aksi
                        </td>
                    </tr>
                    <tbody>
                        <tr v-for="(data,index) in dataBarang" v-bind:key="data.id">
                            <td>{{ index+1 }}</td>
                            <td>{{ data.namaBarang }}</td>
                            <td>{{ data.harga }}</td>
                            <td>{{ data.stok }}</td>
                            <td>{{ data?.supplier?.namaSupplier}}</td>
                            <td>{{ data?.supplier?.alamat}}</td>
                            <td>{{ data?.supplier?.noTelp}}</td>
                            <td class="d-lg-flex gap-2">
                                <router-link to="#">
                                    <button @click='deleteTableRow(data.id)'
                                        class="btn btn-danger action">Hapus</button>
                                </router-link>
                                <button @click='updateTableRow(data.id)' class="btn btn-warning action">Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="..." class="d-flex justify-content-center">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </article>
        <FooterSinau />
    </body>
</template>

<script>
    import FooterSinau from '../components/FooterSinau.vue'
    import HeaderSinau from '../components/HeaderSinau.vue'
    // import TableArray from '../components/TableArray.vue'
    import axios from "axios"

    export default {
        created() {
            this.getData();
        },
        components: {
            FooterSinau,
            HeaderSinau
        },
        methods: {
            async getData() {
                const {
                    data
                } = await axios.get("http://159.223.57.121:8090/barang/find-all", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        offset: 0,
                        limit: 15
                    }
                });
                console.log('data:', data.data);
                this.dataBarang = await data.data;
            },
            async deleteTableRow(id) {
                console.log('id:', id);
                await axios.delete("http://159.223.57.121:8090/barang/delete/" + id, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                        'Content-Type': 'application/json'
                    },
                }).then(async (response) => {
                    const data = await response.data;

                    if (data.status === 'OK') {
                        alert('Hapus Barang sukses');
                        this.getData();
                    }
                });
            },
            updateTableRow(id) {
                console.log('id:', id);
                this.$router.push({
                    name: 'updatebarang',
                    query: {
                        id: id
                    }
                });
            }
        },
        data: function () {
            return {
                dataBarang: []
            }
        }
    }
</script>

<style scoped>
    body {
        background-color: #F5EFE6;
    }

    .formSearch {
        width: 20vw;
    }

    .dashboardMain {
        /* height: 100vh;
        width: 100%;
        margin-top: 9vw;
        align-items: center; */
        display: flex;
        justify-content: center;
    }

    .userCard,
    .menuCard,
    .onlineCard,
    .DashboardForm {
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
    }

    .userName,
    .dashboardText {
        background-color: #B4CDE6;
        font-size: 20px;
        font-weight: 500;
        color: #083AA9;
    }

    .barang {
        font-weight: 500;
        font-size: 20px;
        color: #083AA9;
    }

    .barangCard {
        background-color: #083AA9;
        color: aliceblue;
    }

    .underline {
        text-decoration: none;
    }
</style>