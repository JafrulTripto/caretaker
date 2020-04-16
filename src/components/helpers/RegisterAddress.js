import React, { Fragment } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';

export default function RegisterAddress(props) {
    const { division, district, upazila } = props.data.formInput;
    const { districts, upazilas } = props.data
    const emptyOptions = [{ label: "Select Division First", value: null, disabled: "yes" }];
    return (
        <Fragment>

            <div className="col-sm-12 col-md-6">
                <div className="form-group">
                    <AsyncSelect
                        value={division ? division : null}
                        placeholder="Select Division..."
                        cacheOptions
                        defaultOptions
                        name="division"
                        loadOptions={props.getAllDivisions}
                        onChange={props.onSelectAddress} />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="form-group">
                    <Select
                        value={district ? district : null}
                        placeholder="Select District..."
                        name="district"
                        isOptionDisabled={(option) => option.disabled === 'yes'}
                        onChange={props.onSelectAddress}
                        options={districts ? districts : emptyOptions} />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="form-group">
                    <Select
                        value={upazila ? upazila : null}
                        placeholder="Select Upazila..."
                        name="upazila"
                        isOptionDisabled={(option) => option.disabled === 'yes'}
                        onChange={props.onSelectAddress}
                        options={upazilas ? upazilas : emptyOptions} />
                </div>
            </div>
        </Fragment>
    )
}
