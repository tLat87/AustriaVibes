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
                d="M11.005 10.94a1.467 1.467 0 0 0 0 2.12 1.584 1.584 0 0 0 2.19 0 1.467 1.467 0 0 0 0-2.12 1.585 1.585 0 0 0-2.19 0ZM12.1.374C5.472.375.1 5.58.1 12s5.372 11.625 12 11.625c6.627 0 12-5.204 12-11.625 0-6.42-5.373-11.625-12-11.625Zm6.103 6.94-3.192 6.766c-.154.328-.425.59-.763.74l-6.984 3.092c-.806.357-1.636-.448-1.268-1.228L9.19 9.918c.154-.327.425-.59.763-.739l6.984-3.092c.806-.357 1.636.447 1.267 1.228Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.1 0h24v24H.1z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
