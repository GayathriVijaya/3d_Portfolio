import React from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import  Fox  from "../models/Fox";
import useAlert from "../hooks/useAlert";
import  Loader  from "../components/Loader";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Fox_Idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // setCurrentAnimation("Fox_Attack_Paws");
    // setCurrentAnimation("Fox_Attack_Tail");
    // setCurrentAnimation("Fox_Falling");
    // setCurrentAnimation("Fox_Falling_Left");
    // setCurrentAnimation("Fox_Idle");
    // setCurrentAnimation("Fox_Jump");
    // setCurrentAnimation("Fox_Jump_InAir");
    // setCurrentAnimation("Fox_Jump_Pivot_InPlace");
    // setCurrentAnimation("Fox_Run");
    setCurrentAnimation("Fox_Run_InPlace");
    // setCurrentAnimation("Fox_Run_Left");
    // setCurrentAnimation("Fox_Run_Left_InPlace");
    // setCurrentAnimation("Fox_Run_Right");
    // setCurrentAnimation("Fox_Run_Right_InPlace");
    // setCurrentAnimation("Fox_Sit1");
    // setCurrentAnimation("Fox_Sit2_Idle");
    // setCurrentAnimation("Fox_Sit3_StandUp");
    // setCurrentAnimation("Fox_Sit_Idle_Break");
    // setCurrentAnimation("Fox_Sit_No");
    // setCurrentAnimation("Fox_Sit_Yes");
    // setCurrentAnimation("Fox_Somersault");
    // setCurrentAnimation("Fox_Somersault_InPlace");
    // setCurrentAnimation("Fox_Walk");
    // setCurrentAnimation("Fox_Walk_Back");
    // setCurrentAnimation("Fox_Walk_Back_InPlace");
    // setCurrentAnimation("Fox_Walk_InPlace");
    // setCurrentAnimation("Fox_Walk_Left");
    // setCurrentAnimation("Fox_Walk_Left_InPlace");
    // setCurrentAnimation("Fox_Walk_Right");
    // setCurrentAnimation("Fox_Walk_Right_InPlace");


    emailjs
      .send(
        
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gayathri",
          from_email: form.email,
          to_email: "lakshmigayathri887@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("Fox_Idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
          
        }).catch((error)=>{
          setIsLoading(false);
          setCurrentAnimation("Fox_Idle");
          console.log(error);
          showAlert({
                   show: true,
                  text: "I didn't receive your message 😢",
                  type: "danger",
               });
        })
      //   (error) => {
      //     setIsLoading(false);
      //     // console.error(error);
      //     // setCurrentAnimation("idle");

      //     // showAlert({
      //     //   show: true,
      //     //   text: "I didn't receive your message 😢",
      //     //   type: "danger",
      //     // });
      //   }
      // );
  };

  const handleFocus = () => setCurrentAnimation('Fox_Sit_Idle_Break');
  const handleBlur = () => setCurrentAnimation('Fox_Idle');

  return (
    <section className='relative flex lg:flex-row flex-col max-container bg-cover bg-center h-[100vh]'>

      {alert.show && <Alert {...alert} />}
     
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name='name'
              className="input"
              placeholder='Your name Goes Here'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Youremail@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Let me know how can i help you'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

       <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[1, -4, -7]}
              rotation={[-12.5, -0.8, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div> 
    </section>
  );
};

export default Contact;
