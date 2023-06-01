import Footer from './components/Footer';
import Button from "./components/Button.tsx";
import Icon from "./components/Icon.tsx";
import Card from "./components/Card.tsx";

import side_image from './assets/images/illustration-mockups.svg';
import bg_image_desktop from './assets/images/bg-desktop.svg';
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
      hover: "white",
    },
    bg_color: "white",
    hover_color: "Soft-Magenta",
    rounded: true,
    round_size: "2xl",
    shadow_size: "2xl",
    onClick: () => {
      console.log("it works!!")
    }
  }
  const facebook_icon = {
    Icon: CgFacebook,
    rounded: true,
    color: "white",
    hover: "Violet",
  }
  const twitter_icon = {
    Icon: TfiTwitterAlt,
    rounded: true,
    color: "white",
    hover: "Violet",
  }
  const instagram_icon = {
    Icon: SiInstagram,
    rounded: true,
    color: "white",
    hover: "Violet",
  }
  const icons = [facebook_icon, twitter_icon, instagram_icon];
  const card_content = {
    title: {
      text: "Build The Community Your Fans Will Love",
      size: "4xl",
      color: "white",
    },
    description: {
      text: "Huddle re-imagines the way we build communities. You have a voice, but so does your audience.\n" +
        "Create connections with your users as you engage in genuine discussion.",
      size: "sm",
      color: "white"
    },
  };

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
            sm:w-fit
            sm:h-full
            h-fit
            w-full
            -z-1
          ">
          <img
            className="
              w-full
              h-full
              mobile
            "
            alt="bg"
            src={bg_image_desktop}
          />
      </div>
        {/* top left brand icon */}
        <div
          className='
            sm:absolute
            sm:top-10
            sm:left-40
            w-40
            h-20
            flex
            ml-8
            self-start
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
            z-1
            flex
            sm:flex-row
            flex-col
            items-center
            justify-center
            sm:text-start
            text-center
            w-fit
            h-fit
            sm:space-x-8
            sm:absolute
            mx-8
            sm:right-40
            sm:left-40
            sm:space-y-0
            space-y-6
            m-auto
          ">
          {/* side image */}
          <div className="flex-2 h-full">
            <img className="w-full h-full" alt="side image" src={side_image}/>
          </div>
          {/* right side main content */}
          <div
            className="
              flex-1
              flex
              flex-col
              justify-center
              sm:items-start
              items-center
              space-y-6
            ">
            <Card {...card_content}/>
            <Button {...btn_content} />
          </div>
        </main>
        {/* bottom right icons */}
        <div
          className='
            sl:my-0
            mb-12
            flex
            space-x-4
            sm:absolute
            sm:right-40
            sm:bottom-10
          '>
          {icons.map((value, index) => {
            return <Icon {...value} key={index} />
          })}
        </div>
        {/* footer */}
        <div
          className="
            absolute
            bottom-0
          ">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;