<template>
    <div>
        <HeaderSinau />
        <article class="d-flex justify-content-center AddPage">
            <div class="AddForm">
                <div class="add py-2 ps-3">Update Barang</div>
                <div class="p-3">
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Nama Barang</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3" placeholder="Masukkan Nama Barang">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Harga Barang</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword3" placeholder="Masukkan Harga Barang">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Stok Barang</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3" placeholder="Masukkan Jumlah Stok Barang">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Supplier Barang</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword3" placeholder="Masukkan Data Supplier">
                        </div>
                    </div> <hr />
                    <div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary">Kembali</button>
                        <button type="button" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </article>
        <FooterSinau />
    </div>
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