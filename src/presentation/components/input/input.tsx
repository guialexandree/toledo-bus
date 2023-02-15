import React, { useRef } from 'react'
import S from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string
  placeholder: string
  state: any
  setState: any
}

const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const error = state[`${props.name}Error`]

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState(old => ({ ...old, [event.target.name]: event.target.value }))
  }

  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={S.inputWrap}
      data-status={error ? 'invalid' : 'valid' }
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        data-testid={props.name}
        onChange={handleChange}
        placeholder=" "
      />
      <label
        data-testid={`${props.name}-label`}
        title={error}
        onClick={_ => { inputRef.current.focus() }}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
