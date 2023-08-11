import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
// import FileSaver from 'file-saver';
// import Footer from "../components/Footer";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  // const saveFile = () => {
  //     FileSaver.saveAs(
  //       process.env.REACT_APP_CLIENT_URL + "E:\Shreyreactapp\client\public\Shrey_Khandelwal 2 Resume.pdf",
  //       "MyCV.pdf"
  //     );
  // }

  return (
    <div>
      <AnimatePresence>
        {snap.intro && (
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img
                src="./threejs.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET'S <br className="xl:block hidden" /> DO IT.
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-white text-base">
                  Create your unique and exclusive shirt with out brand-new 3D
                  customization tool.<strong>Unleash your Imagination</strong>{" "}
                  and define your own style.
                </p>
                <div className="flex flex-wrap gap-3">
                  <CustomButton
                    type="filled"
                    title="Customize it"
                    handleClick={() => (state.intro = false)}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  />
                  <a href="resume.pdf" target="_blank">
                    <CustomButton
                      type="filled"
                      title="Download Resume"
                      // handleClick= {saveFile}
                      customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
      {/*<Footer></Footer>*/}
    </div>
  );
};

export default Home;
