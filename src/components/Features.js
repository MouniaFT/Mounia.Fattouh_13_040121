import iconChat from '../images/icon-chat.png'
import iconMoney from '../images/icon-money.png'
import iconSecurity from '../images/icon-security.png'
import FeatureItem from './FeatureItem'

const content = [
  {
    icon: iconChat,
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: iconMoney,
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: iconSecurity,
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {content.map(({ icon, title, text }) => (
        <FeatureItem key={title} icon={icon} title={title} text={text} />
      ))}
    </section>
  )
}

export default Features
