// Tool Icons Component using Real Images placed in public/icons/

interface IconProps {
  size?: number;
}

// DaVinci Resolve Icon (davinci.jpg)
export function DaVinciIcon({ size = 80 }: IconProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl flex items-center justify-center bg-white"
      style={{ width: size, height: size }}
    >
      <img
        src="/icons/davinci.jpg"
        alt="DaVinci Resolve Logo"
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// CapCut Icon (capcut.png)
export function CapCutIcon({ size = 80 }: IconProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl flex items-center justify-center bg-white"
      style={{ width: size, height: size }}
    >
      <img
        src="/icons/capcut.png"
        alt="CapCut Logo"
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Canva Icon (canva.jpg)
export function CanvaIcon({ size = 80 }: IconProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl flex items-center justify-center bg-white"
      style={{ width: size, height: size }}
    >
      <img
        src="/icons/canva.jpg"
        alt="Canva Logo"
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
