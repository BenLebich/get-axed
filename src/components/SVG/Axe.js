import React from 'react';
import {
    isMobile
  } from "react-device-detect";

export default class Axe extends React.Component {
    constructor() {
        super()
        this.state = {left: 0, leftOrg: 0, rotate: 0, visibility: 'hidden'}
    }
    componentDidMount() {
        if (!isMobile || true) {
            window.addEventListener('scroll', this.handleScroll.bind(this));
            let elDimensions = document.getElementById("throwing-axe").getBoundingClientRect();
            let left = elDimensions.left;
            if (left > 0) left *= -1
            left =  (left - elDimensions.width);
            this.setState({
                left,
                leftOrg: left
            })
            setTimeout(() => {
                this.setState({
                    visibility: 'visible'
                })
            }, 2000)
        }
        
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let axePos = document.getElementById("throwing-axe").getBoundingClientRect().top
        let height = window.innerHeight - 400;
        if (axePos > 0 && axePos < window.innerHeight) {
            let perc = (100-(axePos/height * 100))/100;
            
            let percRotate = (100-(axePos/window.innerHeight * 100))/100;
            this.setState({
                left: perc * window.innerWidth,
                rotate: percRotate * 1424
            })
        }
    }

    

    render() {
        console.log({transform: 'translateX('+this.state.left+'px)'})
        return (
            <div className="absolute">
                <img
                        alt="..."
                        src="https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2Fhand-axe.png?alt=media&token=2aa87589-a274-4a2a-bf54-7f8605502a7e"
                        id="throwing-axe"
                        className="throwing-axe"
                        style={{transform: 'translateX('+this.state.left+'px) rotateZ('+this.state.rotate+'deg)', visibility: this.state.visibility}}
                        width="150.000000pt"
                      />
                {/*<svg 
                    style={{transform: 'translateX('+this.state.left+'px) rotateZ('+this.state.rotate+'deg)', visibility: this.state.visibility}}
                    id="throwing-axe"
                    className="throwing-axe"
                    version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="100.000000pt" height="76.000000pt" viewBox="0 0 300.000000 228.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                    </metadata>
                    <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)"
                    fill="#ffffff" stroke="black" strokeWidth="40" >
                    <path d="M1753 2236 c-4 -7 -84 -93 -178 -190 -93 -98 -171 -185 -173 -195 -2
                    -11 12 -28 38 -46 69 -48 68 -50 -28 -150 -395 -410 -921 -952 -1214 -1251
                    -198 -202 -198 -202 -198 -247 0 -93 66 -157 161 -157 56 0 84 17 164 102 39
                    40 158 165 265 278 107 113 206 217 220 231 386 405 902 929 916 929 18 0 115
                    -115 177 -211 67 -103 138 -248 167 -344 12 -39 25 -84 31 -101 12 -40 31
                    -195 25 -202 -3 -2 -1 -13 5 -24 9 -17 18 -18 67 -13 125 13 300 74 404 141
                    85 55 164 132 220 214 48 70 108 191 108 216 0 8 5 24 11 35 5 11 16 52 22 92
                    8 46 17 71 25 70 8 -2 12 13 12 47 l0 49 -37 6 c-172 26 -378 79 -439 113 -10
                    6 -53 27 -94 47 -103 50 -220 129 -324 216 -5 4 3 28 18 53 33 57 34 106 1
                    162 -34 57 -98 89 -161 79 -25 -3 -48 -13 -51 -21 -6 -16 -63 -19 -63 -4 0 6
                    -5 16 -10 23 -6 7 -19 24 -31 40 -22 30 -44 35 -56 13z"/>
                    </g>
                </svg>
                */}
            </div>
        )    
    }
    
} 