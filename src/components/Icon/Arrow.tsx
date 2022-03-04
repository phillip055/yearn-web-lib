import * as React from "react";
import { SVGProps } from "react";

export interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  variant?: "down" | "up" | "left" | "right"
}

const SvgUp = (props: ArrowIconProps) => {
  let rotateDeg = undefined;
  switch(props.variant) {
    case "down":
      rotateDeg = "0";
      break;
    case "left":
      rotateDeg = "90";
      break;
    case "up":
      rotateDeg = "180";
      break;
    case "right":
      rotateDeg = "270";
      break;
  }
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={rotateDeg && "rotate(" + rotateDeg + ")"}
      {...props}
    >
      <path
        d="m4.249 8.662 6.996 7.997a1.002 1.002 0 0 0 1.506 0l7-8a.994.994 0 0 0 .226-.455c.007-.041.02-.085.02-.126.003-.04.002-.079 0-.119a.987.987 0 0 0-.323-.695.99.99 0 0 0-.677-.264H5a.998.998 0 0 0-.882 1.47c.035.067.078.13.13.192Z"
        fill="currentcolor"
      />
    </svg>
  )
};

export default SvgUp;
