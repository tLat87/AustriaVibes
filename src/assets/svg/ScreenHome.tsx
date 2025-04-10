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
                d="m21.212 9.722-7.5-6.816a1.5 1.5 0 0 0-2.025 0l-7.5 6.816a1.5 1.5 0 0 0-.487 1.106v8.635c-.006.378.127.745.375 1.031A1.491 1.491 0 0 0 5.2 21h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 0 .75.75h4.5c.249.002.494-.059.712-.178A1.51 1.51 0 0 0 21.7 19.5v-8.672a1.5 1.5 0 0 0-.488-1.106Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.7 0h24v24H.7z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
