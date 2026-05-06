export type MapMarkersProps = {
  src: string;
  alt: string;
  className: string;
  role: string;
};

export const MapMarkers = (props: MapMarkersProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      role={props.role}
      className={`absolute box-border caret-transparent h-[41px] mt-[-41px] outline-[3px] origin-[0px_0px] align-top -ml-3 left-0 top-0 ${props.className}`}
    />
  );
};
