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
                    <router-link to="/DashboardView" class="underline">
                        <div class="px-3">Barang</div>
                    </router-link>
                    <router-link to="/ListSupplierView" class="underline">
                        <div class="px-3 barangCard">Supplier</div>
                    </router-link>
                </div>
                <div class="onlineCard">
                    <div class="userName ps-3">Online<button class="bg-success rounded-circle ms-1" style="border: none; color: green; width: 3px; height: 12px;"></button></div>
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
                    <router-link to="/SupplierView">
                        <button type="button" class="btn btn-primary">Tambah Supplier</button>
                    </router-link>
                </div>
                <!-- <TableArray2 /> -->
                <table class="table table-bordered px-5">
                    <tr>
                        <td>No</td>
                        <td>Nama Suplier</td>
                        <td>Alamat</td>
                        <td>No Telpn</td>
                        <td class="d-lg-flex justify-content-center">
                            Aksi
                        </td>
                    </tr>
                    <tbody>
                        <tr v-for="(data,index) in dataSupplier" v-bind:key="data.index">
                            <td>{{ index+1 }}</td>
                            <td>{{ data.namaSupplier }}</td>
                            <td>{{ data.alamat  }}</td>
                            <td>{{data.noTelp}}</td>
                            <td class="d-lg-flex gap-2 justify-content-center">
                                <button @click='deleteTableRow(data.id)' class="btn btn-danger action">Hapus</button>
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
    // import TableArray2 from '../components/TableArray2.vue'
    import axios from "axios"

    export default {
        created() {
            this.getSupplier();
        },
        components: {
            FooterSinau,
            HeaderSinau
            // TableArray2
        },
        methods: {
            async getSupplier() {
                const {
                    data
                } = await axios.get(" http://159.223.57.121:8090/supplier/find-all", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        offset: 0,
                        limit: 15
                    }
                });
                console.log('data supplier:', data.data);
                this.dataSupplier = await data.data;
            },
            async deleteTableRow(id) {
                console.log('id:', id);
                await axios.delete("http://159.223.57.121:8090/supplier/delete/" + id, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                        'Content-Type': 'application/json'
                    },
                }).then(async (response) => {
                    const data = await response.data;

                    if (data.status === 'OK') {
                        alert('Hapus  Supplier sukses');
                        this.getSupplier();
                    }
                });
            },
            updateTableRow(id) {
                console.log('id:', id);
                this.$router.push({
                    name: 'updatesupplier',
                    query: {
                        id: id
                    }
                });
            }
        },
        data: function () {
            return {
                dataSupplier: []
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
        align-items: center;
        margin-top: -9vw; */
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