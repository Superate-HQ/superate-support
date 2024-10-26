import "./style.css";
import SuperateLogo from "./assets/logo.svg";
import Banner from "./assets/page-image.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="w-5/6 max-w-[70%] mx-auto h-fit mt-7 p-8 sm:!mb-7 md:mb-0">
  <div class='flex items-center justify-center gap-2 flex-col md:flex-row md:gap-4'>
    <img src='${SuperateLogo}' alt='Superate logo' height='65px' width='65px'/>
    <h1 class='text-center lg:text-pretty capitalize font-black tracking-wide text-2xl md:text-3xl lg:text-4xl text-green-500'>Welcome to the Superate Support page</h1>
  </div>
    <div class='flex items-start gap-4 mt-10 justify-center flex-col md:flex-row'>
        <div class='w-full md:w-1/2 h-[200px] md:h-[300px] md:shrink-0'>
            <img src='${Banner}' class='h-full w-full object-cover'/>
        </div>
        <div class='flex flex-col '>
        <p class='text-light-gray'>We are here to help you! If you encounter any issues, have any questions, or need assistance with the app, feel free to reach out to us. </p>
        <p class='text-light-gray mt-2'>You can contact us with the email below or click the button at the bottom-right side of your screen:</p>
        <strong class='mt-3 text-green-500 font-bold text-xl'>support@superate.app</strong>
        <p class='text-light-gray mt-4'>We&apos;ll do our best to get back to you as soon as possible!</p>
        </div>
    </div>
  </div>
`;
