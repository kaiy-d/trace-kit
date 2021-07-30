import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TRCButton.css'

export default class TRCButton extends Component {

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    get link() {
        let val = '#button'
        if (this.props.link) {
            val = this.props.link
        }
        return val
    }

    onClick(e) {
        if (this.link !== '#button' && ! this.props.onClick) {
            return
        }

        e.preventDefault()
        if (this.props.onClick && !this.props.disabled) {
            this.props.onClick(e)
        }
    }

    render() {
        var buttonClass = this.props.className ? this.props.className + ' ' : ''
        buttonClass += this.props.ghost ? 'ghost ' : ''
        buttonClass += this.props.secondary ? 'secondary ' : ''
        buttonClass += this.props.disabled ? 'disabled ' : ''
        buttonClass += this.props.whoops ? 'whoops ' : ''
        buttonClass += this.props.full ? 'full ' : ''

        var extras = {}
        if (this.props.id) {
            extras['id'] = this.props.id
        }

        return (
            <a
                {...extras}
                href={this.link}
                className={`TRCButton ${buttonClass}`}
                onClick={this.onClick}>
                {this.props.children}
            </a>
        )
    }
}

TRCButton.propTypes = {
    className: PropTypes.string,
    ghost: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
    whoops: PropTypes.bool,
    full: PropTypes.bool,
    onClick: PropTypes.func,
}

