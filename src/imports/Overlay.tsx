import svgPaths from "./svg-bu7ouyxz80";
import img from "figma:asset/0f50b175a213a2cdacf2f456aac7c5093433baea.png";

function CloseButton() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[31px]" data-name="Close Button">
      <div className="absolute inset-[-3.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <g id="Close Button">
            <path d={svgPaths.p2c1d4400} id="Vector 312" stroke="var(--stroke-0, black)" strokeWidth="3.01894" />
            <path d={svgPaths.p19b1b580} id="Vector 313" stroke="var(--stroke-0, black)" strokeWidth="3.01894" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-black text-nowrap tracking-[-0.56px]">
        <p className="leading-[1.3] whitespace-pre">Полусферы</p>
      </div>
      <CloseButton />
    </div>
  );
}

function Info() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre">Стиль 017</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[#007187] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#bd0000] inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%+0.674px)] top-[-0.93px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "78", "--transform-inner-height": "214" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[214.101px] relative w-[77.978px]" data-name="017 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[13.343px] left-[calc(50%-0.001px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[19.631px]">
          <div className="absolute inset-[-62.3%_-42.34%_-70.3%_-42.34%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 32">
              <g filter="url(#filter0_d_3_1746)" id="Vector 311">
                <path d={svgPaths.pe1e5000} stroke="var(--stroke-0, white)" strokeWidth="3.01894" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="31.0357" id="filter0_d_3_1746" width="36.2568" x="4.76837e-07" y="3.57628e-07">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.62272" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_1746" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_1746" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[239.904px]" data-name="Info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre">Стиль 023</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#bd0000] inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%+0.674px)] top-0 translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "78", "--transform-inner-height": "214" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[214.101px] relative w-[77.978px]" data-name="017 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%+0.001px)] top-[-1px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "84", "--transform-inner-height": "230" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[230.331px] relative w-[83.889px]" data-name="017 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Info1 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[239.904px]" data-name="Info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre">Стареющая латунь</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#bd0000] inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%+0.674px)] top-0 translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "78", "--transform-inner-height": "214" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[214.101px] relative w-[77.978px]" data-name="017 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%-1.145px)] top-[-1.65px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "220" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[220.363px] relative w-[80.259px]" data-name="017 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Info2 />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[239.904px]" data-name="Info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre">Цвет</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\\'http://www.w3.org/2000/svg\\\' viewBox=\\\'0 0 37 37\\\' preserveAspectRatio=\\\'none\\\'><g transform=\\\'matrix(1.1328e-16 1.85 -1.85 1.1328e-16 18.5 18.5)\\\'><foreignObject x=\\\'-190\\\' y=\\\'-190\\\' width=\\\'380\\\' height=\\\'380\\\'><div xmlns=\\\'http://www.w3.org/1999/xhtml\\\' style=\\\'background-image: conic-gradient(from 90deg, rgba(189, 0, 0, 1) 0%, rgba(189, 0, 0, 1) 2.4038%, rgba(192, 12, 0, 1) 4.1466%, rgba(195, 25, 0, 1) 5.8894%, rgba(202, 49, 0, 1) 9.375%, rgba(208, 74, 0, 1) 12.861%, rgba(214, 98, 0, 1) 16.346%, rgba(227, 147, 0, 1) 23.317%, rgba(239, 196, 0, 1) 30.288%, rgba(209, 186, 17, 1) 35.036%, rgba(179, 175, 34, 1) 39.784%, rgba(149, 165, 51, 1) 44.531%, rgba(120, 155, 68, 1) 49.279%, rgba(90, 144, 84, 1) 54.026%, rgba(60, 134, 101, 1) 58.774%, rgba(30, 123, 118, 1) 63.522%, rgba(15, 118, 127, 1) 65.895%, rgba(0, 113, 135, 1) 68.269%, rgba(12, 106, 127, 1) 70.252%, rgba(24, 99, 118, 1) 72.236%, rgba(47, 85, 101, 1) 76.202%, rgba(71, 71, 84, 1) 80.168%, rgba(95, 57, 68, 1) 84.135%, rgba(118, 42, 51, 1) 88.101%, rgba(142, 28, 34, 1) 92.067%, rgba(165, 14, 17, 1) 96.034%, rgba(177, 7, 8, 1) 98.017%, rgba(189, 0, 0, 1) 100%); opacity:1; height: 100%; width: 100%;\\\'></div></foreignObject></g></svg>')" }}>
          <div className="absolute h-[21px] left-[calc(50%-0.006px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-0">
            <div className="absolute bottom-0 left-[-1.91px] right-[-1.91px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 21">
                <path d="M1.90909 0V21" id="Vector 308" stroke="var(--stroke-0, white)" strokeWidth="3.81818" />
              </svg>
            </div>
          </div>
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-1/2 top-[calc(50%+0.005px)] translate-x-[-50%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <div className="h-[21px] relative w-0">
                <div className="absolute bottom-0 left-[-1.91px] right-[-1.91px] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 21">
                    <path d="M1.90909 0V21" id="Vector 309" stroke="var(--stroke-0, white)" strokeWidth="3.81818" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Info3 />
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu Items">
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Item">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">+1500₽</p>
          </div>
        </div>
      </div>
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Item">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container1 />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">+1500₽</p>
          </div>
        </div>
      </div>
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Item">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container2 />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">+1500₽</p>
          </div>
        </div>
      </div>
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Item">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container3 />
            <div className="h-[12.192px] relative shrink-0 w-[6.096px]">
              <div className="absolute inset-[-5.8%_-23.2%_-5.8%_-11.6%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
                  <path d={svgPaths.p3142dd00} id="Vector 311" stroke="var(--stroke-0, #4A3113)" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic opacity-60 relative shrink-0 text-[#4a3113] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">+1500₽</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Menu">
      <Header />
      <MenuItems />
    </div>
  );
}

export default function Overlay() {
  return (
    <div className="bg-[#eae0d4] relative shadow-[0px_4px_33.3px_0px_rgba(0,0,0,0.5)] size-full" data-name="Overlay">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[45px] py-[60px] relative size-full">
          <Menu />
        </div>
      </div>
    </div>
  );
}