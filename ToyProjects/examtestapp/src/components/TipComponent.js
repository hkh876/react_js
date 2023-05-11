import { STATIC_SERVER_DOMAIN } from "../statics/StaticValues";
import "../styles/TipComponent.css"

function TipComponent(props) {
    const tipView = props.choices.map((value, index) => {
        if (value.capturedTip) {
            const capturedImageUrl = STATIC_SERVER_DOMAIN + value.imageUrl
            return <img key={index} className="tip-captured-image" src={capturedImageUrl} alt="This is captured"></img>    
        } else {
            let tipString = '';
            if (value.tip !== '') {
                if (index === 0) {
                    tipString += '① ';
                } else if (index === 1) {
                    tipString += '② ';
                } else if (index === 2) {
                    tipString += '③ ';
                } else if (index === 3) {
                    tipString += '④ ';
                }
                
                tipString += value.tip;
            }
            return <span className="tip-content" key={index}>{tipString}</span>
        }
    });
    return (
        <div className="tip-container">
            <span className="font-size-20 margin-right-20">TIP</span>
            <div>
                { tipView }
            </div>
        </div>
    )
}

export default TipComponent;