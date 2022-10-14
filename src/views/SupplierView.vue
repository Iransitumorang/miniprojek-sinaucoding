<template>

    <body>
        <HeaderSinau />
        <article class="d-flex justify-content-center AddPage">
            <div class="AddForm">
                <div class="add py-2 ps-3">Tambah Supplier</div>
                <div class="p-3">
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Nama Supplier</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3"
                                placeholder="Masukkan Nama Supplier">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Alamat Supplier</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword3"
                                placeholder="Masukkan Alamat Supplier">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">No Telp Supplier</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword3"
                                placeholder="Masukkan Nomor Supplier">
                        </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                        <router-link to="/ListSupplierView">
                            <button type="button" class="btn btn-secondary">Kembali</button>
                        </router-link>
                        <router-link to="/ListSupplierView">
                            <button type="button" class="btn btn-primary">Tambah</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </article>
        <FooterSinau />
    </body>
</template>
<script>
    import FooterSinau from '../components/FooterSinau.vue'
    import HeaderSinau from '../components/HeaderSinau.vue'

    export default {
        components: {
            FooterSinau,
            HeaderSinau
        }
    }
</script>
<style scoped>
    body {
        background-color: #F5EFE6;
    }

    .AddPage {
        height: 100vh;
        width: 100%;
        align-items: center;
        margin-top: -100px;
    }

    .AddForm {
        width: 60vw;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        border-radius: 2px;
    }

    .add {
        background-color: #B4CDE6;
        border-radius: 2px;
        font-size: 18px;
        color: #083AA9;
        font-weight: 500;
    }
</style>