import React, { Component } from 'react'
import API from "../utils/API";
import SavedResult from "../components/SavedList";
import setAuthToken from "../utils/setAuthToken";
import IncomingRequests from "../components/IncomingRequest";


class IncomingRequest extends Component {
    render() {
        return (
            <div>
                <h1>New Requests</h1>
                <IncomingRequests
                    savedRequests= {this.state.savedRequests}
                    />
            </div>
        )
    }
}

export default IncomingRequest;
