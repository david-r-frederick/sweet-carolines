import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import YourBaker from './containers/pages/about/YourBaker/YourBaker';
import Contact from './containers/pages/Contact/Contact';
import Gallery from './containers/pages/Gallery/Gallery';
import Home from './containers/pages/home/Home';
import Menu from './containers/pages/Menu/Menu';
import PrivacyPolicy from './containers/pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './containers/pages/about/TermsAndConditions/TermsAndConditions';
import FAQs from './containers/pages/about/FAQs/FAQs';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/terms" component={TermsAndConditions} />
                <Route path="/faqs" component={FAQs} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/contact" component={Contact} />
                <Route path="/your-baker" component={YourBaker} />
                <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
