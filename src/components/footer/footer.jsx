import cmedia from './footer.module.css'
import facebook from './../../media/icons/social/facebook.png'
import instagram from './../../media/icons/social/instagram.png'
import whatsapp from './../../media/icons/social/whatsapp.png'
import youtube from './../../media/icons/social/youtube.png'
import telegram from './../../media/icons/social/telegram.png'

const Footer = (props) => {
    //Футер. Отображаем дату и знак копирайта
    var fullDate = new Date();
    var mm = fullDate.getMonth() + 1;
    var dd = fullDate.getDate();
    var year = fullDate.getFullYear();
    return (
        <div className={cmedia.footer}>
            <div className={cmedia.firstBlock}>
                <div className={cmedia.miniAbout}>
                    <h4>About Us</h4>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Advertising placement</a></li>
                    <li><a href="#">Custom prompt</a></li>
                </div>
                <div className={cmedia.miniNav}>
                    <h4>Navigation</h4>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Top</a></li>
                    <li><a href="#">Releases</a></li>
                </div>
                <div className={cmedia.miniHelp}>
                    <h4>Help</h4>
                    <li><a href="#">Report a problem</a></li>
                    <li><a>Support works around the clock</a></li>
                </div>
            </div>
            <div className={cmedia.lastBlock}>
                {/* <div className={cmedia.logos}>
                    <img src={facebook} alt="" />
                    <img src={whatsapp} alt="" />
                    <img src={telegram} alt="" />
                    <img src={instagram} alt="" />
                    <img src={youtube} alt="" />
                </div> */}
                <div className={cmedia.footerLabel}>
                    <p>REDCOLORWINE &copy; {dd} / {mm} / {year}</p>
                </div>
            </div>


        </div>
    )
}

export default Footer;