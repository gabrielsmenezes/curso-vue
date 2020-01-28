<template>
  <div id="tabela" class="col">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            #ID
                        </th>
                        <th>
                            Nome
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="pessoa in pessoas">
                        <td>
                            {{pessoa.id}}
                        </td>
                        <td>
                            {{pessoa.nome}}
                        </td>
                    </tr>
                </tbody>
            </table>
</template>

<script>
export default {
    props:{
        pessoas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>