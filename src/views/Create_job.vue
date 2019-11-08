<template>
    <div class="create_job_form">
        <Navbar></Navbar>
        <div class="container">
            <div class="title">
                <h2>Create Job</h2>
                <hr>
            </div>
            <div class="card">
                <form action="">
                    <div class="form-group">
                        <label for="inputAddress">Topic</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                    <div class="form-group">
                        <label for="inputAddress">Company name</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>

                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Position</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Salary</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="inputEmail4">main skill</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputPassword4">sub skill</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputPassword4">other</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="inputState">Job type</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                    </div>

                     <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Elements/Navbar.vue";
export default {
    name:"cteate_job",
    components:{
        Navbar
    }
}
</script>

<style scoped>
    .card{
        padding: 20px;
        margin: 30px;
    }

    .container{
        margin-top: 30px;
    }
</style>