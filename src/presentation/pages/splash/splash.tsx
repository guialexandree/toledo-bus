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
  const busControlSecond = useAnimationControls()

  const sequence = async (): Promise<void> => {
    await peopleContol.start('visible')
    await logoControl.start('visible')
    await busControl.start('route')
    await busControl.start('exit')
    await busControlSecond.start('route')
    await peopleContol.start('exit')
    await busControlSecond.start('exit')
    await logoControl.start('exit')
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
          variants={Animations.busRouteAnimations}
        >
          <Icon iconName={IconName.busLogin} />
        </Animated>
        <Animated
          control={peopleContol}
          variants={Animations.peopleAnimations}
        >
          <Icon iconName={IconName.peopleAwaitingBus} />
        </Animated>
        <Animated
          className={S.busIconSecond}
          control={busControlSecond}
          variants={Animations.busRouteSecondAnimations}
        >
          <Icon iconName={IconName.busLogin} />
        </Animated>
      </section>
    </section>
  )
}

export default Splash
