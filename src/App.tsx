import Footer from './components/Footer';
import Button from "./components/Button.tsx";
import Icon from "./components/Icon.tsx";

import side_image from './assets/images/illustration-mockups.svg';
import bg_image_desktop from './assets/images/bg-desktop.svg';
import bg_image_mobile from './assets/images/bg-mobile.svg';
import logo from './assets/images/logo.svg';

import { CgFacebook } from 'react-icons/cg';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { SiInstagram } from 'react-icons/si';

import './App.css';

function App() {
  const btn_content = {
    text: {
      value: "Register",
      size: "",
      color: "Violet",
    },
    bg_color: "white",
    rounded: true,
    round_size: "2xl",
    shadow_size: "2xl",
    onClick: () => {
      console.log("")
    }
  }
  const facebook_icon = {
    Icon: CgFacebook,
    rounded: true,
    color: "white",
  }
  const twitter_icon = {
    Icon: TfiTwitterAlt,
    rounded: true,
    color: "white",
  }
  const instagram_icon = {
    Icon: SiInstagram,
    rounded: true,
    color: "white",
  }

  const icons = [facebook_icon, twitter_icon, instagram_icon];

  return (
    <>
      <div 
        className='
          flex
          flex-col
          justify-center
          items-center
          relative
          bg-Violet
          w-screen
          h-screen
          -z-1
        '>
        {/* bg image */}
        <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-full
              -z-1
            ">
            <img
                className="
                  w-full
                  h-full
                "
                alt="bg"
                src={bg_image_desktop}
                srcSet={`${bg_image_desktop} w-1440, ${bg_image_mobile} w-600`}
            />
        </div>
        {/* top left brand icon */}
        <div
          className='
            absolute
            top-10
            left-20
            w-40
            h-20
          '>
          <img
            className="
              w-full
              h-full
            "
            alt="huddle brand icon"
            src={logo}
          />
        </div>
        {/* main container */}
        <main
            className="
              m-auto
              z-1
              flex
              flex-row
              items-center
              justify-center
              w-fit
              h-fit
            ">
          {/* side image */}
          <div>
            <img className="" alt="side image" src={side_image}/>
          </div>
          {/* right side main content */}
          <div>
           <div>
             Build The Community Your Fans Will Love

             Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
             Create connections with your users as you engage in genuine discussion.
           </div>
            <Button {...btn_content} />
          </div>
        </main>
        {/* bottom right icons */}
        <div
          className='
            flex
            space-x-4
          '>
          {icons.map((value, index) => {
            return <Icon {...value} key={index} />
          })}
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  )
}

export default App;