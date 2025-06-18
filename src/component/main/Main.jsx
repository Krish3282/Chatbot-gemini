import '../main/Main.css'
import {assets} from '../../assets/assets'

const Main = () => {
  // const apiKey = "AIzaSyCl3zhFPve7O4AyaI7MKtJHcCetmIKnmqE";
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-contatiner">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How Can I Help You Today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful palces to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
            
          </div>

          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
          </div>

        </div>
        {/*  */}
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
            <p className='bottom-info'>
              Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
      </div>

    </div>
  )
}

export default Main
