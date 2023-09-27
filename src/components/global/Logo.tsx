import homeLogo from '../../assets/svg/logo.svg';
import backHomeLogo from '../../assets/svg/backHome.svg';
import { Link } from 'react-router-dom';
interface Props {
  isHome?: Boolean;
  style?: Object;
}
const Logo = ({ isHome, style }: Props) => {
  return (
    <h1 style={style}>
      <Link to='/'>
        {isHome ? (
          <img src={homeLogo} alt='home-logo' style={{ width: '100%' }} />
        ) : (
          <img src={backHomeLogo} alt='back-home-logo' style={{ width: '100%' }} />
        )}
      </Link>
    </h1>
  );
};
export default Logo;
