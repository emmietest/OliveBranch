export type MapTileLayerProps = {
  src: string;
  className: string;
  alt: string;
};

export const MapTileLayer = (props: MapTileLayerProps) => {
  return (
    <img
      alt={props.alt}
      src={props.src}
      className={`absolute box-border caret-transparent h-64 mix-blend-plus-lighter outline-[3px] align-top w-64 left-0 top-0 ${props.className}`}
    />
  );
};
