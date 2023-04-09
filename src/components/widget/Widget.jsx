import './widget.scss'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {
    let data

    const amount = 10

    switch (type) {
        case 'user':
            data={
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlineOutlinedIcon className='icon' />
            }
            break;
        case 'order':
            data={
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' />
            }
            break;
        case 'earning':
            data={
                title: 'EARNING',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlinedIcon className='icon' />
            }
            break;
        case 'balance':
            data={
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' />
            }
            break;
    
        default:
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpOutlinedIcon />
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget