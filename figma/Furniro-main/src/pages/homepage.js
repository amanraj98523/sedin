import "../styles/homepage.css";
import { Link } from "react-router-dom";
import dining from "../images/Home/Dining.png";
import bedroom from "../images/Home/Bedrom.png";
import living from "../images/Home/Living.png";

function HomePage() {
    return (
        <div>
        <div className="banner_img">
            <div className="hero_box">
                <div className="sub_hero_box">
                    <span>New Arrival</span> <br />
                    <span className="sub_hero_box_main_text">
                    Discover Our <br /> New Collection
                    </span>
                    <br />
                    <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s.
                    </span>
                    <div className="sub_hero_box_button">
                    <Link to="/">buy now</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="browse_range_div">
            <span className="browse_range_div_name">browse the range</span>
            <span className="browse_range_div_sentence">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>

            <div className="browse_range_div_main_card">
            <div className="browse_range_div_card">
                <img alt="" className="browse_range_div_card" src={dining} />
                <span className="browse_range_div_card_name">dining</span>
            </div>
            <div className="browse_range_div_card">
                <img alt="" className="browse_range_div_card" src={living} />
                <span className="browse_range_div_card_name">living</span>
            </div>
            <div className="browse_range_div_card">
                <img alt="" className="browse_range_div_card" src={bedroom} />
                <span className="browse_range_div_card_name">bedroom</span>
            </div>
            </div>
        </div>
        <div className="gallery_div">

        </div>
        </div>
    );
}

export default HomePage;
