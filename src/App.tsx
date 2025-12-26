import { useState } from 'react';
import svgPaths from "./imports/svg-0lu9arj3hb";
import imgDivCaseWithBgImage from "figma:asset/228cedd7991aabf1b5e3e2f54b51ae2ac3b1d48f.png";
import imgSpiderColor from "figma:asset/a898d597b4c772471d53b93e175ff1bb782b2b8d.png";
import imgSpiderColor1 from "figma:asset/2d98014f1a051d1dc340cefb5dd98943f58bf74b.png";
import imgSpiderCream from "figma:asset/77baf745e6edeb1e57864bb13810f591e634713e.png";
import imgSpiderDetails from "figma:asset/b62a50bac8e1dec4edfa5ff61f5ba11aa5fc276a.png";
import imgMicrophoneMask from "figma:asset/e749a72dd93cb56272bcf4d8ae0b3e76e1015f0b.png";
import imgBottomPreset1 from "figma:asset/6fe136cd84f8ff458f2d86f42f6749565c8e7952.png";
import imgBodyPreset1 from "figma:asset/1b4a2f0c301e1a810028b1be05a8b7e3c16fa93c.png";
import imgTopPreset1 from "figma:asset/0243a94d70efa85e6ae196653d33e97af0b3652e.png";
import imgBottomPreset2 from "figma:asset/ee516c006ce84ea2dba7d3f3d0aeea92702e6194.png";
import imgBodyPreset2 from "figma:asset/40692f27a417a22c249b261ab956e1538e70cada.png";
import imgTopPreset2 from "figma:asset/0243a94d70efa85e6ae196653d33e97af0b3652e.png";
import imgBottomPreset3 from "./assets/4c71084f3c3cdad39c72c4dc3c0e34f7d8963f4d.png";
import imgBodyPreset3 from "./assets/118b18d8e221026c80e4a5e111f69b541c81592c.png";
import imgTopPreset3 from "./assets/f098952ca93feab0d202254a7bd233159aacffb2.png";
import imgBadge1 from "./assets/a4182827a8d2624c73a693191d077acc14f6f403.png";
import imgBadge2 from "./assets/40ff1ff1bbc23afbeea715d1a7ad83f92e00bd37.png";
import imgGrill from "./assets/f4d7df6efbba9d80a8c0a606be5797e2aa1518bb.png";
import { ChevronRight, ChevronDown, Upload } from 'lucide-react';

type VariationType = {
  id: string;
  name: string;
  color?: string;
  isColorPicker?: boolean;
  isCustomUpload?: boolean;
  imageSet?: {
    top?: string;
    bottom?: string;
    body?: string;
    badge?: string;
  };
  group?: string;
};

type CustomizationState = {
  spheres: {
    variation: string;
    color: string;
  };
  body: {
    variation: string;
    color: string;
  };
  badge: {
    variation: string;
    customImage?: string;
  };
  shockmount: {
    variation: string;
    color: string;
  };
};

const sphereVariations: VariationType[] = [
  {
    id: 'style017',
    name: 'Стиль 017',
    color: '#e2dbd2',
    imageSet: {
      top: imgTopPreset2,
      bottom: imgBottomPreset2
    },
    group: 'spheres'
  },
  {
    id: 'style023',
    name: 'Стиль 023',
    color: '#bd0000',
    imageSet: {
      top: imgTopPreset3,
      bottom: imgBottomPreset3
    },
    group: 'spheres'
  },
  {
    id: 'wax',
    name: 'Стареющая латунь',
    color: '#b8a88a',
    imageSet: {
      top: imgTopPreset2,
      bottom: imgBottomPreset2
    },
    group: 'spheres'
  },
  { id: 'color', name: 'Цвет', isColorPicker: true, group: 'spheres' }
];

const bodyVariations: VariationType[] = [
  {
    id: 'cream',
    name: 'Cream',
    color: '#e2dbd2',
    imageSet: {
      body: imgBodyPreset2
    },
    group: 'body'
  },
  {
    id: 'style023',
    name: 'Стиль 023',
    color: '#bd0000',
    imageSet: {
      body: imgBodyPreset3
    },
    group: 'body'
  },
  {
    id: 'dark',
    name: 'Темный',
    color: '#4a3113',
    imageSet: {
      body: imgBodyPreset2
    },
    group: 'body'
  },
  { id: 'color', name: 'Цвет', isColorPicker: true, group: 'body' }
];

const badgeVariations: VariationType[] = [
  {
    id: 'style017',
    name: 'Стиль 017',
    color: '#51782A',
    imageSet: {
      badge: imgBadge2
    }
  },
  {
    id: 'style023',
    name: 'Стиль 023',
    color: '#691014',
    imageSet: {
      badge: imgBadge1
    }
  },
  {
    id: 'custom',
    name: 'Свой шильдик',
    isCustomUpload: true
  }
];

const shockmountVariations: VariationType[] = [
  { id: 'cream', name: 'Кремовый', color: '#e2dbd2' },
  { id: 'color', name: 'Цвет', isColorPicker: true }
];

export default function App() {
  const [customization, setCustomization] = useState<CustomizationState>({
    spheres: { variation: 'style017', color: '#FFEA00' },
    body: { variation: 'style023', color: '#F68BE3' },
    badge: { variation: 'style017' },
    shockmount: { variation: 'cream', color: '#2458A6' }
  });

  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [disclaimerExpanded, setDisclaimerExpanded] = useState(true);

  const handleVariationChange = (
    section: keyof CustomizationState,
    variationId: string,
    defaultColor?: string
  ) => {
    if (section === 'badge') {
      setCustomization(prev => ({
        ...prev,
        badge: { variation: variationId, customImage: prev.badge.customImage }
      }));
    } else {
      setCustomization(prev => ({
        ...prev,
        [section]: {
          variation: variationId,
          color: defaultColor || prev[section as 'spheres' | 'body' | 'shockmount'].color
        }
      }));
    }
    if (variationId !== 'custom') {
      setExpandedMenu(null);
    }
  };

  const handleColorChange = (section: 'spheres' | 'body' | 'shockmount', color: string) => {
    setCustomization(prev => ({
      ...prev,
      [section]: { ...prev[section], color }
    }));
  };

  const handleBadgeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomization(prev => ({
          ...prev,
          badge: { variation: 'custom', customImage: event.target?.result as string }
        }));
        setExpandedMenu(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentVariationName = (section: 'spheres' | 'body' | 'badge' | 'shockmount') => {
    const variations =
      section === 'spheres' ? sphereVariations :
      section === 'body' ? bodyVariations :
      section === 'badge' ? badgeVariations :
      shockmountVariations;

    const current = variations.find(v => v.id === customization[section].variation);

    if (current?.isColorPicker && section !== 'badge') {
      const color = customization[section as 'spheres' | 'body' | 'shockmount'].color;
      return `Свой цвет: ${color}`;
    }

    if (current?.isCustomUpload && customization.badge.customImage) {
      return 'Свой шильдик';
    }

    return current?.name || '';
  };

  return (
    <div className="bg-[#f4e9dc] min-h-screen w-full relative overflow-hidden">
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Menu */}
        <div className="w-full md:w-[495px] bg-[#eae0d4] flex flex-col justify-between px-[clamp(20px,5vw,45px)] py-[clamp(20px,5vh,60px)] overflow-y-auto overflow-x-hidden">
          <MenuContent
            customization={customization}
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}
            onVariationChange={handleVariationChange}
            onColorChange={handleColorChange}
            onBadgeUpload={handleBadgeUpload}
            getCurrentVariationName={getCurrentVariationName}
          />
        </div>

        {/* Preview Area */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden h-[60vh] md:h-auto">
          <ProductDisplay customization={customization} />
        </div>
      </div>

      {/* Disclaimer */}
      <div
        className={`fixed bottom-0 left-1/2 md:left-[calc(62.5%-25.404px)] -translate-x-1/2 bg-[#faf5ef] px-[clamp(15px,3vw,30px)] py-[clamp(10px,2vh,20px)] rounded-tl-[15px] rounded-tr-[15px] flex items-center gap-[clamp(10px,2vw,20px)] z-50 transition-all duration-300 ${
          disclaimerExpanded ? 'max-w-[90%]' : 'max-w-[200px]'
        }`}
      >
        <svg className="size-[clamp(20px,3vw,30px)] shrink-0" fill="none" viewBox="0 0 30 30">
          <path d={svgPaths.p2561a400} fill="#F35500" />
        </svg>
        {disclaimerExpanded && (
          <p className="font-['Inter:Semi_Bold',sans-serif] text-[clamp(12px,2vw,24px)] text-black">
            Вид готового изделия может отличаться от предпросмотра
          </p>
        )}
        <button
          onClick={() => setDisclaimerExpanded(!disclaimerExpanded)}
          className={`rotate-90 cursor-pointer transition-transform ${disclaimerExpanded ? '' : 'rotate-[-90deg]'}`}
        >
          <svg className="size-[12px]" fill="none" viewBox="0 0 9 14">
            <path d={svgPaths.p3142dd00} stroke="#4A3113" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function MenuContent({
  customization,
  expandedMenu,
  setExpandedMenu,
  onVariationChange,
  onColorChange,
  onBadgeUpload,
  getCurrentVariationName
}: {
  customization: CustomizationState;
  expandedMenu: string | null;
  setExpandedMenu: (menu: string | null) => void;
  onVariationChange: (section: keyof CustomizationState, variationId: string, defaultColor?: string) => void;
  onColorChange: (section: 'spheres' | 'body' | 'shockmount', color: string) => void;
  onBadgeUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getCurrentVariationName: (section: 'spheres' | 'body' | 'badge' | 'shockmount') => string;
}) {
  return (
    <>
      <div className="flex flex-col gap-[clamp(25px,5vh,50px)]">
        {/* Microphone Section */}
        <div className="flex flex-col gap-[clamp(10px,2vh,20px)]">
          <h2 className="font-['Inter:Bold',sans-serif] text-[clamp(18px,3vw,28px)] text-black tracking-[-0.56px]">
            Микрофон
          </h2>

          <div className="flex flex-col">
            {/* Spheres */}
            <MenuItem
              label="Полусферы"
              subtitle={getCurrentVariationName('spheres')}
              color={customization.spheres.color}
              isExpanded={expandedMenu === 'spheres'}
              onClick={() => setExpandedMenu(expandedMenu === 'spheres' ? null : 'spheres')}
            />
            {expandedMenu === 'spheres' && (
              <SubMenu onBack={() => setExpandedMenu(null)} title="Полусферы">
                {sphereVariations.map((variation) => (
                  <SubMenuItem
                    key={variation.id}
                    label={variation.name}
                    color={variation.color}
                    isSelected={customization.spheres.variation === variation.id}
                    onClick={() => onVariationChange('spheres', variation.id, variation.color)}
                    showColorPicker={variation.isColorPicker && customization.spheres.variation === 'color'}
                    onColorChange={(color) => onColorChange('spheres', color)}
                    currentColor={customization.spheres.color}
                  />
                ))}
              </SubMenu>
            )}

            {/* Body */}
            <MenuItem
              label="Корпус"
              subtitle={getCurrentVariationName('body')}
              color={customization.body.color}
              isExpanded={expandedMenu === 'body'}
              onClick={() => setExpandedMenu(expandedMenu === 'body' ? null : 'body')}
            />
            {expandedMenu === 'body' && (
              <SubMenu onBack={() => setExpandedMenu(null)} title="Корпус">
                {bodyVariations.map((variation) => (
                  <SubMenuItem
                    key={variation.id}
                    label={variation.name}
                    color={variation.color}
                    isSelected={customization.body.variation === variation.id}
                    onClick={() => onVariationChange('body', variation.id, variation.color)}
                    showColorPicker={variation.isColorPicker && customization.body.variation === 'color'}
                    onColorChange={(color) => onColorChange('body', color)}
                    currentColor={customization.body.color}
                  />
                ))}
              </SubMenu>
            )}

            {/* Badge */}
            <MenuItem
              label="Шильдик"
              subtitle={getCurrentVariationName('badge')}
              icon={
                customization.badge.customImage ? (
                  <img src={customization.badge.customImage} alt="Custom badge" className="w-full h-full object-contain" />
                ) : (
                  <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
                    <path d={svgPaths.p2c2dae80} fill={customization.badge.variation === 'style017' ? '#51782A' : '#691014'} />
                    <path d={svgPaths.p2c768b00} fill={customization.badge.variation === 'style017' ? '#51782A' : '#691014'} />
                    <path d={svgPaths.p20d9c680} fill={customization.badge.variation === 'style017' ? '#51782A' : '#691014'} />
                  </svg>
                )
              }
              isExpanded={expandedMenu === 'badge'}
              onClick={() => setExpandedMenu(expandedMenu === 'badge' ? null : 'badge')}
            />
            {expandedMenu === 'badge' && (
              <SubMenu onBack={() => setExpandedMenu(null)} title="Шильдик">
                {badgeVariations.map((variation) => (
                  <SubMenuItem
                    key={variation.id}
                    label={variation.name}
                    icon={
                      variation.isCustomUpload ? (
                        <Upload className="size-[20px]" />
                      ) : (
                        <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
                          <path d={svgPaths.p2c2dae80} fill={variation.color} />
                          <path d={svgPaths.p2c768b00} fill={variation.color} />
                          <path d={svgPaths.p20d9c680} fill={variation.color} />
                        </svg>
                      )
                    }
                    isSelected={customization.badge.variation === variation.id}
                    onClick={() => {
                      if (variation.isCustomUpload) {
                        document.getElementById('badge-upload')?.click();
                      } else {
                        onVariationChange('badge', variation.id);
                      }
                    }}
                    isUpload={variation.isCustomUpload}
                  />
                ))}
                <input
                  id="badge-upload"
                  type="file"
                  accept="image/*"
                  onChange={onBadgeUpload}
                  className="hidden"
                />
              </SubMenu>
            )}
          </div>
        </div>

        {/* Suitcase Section */}
        <div className="flex flex-col gap-[clamp(10px,2vh,20px)]">
          <h2 className="font-['Inter:Bold',sans-serif] text-[clamp(18px,3vw,28px)] text-black tracking-[-0.56px]">
            Чемодан
          </h2>
          <MenuItem
            label="Логотип"
            subtitle="Фирменный СОЮЗ"
            icon={
              <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
                <path d={svgPaths.p2c2dae80} fill="black" />
                <path d={svgPaths.p2c768b00} fill="black" />
                <path d={svgPaths.p20d9c680} fill="black" />
              </svg>
            }
            isExpanded={false}
            onClick={() => {}}
          />
        </div>

        {/* Shockmount Section */}
        <div className="flex flex-col gap-[clamp(10px,2vh,20px)]">
          <h2 className="font-['Inter:Bold',sans-serif] text-[clamp(18px,3vw,28px)] text-black tracking-[-0.56px]">
            Амортизатор
          </h2>
          <MenuItem
            label="Цвет"
            subtitle={getCurrentVariationName('shockmount')}
            color={customization.shockmount.color}
            isExpanded={expandedMenu === 'shockmount'}
            onClick={() => setExpandedMenu(expandedMenu === 'shockmount' ? null : 'shockmount')}
          />
          {expandedMenu === 'shockmount' && (
            <SubMenu onBack={() => setExpandedMenu(null)} title="Амортизатор">
              {shockmountVariations.map((variation) => (
                <SubMenuItem
                  key={variation.id}
                  label={variation.name}
                  color={variation.color}
                  isSelected={customization.shockmount.variation === variation.id}
                  onClick={() => onVariationChange('shockmount', variation.id, variation.color)}
                  showColorPicker={variation.isColorPicker && customization.shockmount.variation === 'color'}
                  onColorChange={(color) => onColorChange('shockmount', color)}
                  currentColor={customization.shockmount.color}
                />
              ))}
            </SubMenu>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[15px] w-full max-w-[425px]">
        <div className="bg-[#007187] rounded-[15px] p-[clamp(15px,3vw,30px)] flex flex-col md:flex-row items-center justify-center gap-[clamp(10px,2vw,20px)]">
          <p className="font-['Inter:Bold',sans-serif] text-[clamp(15px,3vw,32px)] text-[#faf5ef]">15000₽</p>
          <svg className="size-[clamp(20px,3vw,31px)]" fill="none" viewBox="0 0 31 31">
            <path d={svgPaths.p25b6e10} fill="#FAF5EF" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-['Inter:Semi_Bold',sans-serif] text-[clamp(12px,2.5vw,24px)] text-black">
            Предварительная стоимость
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[clamp(8px,1.5vw,16px)] text-[#4a3113] w-full md:w-auto">
            Может измениться в зависимости от компонентов или сложности изготовления
          </p>
        </div>
      </div>

      <button className="bg-[#faf5ef] flex items-center gap-[15px] px-[35px] py-[11px] rounded-[3px] w-fit">
        <div className="rotate-180">
          <svg className="size-[12px]" fill="none" viewBox="0 0 9 14">
            <path d={svgPaths.p3142dd00} stroke="#4A3113" strokeWidth="2" />
          </svg>
        </div>
        <p className="font-['Inter:Regular',sans-serif] text-[clamp(8px,1.5vw,16px)] text-black">Назад</p>
      </button>
    </>
  );
}

function MenuItem({
  label,
  subtitle,
  color,
  icon,
  isExpanded,
  onClick
}: {
  label: string;
  subtitle: string;
  color?: string;
  icon?: React.ReactNode;
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-[#faf5ef] h-[84px] border-t-2 border-[rgba(0,0,0,0.1)] px-[clamp(10px,2vw,20px)] py-[15px] flex items-center gap-[clamp(10px,2vw,20px)] cursor-pointer hover:bg-[#f5f0ea] transition-colors"
      onClick={onClick}
    >
      <div className="size-[49px] rounded-full border-2 border-[rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden shrink-0">
        {color ? (
          <div className="w-[85%] h-[85%] rounded-full" style={{ backgroundColor: color }} />
        ) : icon ? (
          <div className="w-[85%] h-[85%] rounded-full bg-[#e2d5c5] flex items-center justify-center">
            {icon}
          </div>
        ) : null}
      </div>

      <div className="flex-1 flex flex-col gap-[4px] min-w-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] text-[clamp(12px,2.5vw,24px)] text-black truncate">{label}</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] text-[clamp(8px,1.5vw,16px)] text-[#4a3113] opacity-60 tracking-[-0.16px] truncate">
          {subtitle}
        </p>
      </div>

      {isExpanded ? (
        <ChevronDown className="text-[#4a3113] opacity-60 shrink-0" size={20} strokeWidth={2} />
      ) : (
        <ChevronRight className="text-[#4a3113] opacity-60 shrink-0" size={20} strokeWidth={2} />
      )}

      <p className="font-['Inter:Semi_Bold',sans-serif] text-[clamp(8px,1.5vw,16px)] text-[#4a3113] opacity-60 tracking-[-0.16px] shrink-0">
        +1500₽
      </p>
    </div>
  );
}

function SubMenu({ children, onBack, title }: { children: React.ReactNode; onBack: () => void; title: string }) {
  return (
    <div className="bg-[#f5f0ea] border-t-2 border-[rgba(0,0,0,0.05)]">
      <div className="px-[clamp(10px,2vw,20px)] py-[15px] border-b border-[rgba(0,0,0,0.05)] flex items-center justify-between">
        <h3 className="font-['Inter:Bold',sans-serif] text-[clamp(14px,2.5vw,20px)] text-black">{title}</h3>
        <button onClick={onBack} className="flex items-center gap-2 text-[#4a3113] hover:text-black">
          <div className="rotate-180">
            <ChevronRight size={16} />
          </div>
          <span className="text-[clamp(10px,1.5vw,14px)]">Назад</span>
        </button>
      </div>
      {children}
    </div>
  );
}

function SubMenuItem({
  label,
  color,
  icon,
  isSelected,
  onClick,
  showColorPicker,
  onColorChange,
  currentColor,
  isUpload
}: {
  label: string;
  color?: string;
  icon?: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  showColorPicker?: boolean;
  onColorChange?: (color: string) => void;
  currentColor?: string;
  isUpload?: boolean;
}) {
  return (
    <div className="border-t border-[rgba(0,0,0,0.05)]">
      <div
        className="px-[clamp(10px,2vw,20px)] py-[15px] flex items-center gap-[12px] cursor-pointer hover:bg-[#ebe6e0] transition-colors"
        onClick={onClick}
      >
        <div
          className={`size-[31px] rounded-full flex items-center justify-center overflow-hidden shrink-0 ${
            isSelected ? 'border-2 border-[#007187]' : 'border-2 border-[rgba(0,0,0,0.2)]'
          }`}
        >
          {icon ? (
            <div className="w-[85%] h-[85%] rounded-full bg-[#e2d5c5] flex items-center justify-center scale-75">
              {icon}
            </div>
          ) : color ? (
            <div className="w-[85%] h-[85%] rounded-full" style={{ backgroundColor: color }} />
          ) : null}
        </div>

        <p className="flex-1 font-['Inter:Semi_Bold',sans-serif] text-[clamp(10px,2vw,18px)] text-[#4a3113] opacity-60 truncate">
          {label}
        </p>

        <p className="font-['Inter:Semi_Bold',sans-serif] text-[clamp(8px,1.5vw,16px)] text-[#4a3113] opacity-60 tracking-[-0.16px] shrink-0">
          +1500₽
        </p>
      </div>

      {showColorPicker && onColorChange && currentColor && (
        <div className="px-[clamp(10px,2vw,20px)] pb-[15px] flex items-center gap-3">
          <input
            type="color"
            value={currentColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
          <input
            type="text"
            value={currentColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm"
            placeholder="#000000"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function ProductDisplay({ customization }: { customization: CustomizationState }) {
  // Determine if we're using color picker mode or preset
  const spheresUseColor = customization.spheres.variation === 'color';
  const bodyUseColor = customization.body.variation === 'color';
  const shockmountUseColor = customization.shockmount.variation === 'color';

  // Get images based on variation
  const getSpheresImages = () => {
    if (spheresUseColor) {
      return { top: imgTopPreset1, bottom: imgBottomPreset1 };
    }
    const variation = sphereVariations.find(v => v.id === customization.spheres.variation);
    return {
      top: variation?.imageSet?.top || imgTopPreset2,
      bottom: variation?.imageSet?.bottom || imgBottomPreset2
    };
  };

  const getBodyImage = () => {
    if (bodyUseColor) return imgBodyPreset1;
    const variation = bodyVariations.find(v => v.id === customization.body.variation);
    return variation?.imageSet?.body || imgBodyPreset2;
  };

  const getBadgeImage = () => {
    if (customization.badge.customImage) {
      return customization.badge.customImage;
    }
    const variation = badgeVariations.find(v => v.id === customization.badge.variation);
    return variation?.imageSet?.badge || imgBadge2;
  };

  const spheresImages = getSpheresImages();

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-[1425px] max-h-[1148px]" style={{ aspectRatio: '1425/1148' }}>
        <div className="absolute inset-0 scale-[0.5] md:scale-75 lg:scale-90 xl:scale-100 origin-center">
          <div className="relative" style={{ width: '1425px', height: '1148px' }}>
            {/* Case */}
            <div className="absolute h-[894.91px] left-[calc(50%+46.5px)] top-[calc(50%-20.545px)] -translate-x-1/2 -translate-y-1/2 w-[744px]">
              <img src={imgDivCaseWithBgImage} alt="Case" className="w-full h-full object-cover" />
            </div>

            {/* Shockmount */}
            <div className="absolute bottom-[106px] left-[215px] w-[384.679px] h-[459.838px]">
              <div className="relative w-full h-full">
                {/* Spider COLOR - only visible in color mode */}
                <div
                  className={`absolute h-[443.587px] left-[3.05px] top-0 w-[381.633px] ${shockmountUseColor ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    WebkitMaskImage: `url('${imgSpiderColor}')`,
                    maskImage: `url('${imgSpiderColor}')`,
                    WebkitMaskSize: '381.632px 443.587px',
                    maskSize: '381.632px 443.587px',
                    WebkitMaskPosition: '0px 0px',
                    maskPosition: '0px 0px'
                  }}
                >
                  <img src={imgSpiderColor1} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Spider Cream - only visible in preset mode */}
                <div
                  className={`absolute h-[443.587px] left-[3.05px] top-0 w-[381.633px] ${!shockmountUseColor ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    WebkitMaskImage: `url('${imgSpiderColor}')`,
                    maskImage: `url('${imgSpiderColor}')`,
                    WebkitMaskSize: '381.632px 443.587px',
                    maskSize: '381.632px 443.587px',
                    WebkitMaskPosition: '0px 0px',
                    maskPosition: '0px 0px'
                  }}
                >
                  <img src={imgSpiderCream} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Color overlay - only in color picker mode */}
                <div
                  className={`absolute h-[454px] left-[-8px] top-[-5.16px] w-[397px] ${shockmountUseColor ? 'opacity-[0.92]' : 'opacity-0'}`}
                  style={{
                    backgroundColor: customization.shockmount.color,
                    WebkitMaskImage: `url('${imgSpiderColor}')`,
                    maskImage: `url('${imgSpiderColor}')`,
                    WebkitMaskSize: '381.632px 443.587px',
                    maskSize: '381.632px 443.587px',
                    WebkitMaskPosition: '11.047px 5.162px',
                    maskPosition: '11.047px 5.162px',
                    mixBlendMode: 'multiply'
                  }}
                />

                {/* Spider Details */}
                <div className="absolute h-[429.368px] left-0 top-[30.47px] w-[358.272px]">
                  <img src={imgSpiderDetails} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Microphone */}
            <div className="absolute bottom-[106px] right-[373px] w-[205px] h-[701.177px] overflow-clip">
              {/* Bottom Part */}
              <div
                className="absolute h-[701.177px] left-0 top-0 w-[205px]"
                style={{
                  WebkitMaskImage: `url('${imgMicrophoneMask}')`,
                  maskImage: `url('${imgMicrophoneMask}')`,
                  WebkitMaskSize: '205px 701.177px',
                  maskSize: '205px 701.177px',
                  WebkitMaskPosition: '0px 0px',
                  maskPosition: '0px 0px'
                }}
              >
                <div className="absolute h-[108.116px] left-0 top-[593.06px] w-[205px]">
                  <img src={spheresImages.bottom} alt="" className="w-full h-full object-cover" />
                </div>
                <div
                  className={`absolute h-[120.051px] left-0 top-[593.94px] w-[205px] ${spheresUseColor ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    backgroundColor: customization.spheres.color,
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>

              {/* Mid Part (Body) */}
              <div
                className="absolute h-[701.177px] left-0 top-0 w-[205px]"
                style={{
                  WebkitMaskImage: `url('${imgMicrophoneMask}')`,
                  maskImage: `url('${imgMicrophoneMask}')`,
                  WebkitMaskSize: '205px 701.177px',
                  maskSize: '205px 701.177px',
                  WebkitMaskPosition: '0px 0px',
                  maskPosition: '0px 0px'
                }}
              >
                <div className="absolute h-[264.675px] left-[19.13px] top-[329.26px] w-[166.562px]">
                  <img src={getBodyImage()} alt="" className="w-full h-full object-cover" />
                </div>
                <div
                  className={`absolute h-[264.675px] left-[18.95px] top-[329.26px] w-[166.738px] ${bodyUseColor ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    backgroundColor: customization.body.color,
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>

              {/* Top Part */}
              <div
                className="absolute h-[701.177px] left-0 top-0 w-[205px]"
                style={{
                  WebkitMaskImage: `url('${imgMicrophoneMask}')`,
                  maskImage: `url('${imgMicrophoneMask}')`,
                  WebkitMaskSize: '205px 701.177px',
                  maskSize: '205px 701.177px',
                  WebkitMaskPosition: '0px 0px',
                  maskPosition: '0px 0px'
                }}
              >
                <div className="absolute h-[329.264px] left-0 top-0 w-[205px]">
                  <img src={spheresImages.top} alt="" className="w-full h-full object-cover" />
                </div>
                <div
                  className={`absolute h-[329.264px] left-0 top-0 w-[205px] ${spheresUseColor ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    backgroundColor: customization.spheres.color,
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>

              {/* Badge - always on top */}
              <div
                className="absolute h-[84.422px] left-[calc(50%+0.088px)] top-[calc(50%+73.891px)] -translate-x-1/2 -translate-y-1/2 w-[83.018px] z-10"
                style={{
                  WebkitMaskImage: `url('${imgMicrophoneMask}')`,
                  maskImage: `url('${imgMicrophoneMask}')`,
                  WebkitMaskSize: '205px 701.177px',
                  maskSize: '205px 701.177px',
                  WebkitMaskPosition: '-61.079px -382.269px',
                  maskPosition: '-61.079px -382.269px'
                }}
              >
                <img src={getBadgeImage()} alt="Badge" className="w-full h-full object-cover" />
              </div>

              {/* Grill - always on top */}
              <div
                className="absolute h-[138.129px] left-[33px] top-[10.57px] w-[137.949px] z-10 opacity-100"
                style={{
                  WebkitMaskImage: `url('${imgMicrophoneMask}')`,
                  maskImage: `url('${imgMicrophoneMask}')`,
                  WebkitMaskSize: '205px 701.177px',
                  maskSize: '205px 701.177px',
                  WebkitMaskPosition: '-32.999px -10.574px',
                  maskPosition: '-32.999px -10.574px'
                }}
              >
                <img src={imgGrill} alt="Grill" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
