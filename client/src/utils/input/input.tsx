import React, { CSSProperties } from 'react';
import './input.less';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

  className?: string;
  id?: string;
  label?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: CSSProperties;
  type: string;
  value: string;
  setValue: (arg:any) => void;
 }


const Input = (props:InputProps) => {
    return (
        <input onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};

export default Input;