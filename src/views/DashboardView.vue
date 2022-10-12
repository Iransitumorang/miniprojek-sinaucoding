<template>
    <div>
        <HeaderSinau />
        <article class="dashboardMain">
            <div class="me-5">
                <div class="d-flex flex-column justify-content-center align-center text-center userCard">
                    <img src="../assets/logo.png" alt="Profile" class="w-50 m-auto p-3">
                    <div class="userName">User</div>
                </div>
                <div class="my-3 menuCard">
                    <div class="userName ps-3">Menu</div>
                    <div class="px-3 barangCard">Barang</div>
                    <div class="px-3">Supplier</div>
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
                    <router-link to="/AddBarangView">
                        <button type="button" class="btn btn-primary">Tambah Barang</button>
                    </router-link>
                </div>
                <TableArray />
            </div>
        </article>
        <FooterSinau />
    </div>
</template>

<script>
    import FooterSinau from '../components/FooterSinau.vue'
    import HeaderSinau from '../components/HeaderSinau.vue'
    import TableArray from '../components/TableArray.vue'

    export default {
        components: {
            FooterSinau,
            HeaderSinau,
            TableArray
        }
    }
</script>

<style scoped>
    .dashboardMain {
        height: 100vh;
        width: 100%;
        align-items: center;
        margin-top: -9vw;
        display: flex;
        justify-content: center;
    }

    .userCard, .menuCard, .onlineCard, .DashboardForm {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    }

    .userName, .dashboardText {
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
</style>