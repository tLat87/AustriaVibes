import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillOpacity={0.7}
            d="M3.5 5v14c0 2.201 1.794 3 3 3h15v-2H6.512c-.462-.012-1.012-.194-1.012-1s.55-.988 1.012-1H21.5V4c0-1.103-.897-2-2-2h-13c-1.206 0-3 .799-3 3Z"
        />
    </Svg>
)
export default SvgComponent
