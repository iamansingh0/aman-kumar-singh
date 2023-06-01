import React, { useEffect, useState } from "react"
import "../css/type.css"
const space = "\xa0\xa0"
const Typewriter = () => {
    const [typedText, setTypedText] = useState("")

    useEffect(() => {
        const text = `const me = {
        ${space}name: ${space}'Aman Kumar Singh',
          ${space}title: ${space}'Web Developer',
          ${space}langauge_spoken: ${space}[${space}'Hindi',${space} 'English'${space}],
          ${space}coding:${space} [${space}'Javascript', ${space}'Solidity', ${space}'C++', ${space}'Java'${space}],
          
          ${space}say_hi: ${space}function(👋🏻) {
            ${space}${space}console.log('${space} 🙋🏻‍♂️${space}Thanks for dropping by, hope you find some of my work interesting.'${space})
            ${space}},
            
            ${space}learning: ${space}' 🔭 I am learning advance reactJS currently.${space}',
        }
        
        me.say_hi(👋🏻)`

        let currentIndex = 0
        let tempText = ""

        const typeText = () => {
            if (currentIndex < text.length) {
                const char = text.charAt(currentIndex)
                if (char === "\n") {
                    tempText += "<br>"
                } else if (char === "[" || char === "]" || char === "(" || char === ")" || char === "{" || char === "}") {
                    tempText += `<span class="brackets">${char}</span>`
                } else if (char === "'") {
                    tempText += `<span class="string">${char}</span>`
                } else if (char === ",") {
                    tempText += `${char}</span>`
                } else {
                    tempText += char
                }
                setTypedText(tempText)
                currentIndex++
                setTimeout(typeText, 40)
            }
        }

        typeText()
    }, [])

    return (
        <div
            className="cmd-text"
            dangerouslySetInnerHTML={{ __html: typedText }}
        ></div>
    )
}

export default Typewriter
