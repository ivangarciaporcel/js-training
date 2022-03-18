import React, {Component} from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import LoadingBar from "react-redux-loading";
import TweetPage from "./TweetPage";
// import Dashboard from "./Dashboard";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar/>
                {
                    this.props.loading === true
                        ? null
                        : <TweetPage match={{params: {id: 'xi3ca2jcfvpa0i3t4m7ag'}}}/>
                        // : <Dashboard/>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)