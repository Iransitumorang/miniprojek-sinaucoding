<template>
    <div class="px-3">
        <table class="table" border="1">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Supplier</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">No Telp</th>
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
                    <td>Apple</td>
                    <td>Castle Street</td>
                    <td>082173638949</td>
                    <td>
                        <button type="button" class="btn btn-danger">Hapus</button>
                        <router-link to="/UpdateSupplierView">
                            <button type="button" class="btn btn-warning">Update</button>
                        </router-link>
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