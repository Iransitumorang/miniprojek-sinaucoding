<template>
    <div class="px-3">
        <table class="table" border="1">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Nama Supplier</th>
                    <th scope="col">No Telp Supplier</th>
                    <th scope="col" class="text-center">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-if="!dataArray">
                    <td colspan="7" class="text-center py-5">
                        <h1>Data Kosong</h1>
                    </td>
                </tr> -->
                <!-- <tr v-else v-for="(data, index) in dataArray" v-bind:key="index"> -->
                <tr>
                    <th scope="row">1</th>
                    <td>Yanjing</td>
                    <td>704</td>
                    <td>100786</td>
                    <td>Comodo</td>
                    <td>082173638949</td>
                    <td>
                        <button type="button" class="btn btn-danger">Hapus</button>
                        <button type="button" class="btn btn-warning">Update</button>
                    </td>
                    <!-- <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td>
                    <td>{{}}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            dataArray: Array
        }
    }
</script>

<style>

</style>