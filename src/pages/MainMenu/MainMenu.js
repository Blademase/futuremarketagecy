import './MainMenu.css';
import MentorImage from "../../components/images/mentor 2.png"
import Header from '../../components/Header/Header';
import Center from '../../components/Center/Center';
import PercentQuantity from '../../components/Percent&Quantity/PercentQuantity';
import Test from '../../components/Test';

const height = window.innerHeight;
console.log(height);
function MainMenu() {
  return (
    <div id="MainMenu">
 
    <Header/>
    <Center/>
    <PercentQuantity/>
    
        <div id="MentorImage">
        <img src={MentorImage}/>
        
      </div>

    </div>
  );
}

export default MainMenu;
