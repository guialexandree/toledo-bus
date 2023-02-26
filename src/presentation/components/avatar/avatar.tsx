import React from 'react'
import S from './avatar-styles.scss'

type AvatarProps = {
  image: string
  size?: number
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({
  size = 48,
  className,
  image
}) => {
  return (
    <img
      className={[S.avatarWrap, className].join(' ')}
      src={image}
      alt='Foto de perfil do usuário'
      height={size}
    />
  )
}

export default Avatar
