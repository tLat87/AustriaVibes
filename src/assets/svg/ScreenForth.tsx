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
                d="M23.872 11.994c0 6.609-5.28 11.994-11.786 11.994C5.592 23.988.3 18.603.3 11.994.3 5.374 5.592 0 12.086 0c6.506 0 11.786 5.374 11.786 11.994ZM4.98 19.18c1.768 1.917 4.449 3.022 7.095 3.022 2.657 0 5.327-1.105 7.106-3.022-1.26-2.023-3.998-3.175-7.106-3.175-3.132 0-5.847 1.176-7.095 3.175ZM8.11 9.572c0 2.528 1.745 4.41 3.964 4.433 2.23.023 3.963-1.905 3.963-4.433 0-2.376-1.745-4.351-3.963-4.351-2.207 0-3.975 1.975-3.964 4.35Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.3 0h24v24H.3z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
