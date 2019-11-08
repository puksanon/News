<template>
    <div class="register">
        <div class="container">
                <div class="title">
                   <h2>Register</h2>
                   <hr>
               </div>
           <div class="card">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>

                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>

                        <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">tel</label>
                        <input type="text" class="form-control" id="inputZip">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlFile1">Select Your Profile Picture</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterCard"
}
</script>

<style scoped>
    .card{
        padding: 20px;
        margin-top: 30px;
    }

    .container{
        margin-top: 50px;
    }
</style>