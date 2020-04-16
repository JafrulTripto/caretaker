import React, { Component } from 'react'
import axios from 'axios'
import RegisterAddress from '../helpers/RegisterAddress';


export default class RegisterHouse extends Component {

    state = {
        formInput: {
            houseName: '',
            floorCount: null,
            flatCount: null,
            houseNo: '',
            street: '',
            areaName: '',
            division: '',
            district: '',
            upazila: ''
        },
        formErrors: {
            houseName: '',
            floorCount: null,
            flatCount: null,
            houseNo: '',
            street: '',
            areaName: '',
            division: '',
            district: '',
            upazila: ''
        },
        divisions: '',
        districts: '',
        upazilas: '',
    }



    getAllDivisions = (input, callback) => {
        axios.get('http://household.test/api/getAllDivisions').then(response => {
            let data = this.structureSelectOptions(response.data);
            callback(this.structureSelectOptions(response.data));
            this.setState({ ...this.state, divisions: data });
        }).catch(err => {
            console.log(err);
        })
    }

    getSelectedDistricts = () => {
        axios.post(`http://household.test/api/getSelectedDistricts?division_id=${this.state.formInput.division.value}`).then(response => {
            let data = this.structureSelectOptions(response.data);
            this.structureSelectOptions(response.data);
            this.setState({ ...this.state, districts: data });
        }).catch(err => {
            console.log(err);
        });
    }
    getSelectedUpazilas = () => {
        console.log(this.state.formInput.district)
        axios.post(`http://household.test/api/getSelectedUpazilas?district_id=${this.state.formInput.district.value}`).then(response => {
            let data = this.structureSelectOptions(response.data);
            this.structureSelectOptions(response.data);
            this.setState({ ...this.state, upazilas: data });
        }).catch(err => {
            console.log(err);
        });
    }

    structureSelectOptions = (data) => {
        let options = [];
        data.forEach(function (element) {
            let temp_division = {
                value: element.id,
                label: element.name
            }
            options.push(temp_division)
        });

        return options;
    }
    onSelectAddress = async (selectedOption, action) => {
        console.log(action)


        switch (action.name) {
            case 'division':
                let updatedDistrict = { ...this.state.formInput, district: null, upazila: null }
                await this.setState({ ...this.state, formInput: updatedDistrict });
                break;
            case 'district':
                let updatedUpazila = { ...this.state.formInput, upazila: null }
                await this.setState({ ...this.state, formInput: updatedUpazila });
                break
            default:
                break;
        }

        let updatedValue = { ...this.state.formInput, [action.name]: selectedOption };
        await this.setState({ ...this.state, formInput: updatedValue }, () => {
            switch (action.name) {
                case 'division':
                    this.getSelectedDistricts();
                    break;
                case 'district':
                    this.getSelectedUpazilas();
                    break
                default:
                    break;
            }

        });
    }
    onSelectDistrict = async (selectedOption) => {
        let updatedUpazila = { ...this.state.formInput, upazila: null }
        await this.setState({ ...this.state, formInput: updatedUpazila });
        let updatedValue = { ...this.state.formInput, district: selectedOption };
        await this.setState({ ...this.state, formInput: updatedValue }, () => {
            this.getSelectedUpazilas();
        });
    }
    onSelectUpazila = (selectedOption) => {

        let updatedValue = { ...this.state.formInput, upazila: selectedOption };
        this.setState({ ...this.state, formInput: updatedValue })
    }


    componentDidMount() {
        // this.getAllDivisions();
    }

    render() {
        console.log(this.state.formInput)
        //console.log(this.getAllDivisions)

        const { formErrors } = this.state;
        return (
            <div className="modal fade" id="modal-lg">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">House Registration</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className="form-control"
                                                id="houseName"
                                                placeholder="Enter Full Name"
                                                onChange={this.handleChange}
                                                aria-describedby="houseNameHelp"
                                                name="houseName" />
                                        </div>

                                    </div>
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className="form-control"
                                                id="floorCount"
                                                placeholder="Enter Full Name"
                                                onChange={this.handleChange}
                                                aria-describedby="floorCountHelp"
                                                name="floorCount" />
                                        </div>

                                    </div>
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className="form-control"
                                                id="flatCount"
                                                placeholder="Enter Email"
                                                onChange={this.handleChange}
                                                aria-describedby="flatCountHelp"
                                                name="flatCount" />
                                        </div>

                                    </div>
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className="form-control"
                                                id="houseNo"
                                                placeholder="Enter House Number"
                                                onChange={this.handleChange}
                                                name="houseNo" />
                                        </div>

                                    </div>
                                    {/* <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className={formErrors.phone.length > 0 ? "form-control is-invalid" : "form-control"}
                                                id="phone"
                                                placeholder="Enter Phone Number"
                                                onChange={this.handleChange}
                                                aria-describedby="phoneHelp"
                                                name="phone" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-phone" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className="form-control"
                                                id="street"
                                                placeholder="Enter Street Number/Name"
                                                onChange={this.handleChange}
                                                name="street" />
                                        </div>
                                    </div>
                                    <RegisterAddress
                                        onSelectAddress={this.onSelectAddress}
                                        data={this.state}
                                        getAllDivisions={this.getAllDivisions}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>

        )
    }
}
