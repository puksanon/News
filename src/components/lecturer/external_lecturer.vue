<template>
  <div class="lecturer">
        <div class="nav_header">
            <Navbar></Navbar>
        </div>
        <div class="content">
                <div class="section full-height">
                    <div class="absolute-center">
                        <div class="section">
                            <div class="container">
                                <div class="header_title">
                                    <h3>External Lecturer</h3>
                                </div>
                                <div class="btn_class_manu">
                                    <div class="btn_class_card">
                                        <a><router-link class="btn btn-primary" to="/home/external_lecturer/insert_external_lecturer">+ Insert</router-link></a>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <div class="tbl-header ">
                                        <table class="table table-bordered table-hover" cellpadding="0" cellspacing="0" border="0">
                                            <thead>
                                                <tr>
                                                    <th 
                                                        v-for="col in columns" 
                                                        v-bind:todo="col" 
                                                        v-bind:key="col.lecturer_id" 
                                                        v-on:click="sortTable(col)"
                                                        >{{ col }}
                                                    </th>
                                                    <th>Manage</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>    
                                    <div class="tbl-content">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr 
                                                    v-for="row in query_lecturer" 
                                                    v-bind:key="row.lecturer_id">
                                                        <td class="ex_data"
                                                            v-for="col in columns" 
                                                            v-bind:key="col.lecturer_id"
                                                            >{{ row[col] }}
                                                        </td>

                                                        <td>
                                                            <a class="btn btn_choises btn-dark" :href="`/home/external_lecturer/edit/${row.lecturer_id}`">EDIT</a>
                                                            <v-btn class="mr-4 btn_choises" v-on:click="cf_delete_lecturer(row.lecturer_id)">Delete</v-btn>
                                                        </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Confirm to delete..</p>
                    <div class="row">
                        <div class="btn_select">
                            <v-btn class="btn_choise btn_confirm" id="btn_confirm">YES</v-btn>
                            <v-btn class="btn_choise btn_cancel" id="btn_cancel">NO</v-btn>
                        </div>
                    </div>
                 </div>
            </div> 
        </div>
  </div>
</template>

<script>

const Navbar = () => import('@/components/profile/Navbar')
import authHeader from '../../autheader/headers'

export default {
    name:'internal_lecturer',
    components:{
        Navbar
    },
    data (){
        return{
            query_lecturer  :[],
            ascending       : false,
            sortColumn      : '',
            confirm_btn     : false,
        }
    },

    async created() {
        try{
            const res = await this.axios.request({
                method: 'get',
                url: 'http://localhost:5000/lecturer/list/external',
                headers: authHeader()
            }).then(res =>{
                this.query_lecturer = res.data.data
            }).catch(res =>{
                console.error(res)
            })
        }catch(err){
            console.error(err)
        }
    },
    
    methods: {
        "sortTable": function sortTable(col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            const ascending = this.ascending;

            this.query_lecturer.sort(function(a, b) {
                if (a[col] > b[col]) {
                return ascending ? 1 : -1
                } else if (a[col] < b[col]) {
                return ascending ? -1 : 1
                }
                return 0;
            })
        },

        cf_delete_lecturer: function (id) {
            const modal   = document.getElementById("myModal");
            const span    = document.getElementsByClassName("close")[0];
            const btn     = document.getElementById("btn_cancel");
            const btn_cf  = document.getElementById("btn_confirm");
            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
            }

            btn.onclick  = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            btn_cf.onclick = Delete_lecturer => {
                this.Delete_lecturer(id)
            }
        },

        Delete_lecturer: async function(id) {
            try{
                const res = await this.axios.request({
                method: 'delete',
                url: `http://localhost:5000/lecturer/external/${id}`,
                headers: authHeader()
                }).then(res =>{
                    window.alert("Delete lecturer success !!")
                    this.$router.go(this.$router.currentRoute)
                }).catch(res =>{
                    window.alert("Delete lecturer false !!")
                    console.error(res)
                })
            }catch(err){
                console.error(err)
            }
        },
    },

    computed: {
        "columns": function columns() {
            if (this.query_lecturer.length == 0) {
                return [];
            }
            return Object.keys(this.query_lecturer[0])
        }
    },
}
</script>

<style scoped>
    .btn{
        height: 36px;
        min-width: 80.14px;
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    }

    .btn_class_card{
            margin: 10px;
            position: relative;
            float: right;
    }

	.section {
		position: absolute;
		width: 100%;
		display: block;
	}

	.full-height {
		height: 100vh;
	}

	.absolute-center {
		position: absolute;
		top: 35%;
		left: 0;
		width: 100%;
		transform: translateY(-50%);
		z-index: 20;
	}

    .header_title{
        display: block;
        position: relative;
        text-align: center;
    }

    .header_title h3{
        font-weight: bolder;
        font-size: 35px;
    }

    .header_title .card{
        padding: 20px;
        border: 0px solid transparent;
        box-shadow: 4px 4px 7px 1px #00000040;
    }

    .modal {
        display: none; /* Hidden by default */
        position: absolute; /* Stay in place */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 100%;
        max-width: 300px;
        text-align: right;
        top: 30%;
    }

    .modal-content p{
        text-align: center;
    }

    /* The Close Button */
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

    .btn_choise{
        margin: 10px;
    }

    .btn_choises{
        margin: 3px;
    }

    .btn_select{
        margin: auto;
    }

    table{
        width:100%;
        table-layout: fixed;
    }
    
    .tbl-header{
        background-color: rgba(255,255,255,0.3);
    }

    .tbl-content{
        height:300px;
        overflow-x:auto;
        margin-top: 0px;
        border: 1px solid rgba(255,255,255,0.3);
    }

    th{
        padding: 20px 15px;
        text-align: left;
        font-weight: 500;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
        background-color: #8bc34a;
        border-color: #8bc34a; 
    }

    .tbl-content tr{
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        background-color: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    td{
        font-size: 16px;
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
</style>