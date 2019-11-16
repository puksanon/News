<template>
    <div class="edit_lecturer_profile">
     	<div class="nav">
			<Navbar></Navbar>
		</div>
        <div class="content">
			<div class="section full-height">
				<div class="absolute-center">
					<div class="section">
                        <div class="container">
                            <div class="header_title">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-12">
                                            <h5>Insert External Lecturer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <form>
                                    <div class="form-row">

                                        <div class="form-group col-6">
                                            <v-text-field
                                            v-model="first_name"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('first_name')"
                                            label="first name"
                                            data-vv-name="first_name"
                                            required
                                            ></v-text-field>
                                        </div>

                                        <div class="form-group col-6">
                                            <v-text-field
                                            v-model="last_name"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('last_name')"
                                            label="last name"
                                            data-vv-name="last_name"
                                            required
                                            ></v-text-field>
                                        </div>
                                  
                                        <div class="form-group col-6">
                                            <v-text-field
                                            v-model="position"
                                            v-validate="'required|max:20'"
                                            :counter="15"
                                            :error-messages="errors.collect('position')"
                                            label="position"
                                            data-vv-name="position"
                                            required
                                            ></v-text-field>
                                        </div>

                                        <div class="form-group col-6">
                                            <v-text-field
                                            v-model="department"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('department')"
                                            label="department"
                                            data-vv-name="department"
                                            required
                                            ></v-text-field>
                                        </div>

                                        <div class="form-group col-6">
                                            <v-text-field
                                            v-model="faculty"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('faculty')"
                                            label="faculty"
                                            data-vv-name="faculty"
                                            required
                                            ></v-text-field>
                                        </div>
                                  
                                        <div class="form-group col-6">
                                            <v-text-field
                                            v-model="university"
                                            v-validate="'required|max:20'"
                                            :counter="15"
                                            :error-messages="errors.collect('university')"
                                            label="university"
                                            data-vv-name="university"
                                            required
                                            ></v-text-field>
                                        </div>

                                    </div>    
                                    <v-btn class="mr-4" v-on:keyup.enter="edit_lecturer_internal" v-on:click="insert_lecturer_internal()">Confirm</v-btn>
                                </form>
						</div>
					</div>
				</div>
			</div>
        </div> 
    </div  >
</template>

<script>
const Navbar = () => import('@/components/profile/Navbar')
import authHeader from '../../../autheader/headers'

export default {
    name: 'insert_lecturer_internal',
        $_veeValidate: {
            validator: 'new',
        },

        components:{
            Navbar
        },

        data () {
            return {
               query_lecturer : [],
               first_name     : "",
               last_name      : "",
               position       : "",
               department     : "",
               faculty        : "",
               university     : "",
               valid          : true,
               dictionary: {
                attributes: {
                email: 'E-mail Address',
                // custom attributes
                },
                custom: {
                    first_name: {
                        required: () => 'FirstName can not be empty',
                        max: 'The name field may not be greater than 20 characters',
                        // custom messages
                    },
                    last_name: {
                        required: () => 'LastName can not be empty',
                        max: 'The name field may not be greater than 20 characters',
                        // custom messages
                    },
                    position: {
                        required: () => 'Position can not be empty',
                        max: 'The name field may not be greater than 20 characters',
                        // custom messages
                    },
                    department: {
                        required: () => 'Position can not be empty',
                        max: 'The name field may not be greater than 20 characters',
                        // custom messages
                    },
                    faculty: {
                        required: () => 'Position can not be empty',
                        max: 'The name field may not be greater than 20 characters',
                        // custom messages
                    },
                    university: {
                        required: () => 'Position can not be empty',
                        max: 'The name field may not be greater than 20 characters',
                        // custom messages
                    },
                },
            },
            }
        },
     
        mounted () {
            this.$validator.localize('en', this.dictionary)
        },

        methods: {
           async insert_lecturer_internal () {
                const formData = {
                    fname           : this.first_name,
                    lname           : this.last_name,
                    position        : this.position,
                    department      : this.department,
                    faculty         : this.faculty,
                    university      : this.university
                };

                const encodeForm = (data) => {
                    return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
                };

                if( !this.first_name || !this.last_name || !this.position || !this.department || !this.faculty || !this.university ){
                    this.valid = false;
                }

                if( this.first_name > 20 || this.last_name > 20 || this.position > 20 || !this.department > 20 || !this.faculty > 20 || !this.university > 20){
                    this.valid = false;
                }

                if( !this.valid ){
                    this.$validator.validateAll()
                }else{
                    try{
                        return await this.axios.post(
                                'http://localhost:5000/lecturer/external', 
                                encodeForm(formData),
                                { headers: authHeader()
                                })
                                .then(res => {
                                    window.alert("success,Insert Lecturer finish!!")
                                    this.$router.push('/home/external_lecturer')
                                })
                                .catch(err => {
                                    window.alert("False,Can't Insert Lecturer !!")
                                })
                    }catch(err){
                        console.error(err)
                    }
                }
                this.valid = true;
            },
        },
}
</script>

<style scoped>
	.section {
		position: relative;
		width: 100%;
		display: block;
	}

	.full-height {
		height: 100vh;
	}

	.absolute-center {
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		margin-top: 50px;
		transform: translateY(-50%);
		z-index: 20;
	}

    .header_title{
        padding: 20px;
        display: block;
        position: relative;
        text-align: center;
    }
    .header_title h5{
        font-weight: bolder;
    }

    .header_title .card{
        border: 0px solid transparent;
        box-shadow: 4px 4px 7px 1px #00000040;
    }

</style>