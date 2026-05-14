interface AdBannerProps {
  size: "large" | "medium" | "small";
  position: "top" | "middle" | "bottom" | "sidebar";
  className?: string;
  layout?: "single" | "double" | "triple"; // New layout option
}

export default function AdBanner({
  size,
  position,
  className = "",
  layout = "single",
}: AdBannerProps) {
  const getAdDimensions = () => {
    switch (size) {
      case "large":
        return "h-32 md:h-40";
      case "medium":
        return "h-24 md:h-32";
      case "small":
        return "h-16 md:h-20";
      default:
        return "h-24 md:h-32";
    }
  };

  const getAdContent = (index?: number) => {
    const suffix = index ? ` ${index}` : "";
    switch (position) {
      case "top":
        return `Premium Advertisement Space - Top Banner${suffix}`;
      case "middle":
        return `Featured Advertisement - Content Area${suffix}`;
      case "bottom":
        return `Advertisement Space - Footer Area${suffix}`;
      case "sidebar":
        return `Sidebar Ad Space${suffix}`;
      default:
        return `Advertisement Space Available${suffix}`;
    }
  };

  const getGridCols = () => {
    switch (layout) {
      case "double":
        return "grid-cols-1 md:grid-cols-2";
      case "triple":
        return "grid-cols-1 md:grid-cols-3";
      default:
        return "grid-cols-1";
    }
  };

  if (layout === "single") {
    return (
      <div
        className={`bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center ${getAdDimensions()} ${className}`}
      >
        <div className="text-center text-muted-foreground">
          <div className="text-sm font-medium">{getAdContent()}</div>
          <div className="text-xs mt-1">728x90 / 970x250 / Responsive</div>
        </div>
      </div>
    );
  }

  const bannerCount = layout === "double" ? 2 : 3;

  return (
    <div className={`grid gap-4 ${getGridCols()} ${className}`}>
      {Array.from({ length: bannerCount }, (_, index) => (
        <div
          key={index}
          className={`bg-muted border-2 border-dashed border-border rounded-lg flex items-center justify-center ${getAdDimensions()}`}
        >
          <div className="text-center text-muted-foreground">
            <div className="text-sm font-medium">{getAdContent(index + 1)}</div>
            <div className="text-xs mt-1">
              {layout === "double" ? "400x300" : "300x250"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
