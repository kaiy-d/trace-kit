import React, { Component } from 'react'

import './TRCInput.css'
import './TRCButton.css'

export default class TRCInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value ? this.props.value : '',
            isValid: true,
            isValidMessage: ''
        }
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value && this.state.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    onFocus(e) {
        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }
    
    onBlur(e) {
        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
    }

    onKeyDown(e) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e)
        }
    }

    onChange(e) {
        var val = e.currentTarget.value
        var error = this.validate(val)
        this.setState({
            value: val,
            isValid: !error,
            isValidMessage: error
        })
        if (this.props.onChange) {
            
            this.props.onChange(val, error, e)
        }
    }

    validate(value) {
        var error = null
        if (this.props.validate) {
            error = this.props.validate(value)
        }
        return error
    }

    render() {
        var child = null
        if (this.props.type === 'select') {
            child = this.renderSelect()
        }
        else if (this.props.type === 'checkbox') {
            child =  this.renderCheckbox()
        }
        else {
            child = this.renderInput()
        }


        var containerClass = `TRCInput ${this.props.className ? this.props.className : ''}`
        if (!this.state.isValid) {
            containerClass += ' invalid'
        }
        if (this.props.full) {
            containerClass += ' full'
        }

        return (
            <div className={containerClass}>
                { child }
                { !this.state.isValid && (
                    <span className="error">
                        {this.state.isValidMessage}
                    </span>
                )}
            </div>
        )
    }

    renderSelect() {
        var val = ''
        var extra = { className: 'trc-input' }
        if (this.props.id) {
            extra['id'] = this.props.id
        }
        if (!this.state.isValid) {
            extra.className += ' invalid'
        }
        if (this.state.value) {
            val = this.state.value
        }

        var i = 0
        var opts = this.props.options.map((opt) => {
            i ++
            if (opt.title) {
                return (<option key={`trc-input-opt-${i}${opt.value}`} value={opt.value}>{opt.title}</option>)
            } else {
                return (<option key={`trc-input-opt-${i}${opt}`} value={opt}>{opt}</option>)
            }
        })

        return (
            <div>
                <select 
                    { ...extra }
                    onChange={this.onChange}
                    value={val}>
                    { opts }
                </select>
                { this.props.error && (
                    <span className="error">{this.props.error}</span>
                )}
            </div>
        )
    }

    renderInput() {
        var type = this.props.type ? this.props.type : 'text'
        var val = ''
        var extra = { className: 'trc-input' }
        if (this.props.id) {
            extra['id'] = this.props.id
        }
        if (this.props.disabled) {
            extra['disabled'] = 'disabled'
        }
        if (this.props.inputId) {
            extra['id'] = this.props.inputId
        }
        if (!this.state.isValid || this.props.error) {
            extra.className += ' invalid'
        }
        if (this.state.value) {
            val = this.state.value
        }
        if (this.props.placeholder) {
            extra.placeholder = this.props.placeholder
        }
        if (this.props.className) {
            extra.className += ' ' + this.props.className + ' '
        }
        if (this.props.type === 'submit') {
            extra.className += ' trace-input'
        }
        if (this.props.autoFocus) {
            extra.ref = el => el && el.focus()
        }

        return (
            <div>
                <input 
                    { ...extra }
                    type={type} 
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
                    value={val}
                />
                { this.props.error && (
                    <span className="error">{this.props.error}</span>
                )}
            </div>
        )
    }

    renderCheckbox() {

    }
    
}

export const ValidateInteger = (val) => {
    var regex = /^\d+?$/
    var res = regex.test(val)
    if (res) {
        return null
    }
    return 'Must be an integer.'
}

export const ValidateBool = (val) => {
    if (val === 'True' || val === 'TRUE' || val === 'true' || val === '1') {
        return null
    }
    if (val === 'False' || val === 'FALSE' || val === 'false' || val === '0') {
        return null
    }
    return 'Must be a boolean value.'
}

export const ValidateNumber = (val) => {
    var regex = /^[\d\.]+?$/   // eslint-disable-line no-useless-escape
    var res = regex.test(val)
    if (res) {
        return null
    }
    return 'Must be a number'
}

export const ValidateNotEmpty = (val) => {
    if (val.length > 0) {
        return null
    }
    return 'Value is requrited'
}

export const ValidateLength = (val, length) => {
    if (val.length >= length) {
        return null
    }
    return `Must be at least ${length} characters`
}
