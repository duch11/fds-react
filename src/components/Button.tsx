import React from 'react';
import '../../node_modules/dkfds/dist/css/dkfds-virkdk.min.css'

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   visual: 'primary' | 'secondary' | 'tertiary';
   disabled: boolean
   type: 'button' | 'submit' | 'reset'
   label?: string
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, label, visual, className} = props;
    return (
        <button {...props} className={'button button-' + visual + ' ' + className} >
            {children}
            {label}
        </button>
    );
};

Button.defaultProps={
    visual: 'primary',
    disabled: false,
    type: 'button',
    className: ''
}

export {Button}