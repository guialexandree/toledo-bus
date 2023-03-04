import React from 'react'
import S from './form-styles.scss'

type FormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  className?: string
  children: Array<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>>
}

const Form: React.FC<FormProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <form {...props} className={[S.formWrap, className].join(' ')} >
      {children}
    </form>
  )
}

export default Form
