export type MapControlsProps = {
  containerClassName: string;
  mode: string;
  zoomInHref: string;
  zoomInTitle: string;
  zoomInAriaLabel: string;
  zoomInClassName: string;
  zoomInText: string;
  zoomOutHref: string;
  zoomOutTitle: string;
  zoomOutAriaLabel: string;
  zoomOutClassName: string;
  zoomOutText: string;
  attributionHref: string;
  attributionTitle: string;
  attributionClassName: string;
  attributionIconSrc: string;
  attributionIconAlt: string;
  attributionIconClassName: string;
  attributionText: string;
};

export const MapControls = (props: MapControlsProps) => {
  return (
    <div
      className={`relative box-border caret-transparent clear-both float-right outline-[3px] pointer-events-auto z-[800] mr-5 mb-5 ${props.containerClassName}`}
    >
      {props.mode === "zoom" ? (
        <>
          <a
            href={props.zoomInHref}
            title={props.zoomInTitle}
            role="button"
            aria-label={props.zoomInAriaLabel}
            className={`box-border caret-transparent outline-[3px] ${props.zoomInClassName}`}
          >
            <span className="box-border caret-transparent outline-[3px]">
              {props.zoomInText}
            </span>
          </a>
          <a
            href={props.zoomOutHref}
            title={props.zoomOutTitle}
            role="button"
            aria-label={props.zoomOutAriaLabel}
            className={props.zoomOutClassName}
          >
            <span className="box-border caret-transparent outline-[3px]">
              {props.zoomOutText}
            </span>
          </a>
        </>
      ) : (
        <a
          href={props.attributionHref}
          title={props.attributionTitle}
          className={`box-border caret-transparent outline-[3px] ${props.attributionClassName}`}
        >
          <img
            src={props.attributionIconSrc}
            alt={props.attributionIconAlt}
            className={props.attributionIconClassName}
          />
          {props.attributionText}
        </a>
      )}
    </div>
  );
};
