import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                fillOpacity={0.7}
                d="M5.262 22.294c.436.34.988.223 1.647-.254l5.622-4.122 5.633 4.122c.66.477 1.201.593 1.648.254.435-.328.531-.869.265-1.642l-2.22-6.591 5.674-4.069c.66-.466.925-.954.755-1.483-.17-.509-.67-.753-1.488-.753h-6.961l-2.115-6.58C13.467.392 13.084 0 12.532 0c-.543 0-.925.392-1.18 1.176l-2.115 6.58H2.275c-.818 0-1.317.244-1.487.753-.181.53.095 1.017.754 1.483l5.675 4.069-2.22 6.59c-.266.774-.17 1.315.265 1.643Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.9 0h24v24H.9z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
