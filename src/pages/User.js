import AccountContent from '../components/AccountContent'
import AccountHeader from '../components/AccountHeader'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

const account = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
]

const User = () => {
  const { isLogin } = useSelector((state) => state.loginReducer)
  if (!isLogin) {
    return <Redirect to="/" />
  }

  return (
    <main className="main bg-dark">
      <AccountHeader />
      <h2 className="sr-only">Accounts</h2>
      {account.map(({ title, amount, description }) => (
        <AccountContent
          key={title}
          title={title}
          amount={amount}
          description={description}
        />
      ))}
    </main>
  )
}

export default User
