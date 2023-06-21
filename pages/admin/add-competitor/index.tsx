import Head from "next/head";
import DashboardLayout from "../../../components/DashboardLayout";
import Select from "react-select";
import React, { useState } from "react";

export default function addEvent() {
    const [selectedOption, setSelectedOption] = useState(null || String);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    // const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    //     // this.setState({ selectedOption }, () =>
    //     //     console.log(`Option selected:`, this.state.selectedOption)
    //     // );
    //     setSelectedOption({ selectedOption: event.target });

    //     console.log(selectedOption);
        
    // };
    return (
        <>
            <Head>
                <title>Add Competitor | Fies Buddy</title>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0091ff" />
            </Head>
            <DashboardLayout>
                <div className="profile">
                    <h2 className="heading">Add Competitor</h2>

                    <form className="form">

                        <div className="form_row">
                            <div className="form_col">
                                {/* Name */}
                                <div className="form_group">
                                    <label htmlFor="name">Name*</label>
                                    <span className="icon_group">
                                        <input
                                            type="text"
                                            id="name"
                                            className="input form-control"
                                            name="name"
                                            placeholder="Full Name"
                                            required
                                        />
                                        <span className="icon icon-frameuser"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="form_col">
                                {/* EMAIL */}
                                <div className="form_group">
                                    <label htmlFor="email">Select*</label>
                                    <span className="icon_group">
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                            className="select-dropdown"
                                            classNamePrefix="inner-select"
                                        />
                                        <span className="icon icon-email"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="form_col">
                                {/* EMAIL */}
                                <div className="form_group">
                                    <label htmlFor="email">Date*</label>
                                    <span className="icon_group">
                                        <input
                                            type="date"
                                            id=""
                                            className="input form-control"
                                            name=""
                                            required
                                        />
                                        <span className="icon icon-email"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="form_col">
                                {/* Address */}
                                <div className="form_group">
                                    <label htmlFor="name">Address*</label>
                                    <span className="icon_group">
                                        <input
                                            type="text"
                                            id="name"
                                            className="input form-control"
                                            name="name"
                                            placeholder="Address"
                                            required
                                        />
                                        <span className="icon icon-frameuser"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Say something* */}
                        <div className="form_group">
                            <span className="icon_group">
                                <textarea name="" id="" className="input form-control" placeholder="Say something*"></textarea>
                            </span>
                        </div>

                        {/* SUBMIT / REGISTER */}
                        <div className="form_group">
                            <button
                                id="register"
                                type="submit"
                                className="btn btn_primary"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </DashboardLayout>
        </>
    )
}