import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAnimationControls } from 'framer-motion'
import { Animated, Icon, IconName, Logo } from '@/presentation/components'
import { Animations } from './components'
import S from './splash-styles.scss'

const Splash: React.FC = () => {
  const history = useHistory()
  const peopleContol = useAnimationControls()
  const logoControl = useAnimationControls()
  const busControl = useAnimationControls()

  const sequence = async (): Promise<void> => {
    await peopleContol.start('visible')
    await logoControl.start('visible')
    await busControl.start('route1')
    await busControl.start('exit1')
    await busControl.start('route2')
    await peopleContol.start('exit')
    await busControl.start('route3')
    Promise.resolve()
  }

  useEffect(() => {
    sequence()
      .then(() => { history.replace('/signin') })
  },[])

  return (
    <section className={S.splashWrap}>
      <section className={S.content}>
        <Animated
          control={logoControl}
          variants={Animations.logoAnimations}
        >
          <Logo />
        </Animated>
        <Animated
          className={S.busIcon}
          control={busControl}
          variants={Animations.busAnimations}
        >
          <Icon iconName={IconName.busLogin} />
        </Animated>
        <Animated
          control={peopleContol}
          variants={Animations.peopleAnimations}
        >
          <Icon iconName={IconName.peopleAwaitingBus} />
        </Animated>
      </section>
    </section>
  )
}

export default Splash
