import Nav from '../Nav';
import Footer from '../Footer';

const Mainlayout = ({children}) => {
    return (
        <div>
            <div><Nav/></div>
            <div>{children}</div>
            <div><Footer/></div>
        </div>
    );
};

export default Mainlayout;