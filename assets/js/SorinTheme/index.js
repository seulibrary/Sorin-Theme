import React, { Component } from "react"
import "./styles.scss"

export default class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <a href="/" className="logoTree">
                    <img src="/images/logoTree.svg" alt="Sorin by St. Edward's University Munday Library" />
                </a>

                <div className="logoText">
                    <a href="/" className="logoSorin">
                        <img src="/images/logoNewSorin.svg" alt="Sorin by St. Edward's University Munday Library" />
                    </a>
                    <a href="https://library.stedwards.edu/" className="logoBy" target="_blank">
                        <img src="/images/logoByML.svg" alt="Sorin by St. Edward's University Munday Library" />
                    </a>
                    <a href="https://library.stedwards.edu/" className="logoBy-sm" target="_blank">
                        <img src="/images/logoByML-sm.svg" alt="Sorin by St. Edward's University Munday Library" />
                    </a>
                </div>
            </React.Fragment>
        )
    }
}