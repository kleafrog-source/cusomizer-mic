import svgPaths from "./svg-0lu9arj3hb";
import imgDivCaseWithBgImage from "figma:asset/228cedd7991aabf1b5e3e2f54b51ae2ac3b1d48f.png";
import imgSpiderColor from "figma:asset/a898d597b4c772471d53b93e175ff1bb782b2b8d.png";
import imgSpiderColor1 from "figma:asset/2d98014f1a051d1dc340cefb5dd98943f58bf74b.png";
import imgSpiderCream from "figma:asset/77baf745e6edeb1e57864bb13810f591e634713e.png";
import imgSpiderDetails from "figma:asset/b62a50bac8e1dec4edfa5ff61f5ba11aa5fc276a.png";
import img from "figma:asset/e749a72dd93cb56272bcf4d8ae0b3e76e1015f0b.png";
import img1 from "figma:asset/6fe136cd84f8ff458f2d86f42f6749565c8e7952.png";
import img2 from "figma:asset/40692f27a417a22c249b261ab956e1538e70cada.png";
import img3 from "figma:asset/0243a94d70efa85e6ae196653d33e97af0b3652e.png";
import img4 from "figma:asset/a4182827a8d2624c73a693191d077acc14f6f403.png";
import img5 from "figma:asset/f4d7df6efbba9d80a8c0a606be5797e2aa1518bb.png";
import img6 from "figma:asset/0f50b175a213a2cdacf2f456aac7c5093433baea.png";

function DivCaseWithBgImage() {
  return (
    <div className="absolute h-[894.91px] left-[calc(50%+46.5px)] top-[calc(50%-20.545px)] translate-x-[-50%] translate-y-[-50%] w-[744px]" data-name="div-case-with-bg-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDivCaseWithBgImage} />
    </div>
  );
}

function ProductImage() {
  return (
    <div className="[grid-area:1_/_1] h-[459.838px] ml-0 mt-0 relative w-[384.679px]" data-name="Product Image">
      <div className="absolute h-[443.587px] left-[3.05px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[381.632px_443.587px] top-0 w-[381.633px]" data-name="Spider COLOR" style={{ maskImage: `url('${imgSpiderColor}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSpiderColor1} />
      </div>
      <div className="absolute h-[443.587px] left-[3.05px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[381.632px_443.587px] opacity-0 top-0 w-[381.633px]" data-name="Spider Cream" style={{ maskImage: `url('${imgSpiderColor}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSpiderCream} />
      </div>
      <div className="absolute bg-[#2458a6] h-[454px] left-[-8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.047px_5.162px] mask-size-[381.632px_443.587px] mix-blend-multiply opacity-[0.92] top-[-5.16px] w-[397px]" style={{ maskImage: `url('${imgSpiderColor}')` }} />
    </div>
  );
}

function SpiderSegments() {
  return (
    <div className="[grid-area:1_/_1] h-[459.838px] ml-0 mt-0 relative w-[384.679px]" data-name="Spider Segments">
      <div className="absolute h-[429.368px] left-0 top-[30.47px] w-[358.272px]" data-name="SpiderDetails">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSpiderDetails} />
      </div>
    </div>
  );
}

function SpiderBlock() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Spider-block">
      <ProductImage />
      <SpiderSegments />
    </div>
  );
}

function MicBottomPartDiv() {
  return (
    <div className="absolute h-[701.177px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[205px_701.177px] overflow-clip top-0 w-[205px]" data-name="mic-bottom-part-div" style={{ maskImage: `url('${img}')` }}>
      <div className="absolute h-[108.116px] left-0 top-[593.06px] w-[205px]" data-name="bottom-part 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute bg-[#ffea00] h-[120.051px] left-0 mix-blend-multiply top-[593.94px] w-[205px]" data-name="mic-top-bottom-parts-div-for-color-overlay-with-muliply" />
    </div>
  );
}

function MicMidPartDiv() {
  return (
    <div className="absolute h-[701.177px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[205px_701.177px] overflow-clip top-0 w-[205px]" data-name="mic-mid-part-div" style={{ maskImage: `url('${img}')` }}>
      <div className="absolute h-[264.675px] left-[19.13px] top-[329.26px] w-[166.562px]" data-name="mic-body-texture-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="absolute bg-[#f68be3] h-[264.675px] left-[18.95px] mix-blend-multiply top-[329.26px] w-[166.738px]" data-name="mic-body-div-for-color-overlay-with-muliply" />
    </div>
  );
}

function MicTopPartDiv() {
  return (
    <div className="absolute h-[701.177px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[205px_701.177px] overflow-clip top-0 w-[205px]" data-name="mic-top-part-div" style={{ maskImage: `url('${img}')` }}>
      <div className="absolute h-[329.264px] left-0 top-0 w-[205px]" data-name="top-part 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <div className="absolute bg-[#ffea00] h-[329.264px] left-0 mix-blend-multiply top-0 w-[205px]" data-name="mic-top-bottom-parts-div-for-color-overlay-with-muliply" />
    </div>
  );
}

function MicrophoneParts() {
  return (
    <div className="absolute contents left-0 top-0" data-name="microphone-parts">
      <MicBottomPartDiv />
      <MicMidPartDiv />
      <MicTopPartDiv />
    </div>
  );
}

function ProductDisplay() {
  return (
    <div className="absolute bottom-[106px] content-stretch flex h-[936px] items-end justify-between left-[215px] right-[373px]" data-name="Product Display">
      <DivCaseWithBgImage />
      <SpiderBlock />
      <div className="h-[701.177px] overflow-clip relative shrink-0 w-[205px]" data-name="output-microphone-variation-for-color-picker">
        <MicrophoneParts />
        <div className="absolute h-[84.422px] left-[calc(50%+0.088px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-61.079px_-382.269px] mask-size-[205px_701.177px] top-[calc(50%+73.891px)] translate-x-[-50%] translate-y-[-50%] w-[83.018px]" data-name="microphone-shield-badge-image-on-top-z-index" style={{ maskImage: `url('${img}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
        </div>
        <div className="absolute h-[138.129px] left-[33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-32.999px_-10.574px] mask-size-[205px_701.177px] top-[10.57px] w-[137.949px]" data-name="microphone-grill-image-always-on-top-z-index" style={{ maskImage: `url('${img}')` }}>
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img5} />
        </div>
      </div>
    </div>
  );
}

function ProductDisplayContainer() {
  return (
    <div className="absolute h-[1148px] left-[calc(25%+15px)] overflow-clip top-0 w-[1425px]" data-name="Product Display Container">
      <ProductDisplay />
      <div className="absolute bg-[#faf5ef] bottom-0 box-border content-stretch flex gap-[20px] items-center justify-center left-[calc(50%-32.904px)] p-[30px] rounded-tl-[15px] rounded-tr-[15px] translate-x-[-50%]" data-name="Disclaimer Container">
        <div className="relative shrink-0 size-[30px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <path d={svgPaths.p2561a400} fill="var(--fill-0, #F35500)" id="Vector" />
          </svg>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Вид готового изделия может отличаться от предпросмотра</p>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "6.09375", "--transform-inner-height": "12.1875" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <button className="block cursor-pointer h-[12.192px] relative w-[6.096px]">
              <div className="absolute inset-[-5.8%_-23.2%_-5.8%_-11.6%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
                  <path d={svgPaths.p3142dd00} id="Vector 311" stroke="var(--stroke-0, #4A3113)" strokeWidth="2" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-black text-nowrap tracking-[-0.56px]">
        <p className="leading-[1.3] whitespace-pre">Микрофон</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] grow items-start leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Info">
      <p className="relative shrink-0 text-[24px] text-black">Полусферы</p>
      <p className="opacity-60 relative shrink-0 text-[#4a3113] text-[16px] tracking-[-0.16px]">Свой цвет: #FFEA00</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#bd0000] inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%+0.674px)] top-[-0.93px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "77.96875", "--transform-inner-height": "214.09375" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[214.101px] relative w-[77.978px]" data-name="017 1">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img6} />
                  </div>
                  <div className="absolute bg-[#ffea00] inset-0 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
}

function Info1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] grow items-start leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Info">
      <p className="relative shrink-0 text-[24px] text-black">Корпус</p>
      <p className="opacity-60 relative shrink-0 text-[#4a3113] text-[16px] tracking-[-0.16px]">Свой цвет: #F68BE3</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#bd0000] inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%+0.674px)] top-0 translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "77.96875", "--transform-inner-height": "214.09375" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[214.101px] relative w-[77.978px]" data-name="017 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img6} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01109102088958025)+(var(--transform-inner-height)*0.9999384880065918)))] items-center justify-center left-[calc(50%+0.001px)] top-[-1px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.01109102088958025)+(var(--transform-inner-width)*0.9999384880065918)))]" style={{ "--transform-inner-width": "83.875", "--transform-inner-height": "230.328125" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.365deg]">
              <div className="h-[230.331px] relative w-[83.889px]" data-name="017 2">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute h-[150.76%] left-0 max-w-none top-[-50.76%] w-full" src={img6} />
                  </div>
                  <div className="absolute bg-[#f68be3] inset-0 mix-blend-overlay" />
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

function Layer1() {
  return (
    <div className="absolute left-[3.26px] size-[30px] top-[3.75px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2010_948)" id="Layer_1">
          <path d={svgPaths.p2c2dae80} fill="var(--fill-0, #691014)" id="Vector" />
          <path d={svgPaths.p2c768b00} fill="var(--fill-0, #691014)" id="Vector_2" />
          <path d={svgPaths.p20d9c680} fill="var(--fill-0, #691014)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_2010_948">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Info2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] grow items-start leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Info">
      <p className="relative shrink-0 text-[24px] text-black">Шильдик</p>
      <p className="opacity-60 relative shrink-0 text-[#4a3113] text-[16px] tracking-[-0.16px]">Стиль 023</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#e2d5c5] inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures">
          <Layer1 />
        </div>
      </div>
      <Info2 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Option">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container />
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
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Option">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container1 />
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
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Option">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container2 />
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
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Menu">
      <Title />
      <Buttons />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-black text-nowrap tracking-[-0.56px]">
        <p className="leading-[1.3] whitespace-pre">Чемодан</p>
      </div>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute left-[3.26px] size-[30px] top-[3.75px]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2010_931)" id="Layer_1">
          <path d={svgPaths.p2c2dae80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2c768b00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p20d9c680} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_2010_931">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Info3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] grow items-start leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Info">
      <p className="relative shrink-0 text-[24px] text-black">Логотип</p>
      <p className="opacity-60 relative shrink-0 text-[#4a3113] text-[16px] tracking-[-0.16px]">Фирменный СОЮЗ</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#e2d5c5] inset-[12.245%] overflow-clip rounded-[600px]" data-name="Textures">
          <Layer2 />
        </div>
      </div>
      <Info3 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Option">
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

function Menu1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Menu">
      <Title1 />
      <Buttons1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-black text-nowrap tracking-[-0.56px]">
        <p className="leading-[1.3] whitespace-pre">Амортизатор</p>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] grow items-start leading-[1.3] min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Info">
      <p className="relative shrink-0 text-[24px] text-black">Цвет</p>
      <p className="opacity-60 relative shrink-0 text-[#4a3113] text-[16px] tracking-[-0.16px]">Свой цвет: #2458A6</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative rounded-[600px] shrink-0 size-[49px]" data-name="Texture Choose">
        <div aria-hidden="true" className="absolute border-2 border-[#2458a6] border-solid inset-0 pointer-events-none rounded-[600px]" />
        <div className="absolute bg-[#2458a6] inset-[12.245%] rounded-[600px]" data-name="Textures" />
      </div>
      <Info4 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-[#faf5ef] h-[84px] relative shrink-0 w-full" data-name="Menu Option">
        <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[84px] items-center px-[20px] py-[15px] relative w-full">
            <Container4 />
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

function Menu2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Menu">
      <Title2 />
      <Buttons2 />
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="Menu">
      <Menu />
      <Menu1 />
      <Menu2 />
    </div>
  );
}

function PriceContainer() {
  return (
    <div className="bg-[#007187] relative rounded-[15px] shrink-0 w-full" data-name="Price Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center px-[40px] py-[30px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#faf5ef] text-[32px] text-nowrap whitespace-pre">15000₽</p>
          <div className="relative shrink-0 size-[31px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
              <path d={svgPaths.p25b6e10} fill="var(--fill-0, #FAF5EF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CostInfoContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[7.852px] items-start not-italic relative shrink-0 text-nowrap w-full" data-name="Cost Info Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[24px] text-black whitespace-pre">Предварительная стоимость</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#4a3113] text-[16px] whitespace-pre">
        <p className="mb-0">Может измениться в зависимости от компонентов</p>
        <p>или сложности изготовления</p>
      </div>
    </div>
  );
}

function Checkout() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-start px-[10px] py-0 relative shrink-0 w-[425px]" data-name="Checkout">
      <PriceContainer />
      <CostInfoContainer />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#faf5ef] box-border content-stretch flex gap-[15px] items-center justify-center pl-[35px] pr-[32px] py-[11px] relative rounded-[3px] shrink-0 w-[81px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[12.192px] relative w-[6.096px]">
            <div className="absolute inset-[-5.8%_-23.2%_-5.8%_-11.6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
                <path d={svgPaths.p3142dd00} id="Vector 311" stroke="var(--stroke-0, #4A3113)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Назад</p>
    </div>
  );
}

function Menu4() {
  return (
    <div className="absolute bg-[#eae0d4] bottom-0 box-border content-stretch flex flex-col items-start justify-between left-0 px-[45px] py-[60px] top-0 w-[495px]" data-name="Menu">
      <Menu3 />
      <Checkout />
      <Frame23 />
    </div>
  );
}

export default function MainContainerCustomizerV1() {
  return (
    <div className="bg-[#f4e9dc] relative size-full" data-name="Main Container-customizer-v1">
      <ProductDisplayContainer />
      <Menu4 />
    </div>
  );
}