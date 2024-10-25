import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="rounded-sm bg-white w-5/6 max-w-[70%] mx-auto h-fit md:h-4/6 mt-7 shadow-lg p-8 mb-4">
  <div class='flex items-center gap-2 flex-col md:flex-row md:gap-4'>
    <img src='./src/assets/logo.png' alt='Superate logo' height='70px' width='70px'/>
    <h1 class='text-center lg:text-pretty capitalize font-black tracking-wide text-xl md:text-3xl sm:text-2xl lg:text-4xl text-green-500'>Welcome to the Superate Support page</h1>
  </div>
    <div class='flex items-start gap-4 mt-10 justify-center flex-col md:flex-row'>
        <div class='w-full md:w-1/2 h-[300px] md:shrink-0'>
            <img src='./src/assets/page-image.svg' class='h-full w-full object-cover'/>
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
